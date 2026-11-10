'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Bookmark, Loader2, Trash2, BookText, Sparkles, Home, Share2, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { quizzes as allQuizzes } from "@/lib/quiz-data";
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useBookmarks } from '@/hooks/use-bookmarks';
import { Question, Quiz } from '@/lib/types';
import QuizModal from '@/components/quiz/QuizModal';
import { generatePracticeQuiz, shareQuiz } from '@/lib/ai-actions';
import { useToast } from '@/hooks/use-toast';
import { collection, query } from 'firebase/firestore';
import CreateQuizModal from '@/components/quiz/CreateQuizModal';

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const [quizModalState, setQuizModalState] = useState<{
    isOpen: boolean;
    quizId: string | null;
    mode: 'full' | 'sample';
    dynamicQuiz?: any;
    startQuestionId?: number | string;
  }>({
    isOpen: false,
    quizId: null,
    mode: 'sample'
  });
  const [isCreateQuizModalOpen, setIsCreateQuizModalOpen] = useState(false);
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);

  const { bookmarks, removeBookmark, isLoading: isLoadingBookmarks } = useBookmarks();

  const userExamsQuery = useMemoFirebase(
    () => (user ? query(collection(firestore, `users/${user.uid}/exams`)) : null),
    [firestore, user]
  );
  
  const { data: userExams, isLoading: isLoadingUserExams, error: userExamsError } = useCollection<Quiz>(userExamsQuery);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login?redirect=/dashboard');
    }
  }, [user, isUserLoading, router]);

  const quizzesWithImages = useMemo(() => {
    const combinedQuizzes = [...allQuizzes, ...(userExams || [])];
    
    return combinedQuizzes
        .filter(quiz => !quiz.id.startsWith('custom-')) // Filter out custom quizzes for main display
        .map(quiz => ({
            ...quiz,
            image: PlaceHolderImages.find(img => img.id === quiz.id.replace(/-/g, '_') || `quiz_${quiz.id.replace(/-/g, '_')}`)
        }));
  }, [userExams]);

  const customQuizzes = useMemo(() => {
      return (userExams || []).map(quiz => ({
        ...quiz,
        image: PlaceHolderImages.find(img => img.id === 'quiz_res-5') // default image
      }));
  }, [userExams]);

  const bookmarkedQuestions = useMemo(() => {
    if (!bookmarks) return [];
    const allQuestions: Question[] = allQuizzes.flatMap(q => q.questions);
    return bookmarks.map(bookmark => {
      const question = allQuestions.find(q => q.id.toString() === bookmark.questionId);
      const quiz = allQuizzes.find(q => q.id === bookmark.quizId);
      return {
        ...bookmark,
        question,
        quizTitle: quiz?.title || 'Unknown Quiz'
      };
    }).filter(item => item.question);
  }, [bookmarks]);

  const openQuizModal = (quizId: string, dynamicQuiz?: Quiz, startQuestionId?: number | string) => {
    const quizData = dynamicQuiz || allQuizzes.find(q => q.id === quizId) || userExams?.find(q => q.id === quizId);
    setQuizModalState({ 
        isOpen: true, 
        quizId, 
        mode: 'full', 
        dynamicQuiz: quizData,
        startQuestionId: startQuestionId
    });
  };

  const handleCloseModal = useCallback(() => {
    setQuizModalState({ isOpen: false, quizId: null, mode: 'sample' });
  }, []);
  
  const handleGeneratePracticeQuiz = async () => {
    setIsGeneratingQuiz(true);
    try {
      const sourceQuestions = bookmarkedQuestions.map(b => b.question).filter(Boolean) as Question[];
      if(sourceQuestions.length === 0) {
        toast({ title: "No bookmarked questions to practice.", variant: "destructive" });
        return;
      }
      
      const result = await generatePracticeQuiz(sourceQuestions);

      if (result.error || !result.practiceQuiz) {
        throw new Error(result.error || "Failed to generate quiz.");
      }
      
      setQuizModalState({
        isOpen: true,
        quizId: 'ai-practice-quiz',
        mode: 'full',
        dynamicQuiz: result.practiceQuiz,
      });

    } catch (error: any) {
      toast({
        title: "AI Quiz Generation Failed",
        description: error.message || "Could not generate a practice session. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGeneratingQuiz(false);
    }
  };

  const handleShareQuiz = async (quizId: string) => {
    if (!user) return;
    const result = await shareQuiz(user.uid, quizId);
    if (result.error) {
      toast({ title: "Failed to share quiz", description: result.error, variant: "destructive" });
    } else {
      const shareUrl = `${window.location.origin}/share/${user.uid}/${quizId}`;
      navigator.clipboard.writeText(shareUrl);
      toast({ title: "Share Link Copied!", description: "The link to your quiz has been copied to the clipboard." });
    }
  };


  const isLoading = isUserLoading || isLoadingBookmarks || isLoadingUserExams;
  
  const getResourcePath = (id: string) => {
    if (id === 'numerical-list') return '/numerical-list';
    if (id === 'auditing-guide') return '/auditing';
    if (id === 'formulas-guide') return '/formulas';
    return '/';
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-24">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }
  
  return (
    <>
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-24 bg-muted/20">
      <div className="w-full max-w-7xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                My Dashboard
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                Welcome back{user?.displayName ? `, ${user.displayName}` : ''}! Here are your exams and resources.
            </p>
        </div>

        {/* User-Generated Quizzes Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">My Custom Quizzes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card
                  onClick={() => setIsCreateQuizModalOpen(true)}
                  className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center text-center p-4 border-2 border-dashed bg-muted/50 hover:bg-muted/80 cursor-pointer h-full min-h-[300px]"
              >
                  <PlusCircle className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold font-headline">Create New Quiz</h3>
                  <p className="text-sm text-muted-foreground mt-1">Use AI to generate a quiz from your notes.</p>
              </Card>

              {customQuizzes.map((quiz) => (
                  <Card
                      key={`custom-${quiz.id}`}
                      className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group"
                  >
                      <CardHeader className="p-0 relative">
                          {quiz.image && (
                              <div className="aspect-video relative">
                              <Image
                                  src={quiz.image.imageUrl}
                                  alt={quiz.image.description || ''}
                                  data-ai-hint={quiz.image.imageHint}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/30"></div>
                              </div>
                          )}
                      </CardHeader>
                      <CardContent className="p-4 flex-grow">
                          <h3 className="font-bold font-headline truncate">{quiz.title}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">{quiz.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 mt-auto flex flex-col gap-2">
                          <Button onClick={() => openQuizModal(quiz.id, quiz)} className="w-full" variant="default">
                              <BookOpen className="mr-2 h-4 w-4" />
                              Start Quiz
                          </Button>
                          <Button onClick={() => handleShareQuiz(quiz.id)} className="w-full" variant="outline">
                              <Share2 className="mr-2 h-4 w-4" /> Share Quiz
                          </Button>
                      </CardFooter>
                  </Card>
              ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Available Exams & Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {quizzesWithImages.map((quiz) => {
                const isResource = !quiz.questions || quiz.questions.length === 0;

                return (
                    <Card
                        key={`dashboard-${quiz.id}`}
                        className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group"
                    >
                        <CardHeader className="p-0 relative">
                            {quiz.image && (
                                <div className="aspect-video relative">
                                <Image
                                    src={quiz.image.imageUrl}
                                    alt={quiz.image.description || ''}
                                    data-ai-hint={quiz.image.imageHint}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/30"></div>
                                </div>
                            )}
                        </CardHeader>
                        <CardContent className="p-4 flex-grow">
                            <h3 className="font-bold font-headline truncate">{quiz.title}</h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">{quiz.description}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 mt-auto">
                            {isResource ? (
                                <Button asChild className="w-full" variant="default">
                                    <Link href={getResourcePath(quiz.id)}>
                                        <BookText className="mr-2 h-4 w-4" />
                                        Access Resource
                                    </Link>
                                </Button>
                            ) : (
                                <Button onClick={() => openQuizModal(quiz.id)} className="w-full" variant="default">
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    Start Quiz
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                )
            })}
        </div>

        <div className="mt-16">
           <h2 className="text-3xl font-bold tracking-tight mb-8 text-center flex items-center justify-center gap-3">
              <Bookmark className="h-8 w-8 text-primary"/>
              My Bookmarked Questions
            </h2>
            {bookmarkedQuestions.length > 0 ? (
                 <div className="space-y-4">
                     <div className="p-6 border-2 border-dashed border-primary rounded-lg text-center bg-primary/5">
                        <h3 className="text-xl font-bold text-primary">AI Practice Session</h3>
                        <p className="text-muted-foreground mt-2 mb-4">Turn your bookmarks into a personalized quiz. The AI will generate new variations of these questions to test your understanding.</p>
                        <Button onClick={handleGeneratePracticeQuiz} disabled={isGeneratingQuiz}>
                            {isGeneratingQuiz ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                            ) : (
                                <Sparkles className="mr-2 h-4 w-4"/>
                            )}
                            Start AI Practice Session
                        </Button>
                     </div>
                    {bookmarkedQuestions.map(item => (
                        <Card key={item.id} className="p-4 flex justify-between items-start">
                            <div>
                                <p className="text-sm text-muted-foreground">{item.quizTitle}</p>
                                <p className="font-semibold">{item.question?.questionText}</p>
                            </div>
                            <div className='flex gap-2'>
                                <Button variant="outline" size="sm" onClick={() => openQuizModal(item.quizId, undefined, item.questionId)}>
                                    Review
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => item.questionId && removeBookmark(item.questionId)}>
                                    <Trash2 className="h-4 w-4 text-destructive"/>
                                    <span className="sr-only">Remove bookmark</span>
                                </Button>
                            </div>
                        </Card>
                    ))}
                 </div>
            ) : (
                 <div className="text-center mt-8 p-8 border-2 border-dashed rounded-lg bg-background">
                    <h3 className="text-xl font-bold">Your "Exam Mixtape" is Empty</h3>
                    <p className="text-muted-foreground mt-2">
                        Click the <Bookmark className="inline h-4 w-4 mx-1"/> icon on any question during a quiz to save it here for later review.
                    </p>
                     <Button asChild className="mt-4" variant="outline">
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Back to Exams
                        </Link>
                    </Button>
                </div>
            )}
        </div>
      </div>
    </main>
    {quizModalState.isOpen && quizModalState.quizId && (
        <QuizModal
          quizId={quizModalState.quizId}
          isOpen={quizModalState.isOpen}
          onClose={handleCloseModal}
          mode={quizModalState.mode}
          dynamicQuiz={quizModalState.dynamicQuiz}
          startQuestionId={quizModalState.startQuestionId}
        />
      )}
    {isCreateQuizModalOpen && user && (
        <CreateQuizModal 
            isOpen={isCreateQuizModalOpen}
            onClose={() => setIsCreateQuizModalOpen(false)}
            userId={user.uid}
        />
    )}
    </>
  );
}
