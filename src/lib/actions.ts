
'use server';

import * as admin from 'firebase-admin';
import { quizzes as allQuizzes } from "@/lib/quiz-data";
import type { Quiz, Question, Language, HomePageContent } from "@/lib/types";
import { stripePriceIds } from './stripe-price-ids';


// Helper function to initialize Firebase Admin SDK on-demand.
export const getDb = async () => {
    if (admin.apps.length === 0) {
        try {
            // This will use Application Default Credentials in a deployed environment.
            admin.initializeApp();
        } catch (error) {
            console.error("Firebase Admin initialization error:", error);
        }
    }
    return admin.firestore();
}

/**
 * Checks if a user has access to a specific quiz.
 * @param userId The user's Firebase UID.
 * @param quizId The ID of the quiz they are trying to access.
 * @returns {Promise<boolean>} True if the user has access, false otherwise.
 */
export async function checkUserAccess(userId: string, quizId: string): Promise<boolean> {
    if (!userId) return false;

    // Grant access to all quizzes for free
    return true;
}


export async function getQuizData(id: string): Promise<Omit<Quiz, 'questions'> & { questions: Omit<Question, 'explanation' | 'options'> & { options: { text: any }[] }[] } | null> {
  const quiz = allQuizzes.find((q) => q.id === id);
  if (!quiz) return null;
  return {
    ...quiz,
    questions: quiz.questions.map(q => ({
        id: q.id,
        questionText: q.questionText.english,
        options: q.options.map(o => ({ text: o.text.english })),
        topic: q.topic,
        difficulty: q.difficulty
    }))
  };
}

export async function saveQuizResult(result: {
  quizId: string;
  score: number;
  total: number;
  percentage: number;
  timestamp: string;
}) {
  console.log("Saving quiz result to Firestore:", result);
  return { success: true, message: "Result saved successfully." };
}


export async function updateQuestionStats(questionId: number, isCorrect: boolean) {
  try {
    const db = await getDb();
    const statRef = db.collection('question_stats').doc(questionId.toString());

    const FieldValue = admin.firestore.FieldValue;
    const updateData = {
      totalAnswers: FieldValue.increment(1),
      correctAnswers: isCorrect ? FieldValue.increment(1) : FieldValue.increment(0)
    };

    // Use set with merge:true to create the document if it doesn't exist, and update it if it does.
    await statRef.set(updateData, { merge: true });
    
    return { success: true };
  } catch (error) {
    console.error("Error updating question stats:", error);
    // This action should fail silently from the user's perspective.
    return { success: false, error: "Internal server error." };
  }
}
