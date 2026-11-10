
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import * as admin from 'firebase-admin';

// --- STRIPE & FIREBASE INITIALIZATION ---
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

if (!stripeSecretKey || !webhookSecret) {
    console.error("🚨 CRITICAL: Stripe secret keys are not configured in environment variables.");
}

const stripe = new Stripe(stripeSecretKey!, {
  apiVersion: '2024-06-20',
  typescript: true,
});

function initializeFirebaseAdmin() {
  if (!admin.apps.length) {
    try {
      // Use application default credentials for secure, key-less authentication in App Hosting
      admin.initializeApp();
    } catch (error: any) {
      console.error("🚨 Webhook: Firebase Admin Init Error:", error);
      throw new Error("Webhook Firebase Admin initialization failed.");
    }
  }
  return admin;
}

// --- DATABASE HELPERS ---

async function getUserIdFromCustomer(db: admin.firestore.Firestore, stripeCustomerId: string): Promise<string | null> {
  try {
    const snapshot = await db.collection('users').where('stripeCustomerId', '==', stripeCustomerId).limit(1).get();
    if (!snapshot.empty) return snapshot.docs[0].id;
    return null;
  } catch (error) {
    console.error("Error finding user by Stripe Customer ID:", error);
    return null;
  }
}

async function saveSubscription(db: admin.firestore.Firestore, userId: string, subscription: Stripe.Subscription) {
  const ref = db.collection('users').doc(userId).collection('subscriptions').doc(subscription.id);
  
  await ref.set({
    id: subscription.id,
    status: subscription.status,
    priceId: subscription.items.data[0]?.price.id,
    currentPeriodEnd: admin.firestore.Timestamp.fromMillis(subscription.current_period_end * 1000),
    stripeCustomerId: subscription.customer,
  }, { merge: true });

  if (['active', 'trialing'].includes(subscription.status)) {
    await db.collection('users').doc(userId).set({ subscriptionStatus: 'active' }, { merge: true });
  } else {
    await db.collection('users').doc(userId).set({ subscriptionStatus: subscription.status }, { merge: true });
  }
}

async function saveOneTimePurchase(db: admin.firestore.Firestore, userId: string, session: Stripe.Checkout.Session) {
  const purchaseRef = db.collection('users').doc(userId).collection('oneTimePurchases').doc(session.id);
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 1 });
  const priceId = lineItems.data[0]?.price?.id;
  const quizId = session.metadata?.quizId; // Retrieve the Quiz ID from metadata

  const purchaseData = {
      id: session.id,
      stripeCustomerId: session.customer as string,
      status: session.payment_status,
      amount: session.amount_total,
      currency: session.currency,
      created: admin.firestore.Timestamp.fromMillis(session.created * 1000),
      paymentIntentId: session.payment_intent as string,
      priceId: priceId || 'unknown',
      quizId: quizId || 'unknown', // Save the quizId for reference
  };

  await purchaseRef.set(purchaseData, { merge: true });

  // Grant access using the correct internal quizId from metadata
  if (session.payment_status === 'paid' && quizId) {
    const userRef = db.collection('users').doc(userId);
    
    await userRef.set({
      purchasedExams: admin.firestore.FieldValue.arrayUnion(quizId),
      isCustomer: true 
    }, { merge: true });
    
    console.log(`🔓 ACCESS GRANTED: Added Quiz ID ${quizId} to user ${userId}'s keychain.`);
  } else {
      console.warn(`⚠️ Access not granted for session ${session.id}. Payment status: ${session.payment_status}, Quiz ID in metadata: ${quizId}`);
  }
}

// --- MAIN ROUTE HANDLER ---
export async function POST(request: Request) {
  if (!webhookSecret) {
      console.error("🚨 Webhook secret is not available.");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }
  
  try {
    const adminInstance = initializeFirebaseAdmin();
    const db = adminInstance.firestore();
    const body = await request.text();
    const sig = headers().get('stripe-signature');

    if (!sig) {
      return NextResponse.json({ error: 'No Stripe signature header provided' }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err: any) {
      console.error(`Webhook signature verification failed: ${err.message}`);
      return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    switch (event.type) {
      case 'checkout.session.completed': {
        const userId = session.metadata?.firebaseUID || session.client_reference_id;

        if (userId) {
          if (session.mode === 'subscription') {
            const sub = await stripe.subscriptions.retrieve(session.subscription as string);
            await saveSubscription(db, userId, sub);
          } else { // mode === 'payment'
            await saveOneTimePurchase(db, userId, session);
          }
        } else {
             console.error("🚨 CRITICAL: Checkout session completed without 'firebaseUID' in metadata OR 'client_reference_id'. User access cannot be granted.");
        }
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        if (invoice.billing_reason === 'subscription_cycle' && invoice.subscription) {
            const userId = await getUserIdFromCustomer(db, invoice.customer as string);
            if (userId) {
                const sub = await stripe.subscriptions.retrieve(invoice.subscription as string);
                await saveSubscription(db, userId, sub);
            }
        }
        break;
      }

      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription;
        const userId = await getUserIdFromCustomer(db, sub.customer as string);
        if (userId) await saveSubscription(db, userId, sub);
        break;
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error: any) {
    console.error("🚨 Webhook Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
