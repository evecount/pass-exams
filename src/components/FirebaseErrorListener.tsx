'use client';

/**
 * Safe FirebaseErrorListener:
 * Neutralized so it never throws uncaught exceptions that crash the entire Next.js app tree.
 */
export function FirebaseErrorListener() {
  return null;
}
