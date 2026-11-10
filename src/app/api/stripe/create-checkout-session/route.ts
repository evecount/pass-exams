
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import * as admin from 'firebase-admin';

// --- SERVICE INITIALIZATION ---

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

function initializeFirebaseAdmin() {
  if (!admin.apps.length) {
    try {
      // Use application default credentials, which works in managed environments like App Hosting.
      admin.initializeApp();
    } catch (error: any) {
      console.error("🚨 CRITICAL: Checkout API - Firebase Admin initialization failed.", error);
      throw new Error("The Firebase Admin SDK failed to initialize. Check server logs for details.");
    }
  }
  return admin;
}

// --- MAIN API ROUTE HANDLER ---

export async function POST(request: Request) {
  try {
    const adminInstance = initializeFirebaseAdmin();
    const auth = adminInstance.auth();
    const db = adminInstance.firestore();

    const { priceId, mode, userId, quizId } = await request.json();

    // --- INPUT VALIDATION ---
    if (!priceId) {
      return NextResponse.json({ error: 'Price ID is required.' }, { status: 400 });
    }
    if (!mode || (mode !== 'subscription' && mode !== 'payment')) {
        return NextResponse.json({ error: 'Mode must be "subscription" or "payment".' }, { status: 400 });
    }
    if (!userId) {
        return NextResponse.json({ error: 'You must be logged in to purchase.' }, { status: 401 });
    }
    // Quiz ID is required for one-time payments to grant access correctly.
    if (mode === 'payment' && !quizId) {
        return NextResponse.json({ error: 'Quiz ID is required for this purchase.' }, { status: 400 });
    }

    // --- USER AND CUSTOMER LOGIC ---
    const userRef = db.collection('users').doc(userId);
    let userDoc = await userRef.get();
    
    const userRecord = await auth.getUser(userId);
    const customerEmail = userRecord.email;

    if (!customerEmail) {
      return NextResponse.json({ error: 'User email is not available to create a Stripe customer.' }, { status: 400 });
    }

    if (!userDoc.exists) {
        const newUserPayload = {
            uid: userId,
            email: customerEmail,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        };
        await userRef.set(newUserPayload, { merge: true });
        userDoc = await userRef.get();
    }

    let stripeCustomerId = userDoc.data()?.stripeCustomerId;
    
    if (!stripeCustomerId) {
        const customer = await stripe.customers.create({
            email: customerEmail,
            metadata: { firebaseUID: userId },
        });
        stripeCustomerId = customer.id;
        await userRef.update({ stripeCustomerId: stripeCustomerId });
    }

    // --- STRIPE SESSION CREATION ---
    const sessionOptions: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ['card'],
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        mode: mode,
        allow_promotion_codes: true,
        success_url: `${request.headers.get('origin')}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${request.headers.get('origin')}/dashboard`,
        customer: stripeCustomerId,
        // Add quizId to metadata for one-time payments
        metadata: {
            ...(mode === 'payment' && { quizId: quizId }),
            // Always include firebaseUID for webhook user identification
            firebaseUID: userId
        },
    };
    
    const session = await stripe.checkout.sessions.create(sessionOptions);

    return NextResponse.json({ id: session.id });

  } catch (error: any) {
    console.error("🚨 Stripe Checkout Session Error:", error.message, error.stack);
    return NextResponse.json({ error: error.message || 'An internal server error occurred.' }, { status: 500 });
  }
}
