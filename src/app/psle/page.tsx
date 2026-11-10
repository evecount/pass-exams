'use client';

import { useState, useMemo } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { BookOpen, LogIn, PlayCircle, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { psleQuizzes } from "@/lib/data/content/psle";
import QuizModal from '@/components/quiz/QuizModal';
import { useUser } from '@/firebase';

export default function PslePage() {
  const router = useRouter();
  const { user } = useUser();

  const [quizModalState, setQuizModalState] = useState<{isOpen: boolean, quizId: string | null, mode: 'full' | 'sample'}>({
    isOpen: false,
    quizId: null,
    mode: 'sample'
  });
  
  const handleStartQuiz = (quizId: string, mode: 'full' | 'sample') => {
    setQuizModalState({ isOpen: true, quizId, mode });
  };
  
  const quizzesWithImages = useMemo(() => {
    return psleQuizzes.map(quiz => ({
      ...quiz,
      image: PlaceHolderImages.find(img => img.id === `quiz_${quiz.id.replace(/-/g, '_')}`),
    }));
  }, []);

  const heroImage = PlaceHolderImages.find(img => img.id === 'quiz_psle_science_2024');

  return (
    <>
      <section className="w-full bg-background relative pt-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          <div className="flex flex-col justify-center p-8 lg:p-16">
            <div className="max-w-md">
              <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl font-headline text-primary">
                  Master the PSLE with Confidence
              </h1>
              <p className="mt-4 text-md text-foreground/80">
                  AI-powered practice papers and study tools designed to build deep understanding for Singapore's Primary School Leaving Examination.
              </p>
              <div className="mt-8">
                <Button onClick={() => handleStartQuiz('psle-science-2024', 'sample')} size="lg" variant="orange">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Try a Free Sample
                </Button>
              </div>
            </div>
          </div>
          <div className="relative min-h-[300px] md:min-h-[500px]">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
      </section>

      <div className="w-full max-w-6xl p-4 sm:p-8 mt-16 mb-16 relative mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
            PSLE Mock Exams
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            High-quality practice papers built to mirror the real exam format.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzesWithImages.map((quiz) => (
              <Card
                key={quiz.id}
                className="overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 flex flex-col"
              >
                <CardHeader className="p-0">
                  {quiz.image && (
                    <div className="aspect-video relative">
                      <Image
                        src={quiz.image.imageUrl}
                        alt={quiz.image.description}
                        data-ai-hint={quiz.image.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <CardTitle className="font-headline text-2xl">
                      {quiz.title}
                    </CardTitle>
                     <CardDescription className="mt-2 flex items-center gap-2 text-muted-foreground">
                        <span className="font-bold text-lg text-primary">
                          FREE
                        </span>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="px-6 flex-grow">
                  <p>{quiz.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 mt-auto flex flex-col items-stretch gap-3">
                    <Button onClick={() => handleStartQuiz(quiz.id, 'sample')} className="w-full" variant="outline">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Preview (3 Qs)
                    </Button>
                    <Button onClick={() => handleStartQuiz(quiz.id, 'full')} className="w-full">
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Start Full Exam
                    </Button>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>

      {quizModalState.isOpen && quizModalState.quizId && (
        <QuizModal
          quizId={quizModalState.quizId}
          isOpen={quizModalState.isOpen}
          onClose={() => setQuizModalState({ isOpen: false, quizId: null, mode: 'sample' })}
          mode={quizModalState.mode}
          dynamicQuiz={psleQuizzes.find(q => q.id === quizModalState.quizId)}
        />
      )}
    </>
  );
}
