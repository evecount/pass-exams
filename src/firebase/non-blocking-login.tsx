'use client';
import {
  Auth, // Import Auth type for type hinting
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { getSdks, errorEmitter, FirestorePermissionError } from '@/firebase'; // Assuming getSdks is exported from index

/** Initiate anonymous sign-in (non-blocking). */
export function initiateAnonymousSignIn(authInstance: Auth): void {
  signInAnonymously(authInstance);
}

/** Initiate email/password sign-up (non-blocking). */
export function initiateEmailSignUp(authInstance: Auth, email: string, password: string): void {
  createUserWithEmailAndPassword(authInstance, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const { firestore } = getSdks(authInstance.app);
      const userRef = doc(firestore, 'users', user.uid);
      const userPayload = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
        isCustomer: false,
        subscriptionStatus: 'inactive',
      };
      setDoc(userRef, userPayload, { merge: true }).catch(serverError => {
        const permissionError = new FirestorePermissionError({
          path: userRef.path,
          operation: 'write',
          requestResourceData: userPayload,
        });
        errorEmitter.emit('permission-error', permissionError);
      });
    });
}

/** Initiate email/password sign-in (non-blocking). */
export function initiateEmailSignIn(authInstance: Auth, email: string, password: string): void {
  signInWithEmailAndPassword(authInstance, email, password);
}

/** Initiate Google sign-in (non-blocking) and ensure user document exists. */
export function initiateGoogleSignIn(authInstance: Auth): void {
  const provider = new GoogleAuthProvider();
  
  signInWithPopup(authInstance, provider)
    .then(async (result) => {
      const user = result.user;
      const { firestore } = getSdks(authInstance.app);
      const userRef = doc(firestore, 'users', user.uid);
      
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        const userPayload = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            createdAt: new Date().toISOString(),
            lastLoginAt: new Date().toISOString(),
            isCustomer: false,
            subscriptionStatus: 'inactive',
        };
        setDoc(userRef, userPayload, { merge: true }).catch(serverError => {
            const permissionError = new FirestorePermissionError({
                path: userRef.path,
                operation: 'write',
                requestResourceData: userPayload,
            });
            errorEmitter.emit('permission-error', permissionError);
        });
      }
    })
    .catch((error) => {
      console.error("Google Sign-In Popup Error:", error);
    });
}


export const setupAuthObserver = (auth: Auth, callback: (user: any) => void) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      const idToken = await user.getIdToken();
      // Send token to server to create session cookie
      await fetch('/api/auth/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });
    } else {
      // User is signed out, clear session cookie
      await fetch('/api/auth/session', { method: 'DELETE' });
    }
    callback(user);
  });
};
