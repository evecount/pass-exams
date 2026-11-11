import { quizzes as allQuizzes } from "@/lib/quiz-data";
import type { Quiz, Question, Language, HomePageContent } from "@/lib/types";

// Static offline mode - zero AI tokens, zero server dependencies
export const getDb = async () => null;

export async function checkUserAccess(userId: string, quizId: string): Promise<boolean> {
    return true; // 100% Free access for all users
}

export async function getQuizData(id: string): Promise<Omit<Quiz, 'questions'> & { questions: Omit<Question, 'explanation' | 'options'> & { options: { text: any }[] }[] } | null> {
  const quiz = allQuizzes.find((q) => q.id === id);
  if (!quiz) return null;
  return {
    ...quiz,
    questions: quiz.questions.map((q) => ({
      ...q,
      options: q.options.map((opt) => ({ text: opt.text }))
    }))
  };
}

export async function getFullQuizData(id: string): Promise<Quiz | null> {
  const quiz = allQuizzes.find((q) => q.id === id);
  return quiz || null;
}
