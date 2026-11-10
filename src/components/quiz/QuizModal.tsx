
'use client';

import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Loader2, PlayCircle, BookCheck, Home, ShoppingCart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import { quizzes as allQuizzes } from '@/lib/quiz-data';
import type { Quiz, Question, Language, LocalizedText } from "@/lib/types";
import { generateHarderPracticeQuiz as generateHarderPracticeQuizAction, generateEasierPracticeQuiz as generateEasierPracticeQuizAction } from '@/lib/ai-actions';
import { updateQuestionStats } from '@/lib/actions';
import { useUserAnswers } from '@/hooks/useUserAnswers';
import QuestionCard from './QuestionCard';
import QuizHeader from './QuizHeader';
import QuizSummary from './QuizSummary';

type Answer = {
  isCorrect: boolean;
  userAnswerIndex: number;
}

type QuizModalProps = {
  quizId: string;
  isOpen: boolean;
  onClose: () => void;
  mode: 'full' | 'sample';
  dynamicQuiz?: Quiz | null;
  startQuestionId?: number | string;
};

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function QuizModal({ quizId, isOpen, onClose, mode, dynamicQuiz = null, startQuestionId }: QuizModalProps) {
  const router = useRouter();
  const [originalQuiz, setOriginalQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [showSummary, setShowSummary] = useState(false);
  const { toast } = useToast();
  const { saveAnswer, getAnswerHistory } = useUserAnswers();

  const [selectedLanguage, setSelectedLanguage] = useState<Language>("english");
  
  const [showLobby, setShowLobby] = useState(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'standard' | 'easy' | 'hard'>('standard');

  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const startQuizFromLobby = () => {
    if (!originalQuiz) return;
  
    let questionsToUse = originalQuiz.questions;
    if (selectedDifficulty === 'easy' && originalQuiz.questionsEasy && originalQuiz.questionsEasy.length > 0) {
      questionsToUse = originalQuiz.questionsEasy;
    } else if (selectedDifficulty === 'hard' && originalQuiz.questionsHard && originalQuiz.questionsHard.length > 0) {
      questionsToUse = originalQuiz.questionsHard;
    }
  
    setQuestions(mode === 'sample' ? questionsToUse.slice(0, 3) : questionsToUse);
    setShowLobby(false);
  };
  
  const startQuizWithData = useCallback((quizData: Quiz) => {
    
    const adaptiveQuestions = quizData.questions.map(q => {
        const history = getAnswerHistory(q.id);
        if (history) {
            if (history.lastResult === 'correct' && quizData.questionsHard && quizData.questionsHard.length > 0) {
                const harderVersion = quizData.questionsHard.find(hardQ => hardQ.id === q.id);
                if (harderVersion) return harderVersion;
            } else if (history.lastResult === 'incorrect' && quizData.questionsEasy && quizData.questionsEasy.length > 0) {
                const easierVersion = quizData.questionsEasy.find(easyQ => easyQ.id === q.id);
                if (easierVersion) return easierVersion;
            }
        }
        return q;
    });

    let finalQuestions = adaptiveQuestions;

    if (quizData.id === 'm8-exam') {
        finalQuestions = shuffleArray(adaptiveQuestions).slice(0, 50);
    }

    setOriginalQuiz({...quizData, questions: finalQuestions});
    
    const questionsToUse = mode === 'sample' 
      ? finalQuestions.slice(0, 3) 
      : finalQuestions;
    setQuestions(questionsToUse);

    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowSummary(false);
    setShowLobby(false);
    setIsLoading(false);
  }, [mode, getAnswerHistory]);
  
  const initializeQuizState = useCallback((newQuiz?: Quiz) => {
    let quizData: Quiz | undefined;
    if (newQuiz) {
        quizData = newQuiz;
    } else if (dynamicQuiz) {
      quizData = dynamicQuiz;
    } else {
      quizData = allQuizzes.find(q => q.id === quizId);
    }
    
    if (!quizData) {
      toast({ title: "Quiz not found", variant: "destructive" });
      onCloseRef.current();
      return;
    }
    
    const adaptiveQuestions = quizData.questions.map(q => {
        const history = getAnswerHistory(q.id);
        if (history) {
            if (history.lastResult === 'correct' && quizData.questionsHard && quizData.questionsHard.length > 0) {
                const harderVersion = quizData.questionsHard.find(hardQ => hardQ.id === q.id);
                if (harderVersion) return harderVersion;
            } else if (history.lastResult === 'incorrect' && quizData.questionsEasy && quizData.questionsEasy.length > 0) {
                const easierVersion = quizData.questionsEasy.find(easyQ => easyQ.id === q.id);
                if (easierVersion) return easierVersion;
            }
        }
        return q;
    });

    let finalQuestions = adaptiveQuestions;
    if (quizData.id === 'm8-exam') {
        finalQuestions = shuffleArray(adaptiveQuestions).slice(0, 50);
    }
    
    const finalQuizData = {...quizData, questions: finalQuestions};

    setOriginalQuiz(finalQuizData);

    const startingIndex = startQuestionId
      ? finalQuizData.questions.findIndex(q => q.id.toString() === startQuestionId.toString())
      : 0;

    setCurrentQuestionIndex(startingIndex >= 0 ? startingIndex : 0);
    
    const questionsToUse = mode === 'sample'
      ? finalQuizData.questions.slice(0, 3)
      : finalQuizData.questions;
    setQuestions(questionsToUse);
    
    setAnswers({});
    setShowSummary(false);
    setShowLobby(!startQuestionId); // Don't show lobby if jumping to a question
    setIsLoading(false);

    const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    } else {
      setSelectedLanguage('english');
    }

  }, [quizId, dynamicQuiz, toast, startQuestionId, mode, getAnswerHistory]);


  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      initializeQuizState();
    }
  }, [isOpen, quizId, dynamicQuiz, startQuestionId, initializeQuizState]);

  const handleLanguageChange = useCallback((lang: string) => {
    const newLanguage = lang as Language;
    setSelectedLanguage(newLanguage);
    localStorage.setItem('selectedLanguage', newLanguage);
  }, []);

  const handleAnswer = (questionId: number, optionIndex: number) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    const selectedOption = question.options[optionIndex];
    const isCorrect = selectedOption.isCorrect;

    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        isCorrect,
        userAnswerIndex: optionIndex
      },
    }));

    saveAnswer(questionId, isCorrect);
    updateQuestionStats(questionId, isCorrect);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setShowSummary(false);
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleGenerateHarderQuiz = async () => {
    if (!originalQuiz) return;
    
    const incorrectQuestions = originalQuiz.questions.filter(q => {
        const answer = answers[q.id];
        return answer && !answer.isCorrect;
    });

    if (incorrectQuestions.length === 0) {
        toast({ title: "No incorrect answers to practice!", description: "Great job! Try another quiz."});
        return;
    }

    try {
        const result = await generateHarderPracticeQuizAction(incorrectQuestions);
        if (result.error || !result.practiceQuiz) {
            throw new Error(result.error || "Failed to generate quiz.");
        }
        startQuizWithData(result.practiceQuiz);
    } catch(e: any) {
        toast({ title: "Failed to generate mastery quiz.", description: e.message, variant: "destructive" });
    }
  }

  const handleGenerateEasierQuiz = async () => {
    if (!originalQuiz) return;
    
    const incorrectQuestions = originalQuiz.questions.filter(q => {
        const answer = answers[q.id];
        return answer && !answer.isCorrect;
    });

    if (incorrectQuestions.length === 0) {
        toast({ title: "No incorrect answers to build on!", description: "Try re-taking the quiz."});
        return;
    }

    try {
        const result = await generateEasierPracticeQuizAction(incorrectQuestions);
        if (result.error || !result.practiceQuiz) {
            throw new Error(result.error || "Failed to generate quiz.");
        }
        startQuizWithData(result.practiceQuiz);
    } catch(e: any) {
        toast({ title: "Failed to generate confidence quiz.", description: e.message, variant: "destructive" });
    }
  }


  const score = useMemo(() => {
    return Object.values(answers).reduce((acc, { isCorrect }) => acc + (isCorrect ? 1 : 0), 0);
  }, [answers]);

  const renderContent = () => {
    if (isLoading || !originalQuiz) {
      return <div className="flex h-96 items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
    }
    
    if (showLobby) {
        return (
            <div className="text-center p-8 flex flex-col items-center justify-center h-full">
                <DialogTitle className="font-headline text-3xl text-primary">{originalQuiz.title}</DialogTitle>
                <DialogDescription className="mt-2 text-lg max-w-lg mx-auto">
                    {mode === 'sample' 
                        ? `This is a short preview with 3 questions.`
                        : (dynamicQuiz ? originalQuiz.description : `This is a full mock exam with ${originalQuiz.questions.length} questions.`)
                    }
                </DialogDescription>

                <div className="my-8 w-full max-w-sm">
                    <h3 className="font-semibold mb-3">Select Difficulty</h3>
                    <Tabs defaultValue="standard" onValueChange={(v) => setSelectedDifficulty(v as any)}>
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="easy" disabled={!originalQuiz.questionsEasy || originalQuiz.questionsEasy.length === 0}>Easy</TabsTrigger>
                            <TabsTrigger value="standard">Standard</TabsTrigger>
                            <TabsTrigger value="hard" disabled={!originalQuiz.questionsHard || originalQuiz.questionsHard.length === 0}>Hard</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className="mt-4">
                    <Button size="lg" variant="default" onClick={startQuizFromLobby}>
                        <PlayCircle className="mr-2 h-5 w-5" /> Start Quiz
                    </Button>
                </div>
                {mode === 'sample' && (
                    <div className="mt-6 p-4 border-2 border-dashed rounded-lg">
                        <h4 className="font-bold">Want the full experience?</h4>
                        <p className="text-muted-foreground text-sm">Access all questions, AI practice sessions, and more.</p>
                        <Button size="sm" asChild className="mt-3">
                            <Link href="/dashboard">
                                <BookCheck className="mr-2 h-4 w-4" /> Go to Dashboard
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        )
    }

    if (showSummary) {
      return (
        <QuizSummary
          score={score}
          total={questions.length}
          quizId={quizId}
          onRestart={() => initializeQuizState()}
          onClose={onClose}
          isSample={mode === 'sample'}
          onGenerateHarderQuiz={handleGenerateHarderQuiz}
          onGenerateEasierQuiz={handleGenerateEasierQuiz}
          isMasteryAvailable={quizId !== 'ai-mastery-quiz'}
        />
      );
    }
    
    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) {
        return <div className="flex h-96 items-center justify-center"><p>Question not found.</p></div>;
    }

    const currentAnswer = answers[currentQuestion.id];
    const isCurrentQuestionAnswered = !!currentAnswer;

    return (
      <>
        <QuizHeader
          title={originalQuiz.title}
          currentProgress={currentQuestionIndex}
          totalQuestions={questions.length}
          score={score}
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
          isTranslating={false} // On-the-fly translation is removed
        />
        <Card className="mt-4 relative">
          <QuestionCard
            quizId={originalQuiz.id}
            question={currentQuestion}
            selectedLanguage={selectedLanguage}
            onAnswer={handleAnswer}
            isAnswered={isCurrentQuestionAnswered}
            isCorrect={currentAnswer?.isCorrect}
            userAnswerIndex={currentAnswer?.userAnswerIndex}
          />
        </Card>
      </>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onCloseRef.current()}>
      <DialogContent className="max-w-4xl flex flex-col h-full max-h-full sm:max-h-[95vh] sm:h-auto">
        <div className="flex-grow overflow-y-auto pr-4 -mr-4">
          {renderContent()}
        </div>

        {!showSummary && !showLobby && (
          <DialogFooter className="mt-4 pt-4 border-t flex-shrink-0">
          <div className='flex justify-between w-full'>
            <Button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                variant="outline"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
            </Button>
            <Button
                onClick={handleNext}
                disabled={!answers[questions[currentQuestionIndex]?.id ?? -1]}
            >
                {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
                {currentQuestionIndex < questions.length - 1 && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
