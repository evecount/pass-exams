'use client';

import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { Loader2 } from 'lucide-react';
import QuizModal from '@/components/quiz/QuizModal';
import type { Quiz } from '@/lib/types';

export default function SharePage({ params }: { params: { quizInfo: string[] } }) {
  const firestore = useFirestore();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchQuiz() {
      if (!firestore || !params.quizInfo || params.quizInfo.length < 2) {
        setError('Invalid share link.');
        setIsLoading(false);
        return;
      }
      
      const [userId, quizId] = params.quizInfo;

      try {
        const quizRef = doc(firestore, `users/${userId}/exams/${quizId}`);
        const quizSnap = await getDoc(quizRef);

        if (quizSnap.exists()) {
          const quizData = quizSnap.data() as Quiz;
          if (quizData.public) {
            setQuiz(quizData);
            setIsModalOpen(true);
          } else {
            setError('This quiz is not public.');
          }
        } else {
          setError('Quiz not found.');
        }
      } catch (err: any) {
        setError('Failed to load quiz. ' + err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (firestore) {
      fetchQuiz();
    }
  }, [firestore, params.quizInfo]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-center">
        <div>
          <h1 className="text-2xl font-bold text-destructive">Error</h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {quiz && (
        <QuizModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          quizId={quiz.id}
          mode="full"
          dynamicQuiz={quiz}
        />
      )}
      <div className="flex h-screen w-full items-center justify-center">
        <p>Loading shared quiz...</p>
      </div>
    </>
  );
}
