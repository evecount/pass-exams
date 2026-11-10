'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ShoppingCart, LogIn } from 'lucide-react';
import type { User } from 'firebase/auth';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type CheckoutButtonProps = {
  priceId: string;
  mode: 'subscription' | 'payment';
  quizId: string;
  user: User | null;
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
};

export default function CheckoutButton({
  priceId,
  mode,
  quizId,
  user,
  isLoading: isUserLoading,
  children,
  className,
  variant = 'default'
}: CheckoutButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleCheckout = async () => {
    if (!user) {
      router.push(`/login?redirect=/fees`);
      return;
    }
    
    setIsProcessing(true);

    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, mode, userId: user.uid, quizId }),
      });

      const session = await response.json();

      if (!response.ok || session.error) {
        throw new Error(session.error || 'Failed to create checkout session.');
      }

      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe.js has not loaded yet.');

      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
      if (error) {
        throw new Error(error.message);
      }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Checkout Error',
        description: error.message,
      });
      setIsProcessing(false);
    }
    // No need to set isProcessing to false on success because of redirection
  };

  const isLoading = isUserLoading || isProcessing;
  const buttonIcon = user ? <ShoppingCart className="mr-2 h-4 w-4" /> : <LogIn className="mr-2 h-4 w-4" />;
  const buttonText = user ? children : "Login to Purchase";

  return (
    <Button onClick={handleCheckout} disabled={isLoading} className={className} variant={variant}>
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : buttonIcon}
      {isLoading ? 'Processing...' : buttonText}
    </Button>
  );
}
