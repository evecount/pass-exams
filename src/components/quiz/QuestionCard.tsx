"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Loader2,
  XCircle,
  BrainCircuit,
  Mail,
  Bookmark,
} from "lucide-react";
import { marked } from 'marked';

import { generateHint, explainConcept } from "@/lib/ai-actions";
import type { Question, Language, LocalizedText } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { useUser } from "@/firebase";
import { ToastAction } from "@/components/ui/toast";


const getLocalizedText = (text: LocalizedText | string | undefined, lang: Language): string => {
    if (!text) return '';
    if (typeof text === 'string') return text;
    // Fallback to English if the selected language is not available
    return text[lang] || text.english || '';
};

type QuestionCardProps = {
  quizId: string;
  question: Question;
  selectedLanguage: Language;
  onAnswer: (questionId: number, optionIndex: number) => void;
  isAnswered: boolean;
  isCorrect?: boolean;
  userAnswerIndex?: number;
};

export default function QuestionCard({
  quizId,
  question,
  selectedLanguage,
  onAnswer,
  isAnswered,
  isCorrect,
  userAnswerIndex,
}: QuestionCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isHintLoading, setIsHintLoading] = useState(false);
  
  const [isExplanationLoading, setIsExplanationLoading] = useState(false);
  const [isExplanationDialogOpen, setIsExplanationDialogOpen] = useState(false);
  const [explanationHtml, setExplanationHtml] = useState<string | null>(null);
  
  const { toast } = useToast();
  const { user } = useUser();
  const router = useRouter();
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();

  const isBookmarked = bookmarks?.some(b => b.questionId === question.id.toString()) || false;
  
  // Specific check to disable features for the data-eng-exam
  const isDataEngQuiz = quizId === 'data-eng-exam';

  const handleToggleBookmark = () => {
    if (!user) {
      toast({
        title: "What does Bookmark do?",
        description: "When you're signed in, bookmarking allows you to save challenging questions. You can then use the 'AI Practice Session' on your dashboard to generate a personalized quiz that helps you master those concepts.",
        action: (
          <ToastAction altText="Sign Up" onClick={() => router.push('/login?redirect=/dashboard')}>
            Sign Up
          </ToastAction>
        ),
      });
      return;
    }

    if (isBookmarked) {
      removeBookmark(question.id.toString());
      toast({ title: "Bookmark Removed" });
    } else {
      addBookmark(quizId, question.id.toString());
      toast({ title: "Bookmark Added" });
    }
  };

  const handleAnswerClick = async (optionIndex: number) => {
    if (isAnswered) return;
    setIsLoading(true);
    onAnswer(question.id, optionIndex);
    setIsLoading(false);
  };
  
  const handleGetHint = async () => {
      setIsHintLoading(true);
      try {
        const presetHint = question.hint ? getLocalizedText(question.hint, selectedLanguage) : null;
        if (presetHint) {
            toast({
                title: "Here's a hint!",
                description: presetHint,
                duration: 8000,
            });
            return;
        }

        const localizedQuestionText = getLocalizedText(question.questionText, selectedLanguage);
        const result = await generateHint(localizedQuestionText);
        if (result.error || !result.hint) {
            throw new Error(result.error || "Could not generate a hint.");
        }
        toast({
            title: "Here's a hint!",
            description: result.hint,
            duration: 8000,
        });

      } catch (error: any) {
        toast({
            variant: "destructive",
            title: "Hint Generation Failed",
            description: error.message,
        });
      } finally {
        setIsHintLoading(false);
      }
  };

  const handleExplainConcept = async () => {
    setIsExplanationLoading(true);
    setIsExplanationDialogOpen(true);

    try {
        const presetDeeperDive = question.deeperDive ? getLocalizedText(question.deeperDive, selectedLanguage) : null;
        if (presetDeeperDive) {
            const html = await marked.parse(presetDeeperDive);
            setExplanationHtml(html);
            return;
        }

        const correctAnswer = question.options.find(o => o.isCorrect);
        if (!correctAnswer) {
            throw new Error("Explanation not available for this question.");
        }
        
        const localizedQuestion = getLocalizedText(question.questionText, selectedLanguage);
        const localizedAnswer = getLocalizedText(correctAnswer.text, selectedLanguage);
        const localizedExplanation = getLocalizedText(question.explanation, selectedLanguage);

        const result = await explainConcept(
          localizedQuestion,
          localizedAnswer,
          localizedExplanation
        );
        if (result.error || !result.explanation) {
           throw new Error(result.error || "Could not generate an explanation.");
        }
        const html = await marked.parse(result.explanation);
        setExplanationHtml(html);

    } catch (error: any) {
        toast({
            variant: "destructive",
            title: "Deeper Dive Failed",
            description: error.message,
        });
        setIsExplanationDialogOpen(false);
    } finally {
        setIsExplanationLoading(false);
    }
  };
  
  const correctAnswerText = getLocalizedText(question.options.find(o => o.isCorrect)!.text, selectedLanguage);

  const getButtonClass = (optionIndex: number) => {
    if (!isAnswered) {
      return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
    }
    const isSelected = userAnswerIndex === optionIndex;
    const isThisTheCorrectAnswer = question.options[optionIndex].isCorrect;

    if (isSelected && isCorrect) {
       return "bg-green-600 text-white hover:bg-green-700";
    }
    if (isSelected && !isCorrect) {
       return "bg-destructive text-destructive-foreground hover:bg-destructive/90";
    }
    if (isThisTheCorrectAnswer) {
       return "border-2 border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
    }
    return "bg-secondary text-secondary-foreground opacity-60";
  };

  const getIcon = (optionIndex: number) => {
    if (!isAnswered) return <HelpCircle className="h-5 w-5" />;
    
    const isSelected = userAnswerIndex === optionIndex;
    const isThisTheCorrectAnswer = question.options[optionIndex].isCorrect;

    if (isSelected && isCorrect) {
        return <CheckCircle2 className="h-5 w-5" />;
    }
    if (isSelected && !isCorrect) {
        return <XCircle className="h-5 w-5" />;
    }
    if (isThisTheCorrectAnswer) {
        return <CheckCircle2 className="h-5 w-5" />;
    }
    return <HelpCircle className="h-5 w-5 text-muted-foreground" />;
  };
  
  const explanationText = getLocalizedText(question.explanation, selectedLanguage);

  const createReportMailto = () => {
    const subject = `Issue Report: Question ID ${question.id}`;
    const body = `Hello,

I'd like to report a potential issue with Question ID ${question.id}.

Quiz: ${quizId}
Question Text:
"${getLocalizedText(question.questionText, 'english')}"

My feedback:
[Please describe the issue here]
`;
    return `mailto:gwen@evecount.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <CardTitle className="text-xl leading-relaxed flex-1">
            {getLocalizedText(question.questionText, selectedLanguage)}
          </CardTitle>
          {!isDataEngQuiz && (
            <div className="flex items-center gap-1 flex-shrink-0 self-start sm:self-center">
              <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleGetHint}
                  disabled={isAnswered || isHintLoading}
                >
                  {isHintLoading ? (
                    <Loader2 className="h-5 w-5 sm:mr-2 animate-spin" />
                  ) : (
                    <Lightbulb className={cn("h-5 w-5 sm:mr-2", isAnswered ? "text-muted-foreground" : "text-yellow-500")} />
                  )}
                  <span className="hidden sm:inline">Get Hint</span>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleExplainConcept}
                disabled={!isAnswered || isExplanationLoading}
              >
                <BrainCircuit className={cn("h-5 w-5 sm:mr-2", isAnswered ? "text-orange-500" : "text-muted-foreground")} />
                <span className="hidden sm:inline">Deeper Dive</span>
              </Button>
              <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleToggleBookmark}
                  className={cn(isBookmarked && "text-primary")}
              >
                  <Bookmark className={cn("h-5 w-5 sm:mr-2", isBookmarked && "fill-current text-primary")} />
                  <span className="hidden sm:inline">Bookmark</span>
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={isAnswered || isLoading}
              className={cn(
                "w-full justify-start h-auto py-3 px-4 text-left transition-all duration-300 transform ",
                getButtonClass(index)
              )}
            >
              {isLoading && userAnswerIndex === undefined && (
                <Loader2 className="mr-4 h-5 w-5 animate-spin" />
              )}
              <div className="flex items-center w-full">
                {!isLoading && <div className="mr-4">{getIcon(index)}</div>}
                <span className="flex-1 whitespace-normal">{getLocalizedText(option.text, selectedLanguage)}</span>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
      {isAnswered && explanationText && (
        <CardFooter>
          <Alert
            variant={isCorrect ? "default" : "destructive"}
            className="bg-muted/50 w-full"
          >
            <div className="flex justify-between items-start">
                <div>
                    <AlertTitle className="font-bold">Explanation</AlertTitle>
                    <AlertDescription>{explanationText}</AlertDescription>
                </div>
                 {!isDataEngQuiz && (
                  <Button variant="ghost" size="sm" asChild>
                      <a href={createReportMailto()}>
                          <Mail className="h-4 w-4 mr-2" />
                          Report Issue
                      </a>
                  </Button>
                 )}
            </div>
          </Alert>
        </CardFooter>
      )}

      <AlertDialog
        open={isExplanationDialogOpen}
        onOpenChange={setIsExplanationDialogOpen}
      >
        <AlertDialogContent className="max-w-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BrainCircuit /> Deeper Dive
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="pt-4">
                {isExplanationLoading ? (
                  <div className="flex items-center justify-center p-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : (
                  <div
                    className="prose prose-sm dark:prose-invert max-h-[60vh] overflow-y-auto pr-4 text-foreground"
                    dangerouslySetInnerHTML={{ __html: explanationHtml || "" }}
                  />
                )}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setIsExplanationDialogOpen(false)}
            >
              Understood!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
