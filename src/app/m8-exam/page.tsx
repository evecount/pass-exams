
'use client';

import { useState, useEffect } from 'react';
import QuizModal from '@/components/quiz/QuizModal';
import { m8Exam } from '@/lib/m8-exam-data';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function M8ExamPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !isUserLoading && !user) {
      router.push('/login?redirect=/m8-exam');
    }
  }, [user, isUserLoading, router, isClient]);

  if (!isClient || isUserLoading || !user) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="ml-4">Loading Exam...</p>
      </div>
    );
  }
  
  return (
    <QuizModal
      isOpen={true}
      onClose={() => router.push('/')} // Go home when closed
      quizId="m8-exam"
      mode="full"
      dynamicQuiz={m8Exam}
    />
  );
}
