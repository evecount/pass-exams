
import {NextResponse} from 'next/server';
import * as admin from 'firebase-admin';

// Function to reliably initialize Firebase Admin SDK in a serverless environment.
function initializeFirebaseAdmin() {
  if (!admin.apps.length) {
    try {
      // Use application default credentials, which works in managed environments like App Hosting.
      admin.initializeApp();
    } catch (error: any) {
      console.error("🚨 Session API: Firebase Admin Init Error:", error);
      throw new Error("Session API Firebase Admin initialization failed.");
    }
  }
  return admin;
}

// Helper function to introduce a delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(request: Request) {
  try {
    const adminInstance = initializeFirebaseAdmin();
    const db = adminInstance.firestore();
    const auth = adminInstance.auth();

    const { idToken } = await request.json();

    if (!idToken) {
        return NextResponse.json({ error: 'idToken is required.' }, { status: 400 });
    }
    
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });

    const options = {
        name: '__session',
        value: sessionCookie,
        maxAge: expiresIn,
        httpOnly: true,
        secure: true,
    };

    const response = NextResponse.json({ status: 'success' });
    response.cookies.set(options);
    return response;


  } catch (error) {
    console.error('Session Login Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


export async function DELETE(request: Request) {
    const response = NextResponse.json({ status: 'success' });
    response.cookies.set({
        name: '__session',
        value: '',
        expires: new Date(0),
        httpOnly: true,
        secure: true,
    });
    return response;
}
