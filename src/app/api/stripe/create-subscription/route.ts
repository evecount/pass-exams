
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: Request) {
  try {
    const { customerId, priceId } = await request.json();

    if (!customerId || !priceId) {
      return NextResponse.json({ error: 'Customer ID and Price ID are required.' }, { status: 400 });
    }

    // This is similar to the 'createSubscription' cloud function from the instructions.
    // It creates a new subscription in Stripe.
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });

    return NextResponse.json(subscription);

  } catch (error: any) {
    console.error("Stripe API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
