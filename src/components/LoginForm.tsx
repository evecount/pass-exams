'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth, useUser } from '@/firebase';
import {
  initiateEmailSignIn,
  initiateEmailSignUp,
  initiateGoogleSignIn,
} from '@/firebase/non-blocking-login';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { FirebaseError } from 'firebase/app';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from './ui/separator';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

const signUpSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type LoginSchema = z.infer<typeof loginSchema>;
type SignUpSchema = z.infer<typeof signUpSchema>;

const GoogleIcon = () => (
    <svg className="mr-2 h-4 w-4" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C44.491 36.336 48 30.886 48 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
);

export default function LoginForm() {
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect');

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  
  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const signUpForm = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { email: '', password: '' },
  });

  useEffect(() => {
    if (!isUserLoading && user) {
       if (redirectUrl && redirectUrl.startsWith('https://buy.stripe.com')) {
        const finalUrl = redirectUrl
          .replace('{USER_EMAIL}', encodeURIComponent(user.email || ''))
          .replace('{USER_UID}', user.uid);
        window.location.href = finalUrl;
      } else {
        router.push(redirectUrl || '/dashboard');
      }
    }
  }, [user, isUserLoading, router, redirectUrl]);
  
  const handleFirebaseAuthError = (error: any, action: 'Login' | 'Registration' | 'Google Sign-In') => {
    let description = 'An unexpected error occurred. Please try again.';
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          description = 'Invalid email or password.';
          break;
        case 'auth/email-already-in-use':
          description = 'This email is already registered. Please log in.';
          setActiveTab("login");
          break;
        case 'auth/weak-password':
          description = 'The password is too weak.';
          break;
        case 'auth/invalid-email':
          description = 'Please enter a valid email address.';
          break;
        case 'auth/popup-closed-by-user':
          description = 'The sign-in popup was closed before completing the sign-in.';
          break;
        default:
          description = error.message;
      }
    }
    toast({
      variant: 'destructive',
      title: `${action} Failed`,
      description,
    });
  };
  
  const onLoginSubmit = async (data: LoginSchema) => {
    setIsLoading(true);
    try {
      if (!auth) throw new Error("Authentication service is not available.");
      await initiateEmailSignIn(auth, data.email, data.password);
    } catch (error) {
      handleFirebaseAuthError(error, 'Login');
    }
    setIsLoading(false);
  };
  
  const onSignUpSubmit = async (data: SignUpSchema) => {
    setIsLoading(true);
    try {
      if (!auth) throw new Error("Authentication service is not available.");
      await initiateEmailSignUp(auth, data.email, data.password);
    } catch (error) {
      handleFirebaseAuthError(error, 'Registration');
    }
    setIsLoading(false);
  };
  
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      if (!auth) throw new Error("Authentication service is not available.");
      await initiateGoogleSignIn(auth);
    } catch (error) {
      handleFirebaseAuthError(error, 'Google Sign-In');
    }
    // Don't set isLoading to false immediately, as onAuthStateChanged will handle redirection
    // But if there's an error that doesn't trigger auth state change (like popup closed), we might need to.
    setTimeout(() => setIsLoading(false), 2000); // Safety timeout
  };

  if (isUserLoading || user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription>
                Sign in to access your dashboard and continue your journey.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GoogleIcon />}
                Sign in with Google
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                  <FormField control={loginForm.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="you@example.com" {...field} disabled={isLoading} /></FormControl><FormMessage /></FormItem>)} />
                  <FormField control={loginForm.control} name="password" render={({ field }) => (<FormItem><FormLabel>Password</FormLabel><FormControl><Input type="password" placeholder="••••••••" {...field} disabled={isLoading} /></FormControl><FormMessage /></FormItem>)} />
                  <Button type="submit" className="w-full" disabled={isLoading}>{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Login</Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground mx-auto">
                Don't have an account? <Button variant="link" className="p-0" onClick={() => setActiveTab("signup")}>Sign Up</Button>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Create an Account</CardTitle>
              <CardDescription>
                Join now to start mastering the CMFAS exams.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GoogleIcon />}
                Sign up with Google
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <Form {...signUpForm}>
                <form onSubmit={signUpForm.handleSubmit(onSignUpSubmit)} className="space-y-4">
                  <FormField control={signUpForm.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="you@example.com" {...field} disabled={isLoading} /></FormControl><FormMessage /></FormItem>)} />
                  <FormField control={signUpForm.control} name="password" render={({ field }) => (<FormItem><FormLabel>Password</FormLabel><FormControl><Input type="password" placeholder="••••••••" {...field} disabled={isLoading} /></FormControl><FormMessage /></FormItem>)} />
                  <Button type="submit" className="w-full" disabled={isLoading}>{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Create Account</Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground mx-auto">
                Already have an account? <Button variant="link" className="p-0" onClick={() => setActiveTab("login")}>Login</Button>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
