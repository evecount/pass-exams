
'use client';

import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { BookOpen, BrainCircuit, Smartphone, Laptop, Languages, Loader2, BookText, ShieldCheck, LogIn, PlayCircle, Sparkles, CheckCircle, ArrowRight, Cpu, Bot, Send, MessageCircle, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
    SheetFooter,
} from '@/components/ui/sheet';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { quizzes as allQuizzes } from "@/lib/quiz-data";
import { askOnboardingCaptain, generateAudioForText } from "@/lib/ai-actions";
import type { Quiz, Language, HomePageContent } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import QuizModal from '@/components/quiz/QuizModal';
import { useUser } from '@/firebase';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useForm, SubmitHandler } from 'react-hook-form';


type ChatMessage = {
    role: 'user' | 'assistant';
    content: string;
    suggestions?: string[];
};

type ChatFormData = {
    prompt: string;
};


const initialContent: HomePageContent = {
    title: "Pass Your CMFAS Exam. The First Time.",
    description: "The most effective AI-powered study platform for Singapore's CMFAS exams. Practice with high-quality mock exams for RES5, M9, M9A, and HI, and stop worrying about costly retakes.",
    features_title: "Why Smart Learners Choose Us",
    feature_1_title: "AI-Powered Explanations",
    feature_1_desc: "Don't just know the right answer, understand *why* it's right. Our \"Deeper Dive\" feature provides instant, detailed explanations of core concepts for every question.",
    feature_2_title: "Modern & Mobile-Friendly",
    feature_2_desc: "Practice anytime, anywhere. Our platform is designed for your phone, tablet, or desktop, turning downtime into productive study time. No outdated PDFs.",
    feature_3_title: "Best Value for Quality",
    feature_3_desc: "Get high-quality, up-to-date questions and powerful AI learning tools for a fraction of the cost of traditional providers. Master the material, not just memorize.",
    feature_4_title: "Privacy First",
    feature_4_desc: "We never store your name or payment details. All payments are handled by Stripe. We only keep your login email and study bookmarks. Your learning journey is your own.",
};


export default function Home() {
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useUser();

  const [translatedContent, setTranslatedContent] = useState<HomePageContent>(initialContent);
  const [translatedQuizzes, setTranslatedQuizzes] = useState(allQuizzes);

  const [quizModalState, setQuizModalState] = useState<{isOpen: boolean, quizId: string | null, mode: 'full' | 'sample'}>({
    isOpen: false,
    quizId: null,
    mode: 'sample'
  });

  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'assistant', 
      content: "Hello! I'm your AI Co-founder. This entire site is a demonstration of our machine learning pipeline. Ask me about our business model, our technology, or how we can help you create a learning platform for your own curriculum.",
      suggestions: [
        "What is this platform?",
        "How can I make money with this?",
        "Tell me about your technology."
      ]
    }
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<ChatFormData>();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [isAudioLoading, setIsAudioLoading] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (question: string) => {
    const userMessage: ChatMessage = { role: 'user', content: question };

    setMessages(prev => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage.role === 'assistant' && lastMessage.suggestions) {
            const newMessages = [...prev.slice(0, -1), { ...lastMessage, suggestions: undefined }];
            return [...newMessages, userMessage];
        }
        return [...prev, userMessage];
    });

    setIsChatLoading(true);

    try {
        const result = await askOnboardingCaptain({ question, persona: 'homepage-business' });
        const assistantResponse: ChatMessage = {
            role: 'assistant',
            content: result.answer || "I'm not sure how to answer that, but our founder can help! Please visit our partnerships page for more info.",
            suggestions: result.suggestions,
        };
        setMessages(prev => [...prev, assistantResponse]);
    } catch (e) {
        const errorResponse: ChatMessage = {
            role: 'assistant',
            content: "Sorry, I'm having trouble connecting right now. Please try again later."
        };
        setMessages(prev => [...prev, errorResponse]);
    } finally {
        setIsChatLoading(false);
    }
  };

  const handlePlayAudio = async (text: string, messageId: string) => {
      if (playingAudioId === messageId && audioRef.current && !audioRef.current.paused) {
          audioRef.current.pause();
          setPlayingAudioId(null);
          return;
      }
      setIsAudioLoading(messageId);
      try {
          const result = await generateAudioForText(text);
          if (result.audioDataUri && audioRef.current) {
              audioRef.current.src = result.audioDataUri;
              audioRef.current.play();
              setPlayingAudioId(messageId);
          } else {
              throw new Error(result.error || "No audio data returned.");
          }
      } catch (error: any) {
          toast({ variant: "destructive", title: "Audio Generation Failed", description: error.message });
      } finally {
          setIsAudioLoading(null);
      }
  };

  const onFormSubmit: SubmitHandler<ChatFormData> = (data) => {
    if (!data.prompt.trim()) return;
    handleSendMessage(data.prompt);
    reset();
  };
  
  const handleStartQuiz = (quizId: string, mode: 'full' | 'sample') => {
    setQuizModalState({ isOpen: true, quizId, mode });
  };

  const handleCloseModal = useCallback(() => {
    setQuizModalState({ isOpen: false, quizId: null, mode: 'sample' });
  }, []);
  
  const quizzesWithImages = useMemo(() => {
    return translatedQuizzes.map(quiz => ({
      ...quiz,
      image: PlaceHolderImages.find(img => img.id === `quiz_${quiz.id.replace(/-/g, '_')}`),
    }));
  }, [translatedQuizzes]);

  const sortedQuizzes = useMemo(() => {
    return [...quizzesWithImages].sort((a, b) => {
        const orderA = a.id === 'exam-1' ? 1 : (a.questions.length > 0 ? 2 : 3);
        const orderB = b.id === 'exam-1' ? 1 : (b.questions.length > 0 ? 2 : 3);
        if (orderA !== orderB) return orderA - orderB;
        return a.title.localeCompare(b.title);
    });
  }, [quizzesWithImages]);
  
  const heroImage = PlaceHolderImages.find(img => img.id === 'quiz_exam_1');
  const platformImage = PlaceHolderImages.find(p => p.id === 'power_bundle');
  const sgImage = PlaceHolderImages.find(p => p.id === 'latest_tech');
  
  const featureItems = [
    { title: translatedContent.feature_1_title, description: translatedContent.feature_1_desc, icon: BrainCircuit },
    { title: translatedContent.feature_2_title, description: translatedContent.feature_2_desc, icon: Smartphone },
    { title: translatedContent.feature_3_title, description: translatedContent.feature_3_desc, icon: BookText },
    { title: translatedContent.feature_4_title, description: translatedContent.feature_4_desc, icon: ShieldCheck }
  ];
  
  const getResourcePath = (id: string) => {
    if (id === 'numerical-list') return '/numerical-list';
    if (id === 'auditing-guide') return '/auditing';
    if (id === 'formulas-guide') return '/formulas';
    if (id === 'instruments-guide') return '/instruments';
    return '/';
  }

  return (
    <>
      <audio ref={audioRef} onEnded={() => setPlayingAudioId(null)} />
      <section className="w-full bg-background relative pt-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          <div className="flex flex-col justify-center p-8 lg:p-16">
            <div className="max-w-md">
              <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl font-headline text-primary">
                  {translatedContent.title}
              </h1>
              <p className="mt-4 text-md text-foreground/80">
                  {translatedContent.description}
              </p>
               <div className="flex items-center flex-wrap gap-x-6 gap-y-2 mt-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5" />
                    <span className="text-sm">Mobile Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Laptop className="h-5 w-5" />
                    <span className="text-sm">Desktop Friendly</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                     <Languages className="h-5 w-5 text-muted-foreground" />
                     <div className="flex items-center gap-2 text-xs font-semibold">
                         <div className="px-2 py-1 rounded-md bg-muted">English</div>
                         <div className="px-2 py-1 rounded-md bg-muted">中文</div>
                         <div className="px-2 py-1 rounded-md bg-muted">Bahasa</div>
                         <div className="px-2 py-1 rounded-md bg-muted">தமிழ்</div>
                     </div>
                  </div>
                </div>
              <div className="mt-8">
                <Button onClick={() => handleStartQuiz('exam-1', 'full')} size="lg" variant="orange">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Try the 20-Question Challenge
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                    This 20-question challenge is designed to be harder than the actual exam.
                </p>
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
            Our Mock Exams & Resources
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Start practicing right away. No sign-in required.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedQuizzes.map((quiz) => {
            const isResource = !quiz.questions || quiz.questions.length === 0;

            return (
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
                          {isResource ? 'FREE RESOURCE' : 'FREE'}
                        </span>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="px-6 flex-grow">
                  <p>{quiz.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 mt-auto flex flex-col items-stretch gap-3">
                  {isResource ? (
                      <Button asChild className="w-full" variant="orange">
                         <Link href={getResourcePath(quiz.id)}>
                             <BookText className="mr-2 h-4 w-4" />
                             Access Resource
                         </Link>
                      </Button>
                  ) : (
                    <Button onClick={() => handleStartQuiz(quiz.id, 'full')} className="w-full">
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Start Quiz
                    </Button>
                  )}
                </CardFooter>
              </Card>
            )
          })}
           <Card className="overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 flex flex-col bg-primary/5 border-primary/20">
                <CardHeader className="p-0">
                  {platformImage && (
                    <div className="aspect-video relative">
                      <Image
                        src={platformImage.imageUrl}
                        alt={platformImage.description}
                        data-ai-hint={platformImage.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <CardTitle className="font-headline text-2xl text-primary">
                      The AI-Powered Advantage
                    </CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground">
                      Discover what makes our learning platform unique.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="px-6 flex-grow">
                  <p>Our platform is more than just a quiz bank. We use AI to create a dynamic learning experience that helps you understand concepts, not just memorize answers.</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 mt-auto">
                  <Button asChild className="w-full" variant="outline">
                     <Link href="/features">
                         <Sparkles className="mr-2 h-4 w-4" />
                         Learn About Our Platform
                     </Link>
                  </Button>
                </CardFooter>
              </Card>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 bg-muted/30 p-8 rounded-lg">
            <div className="relative rounded-lg overflow-hidden min-h-[300px]">
                {sgImage && <Image src={sgImage.imageUrl} alt="Singapore skyline" fill className="object-cover" />}
            </div>
            <div>
                <h2 className="text-3xl font-extrabold font-headline text-primary">Built for Excellence. Made in Singapore.</h2>
                <p className="mt-3 text-lg text-foreground/80">
                    Singapore's education system is globally recognized for its rigor and excellence. We build our platform on that same foundation, combining cutting-edge AI with a commitment to quality and deep conceptual understanding.
                </p>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                        <span>Proudly developed by a registered Singaporean company.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                        <span>Methodology inspired by world-class academic standards.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                        <span>AI-powered tools designed to build mastery, not just pass tests.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Cpu className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                        <span>Leveraging the latest in AI and web technology for a seamless experience.</span>
                    </li>
                </ul>
                <Button asChild className="mt-6">
                    <Link href="/features">Learn About Our Method <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
        
        <div className="mt-24 text-center border-2 border-primary rounded-lg p-8">
            <h2 className="font-headline text-3xl font-bold text-primary tracking-tight">{translatedContent.features_title}</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {featureItems.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div key={index} className="p-6 rounded-lg">
                            <Icon className="h-10 w-10 mx-auto text-primary" />
                            <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                            <p className="mt-2 text-muted-foreground">{feature.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>

       {/* Floating AI Co-founder */}
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="orange" className="fixed bottom-6 right-6 z-20 h-16 w-16 rounded-full shadow-lg">
                    <MessageCircle className="h-8 w-8" />
                    <span className="sr-only">Ask AI Co-founder</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[90vh] md:h-[70vh] md:max-h-[600px] flex flex-col p-0">
                 <SheetHeader className="p-6 pb-2 border-b">
                    <SheetTitle className="flex items-center gap-3 text-2xl font-headline">
                        <Bot className="h-8 w-8 text-primary" />
                        AI Co-founder
                    </SheetTitle>
                    <SheetDescription className="text-left pt-2">
                        I'm here to help you understand our business, our technology, or how we can build a learning platform for you.
                    </SheetDescription>
                </SheetHeader>
                 <ScrollArea className="flex-grow p-6" ref={scrollAreaRef}>
                    <div className="space-y-6">
                        {messages.map((message, index) => (
                             <div key={index}>
                                <div className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : 'items-center'}`}>
                                    {message.role === 'assistant' && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                                    <div className={`p-3 rounded-lg max-w-md ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                        <p className="text-sm">{message.content}</p>
                                    </div>
                                    {message.role === 'assistant' && (
                                        <Button variant="ghost" size="icon" onClick={() => handlePlayAudio(message.content, index.toString())} disabled={!!isAudioLoading}>
                                            {isAudioLoading === index.toString() ? <Loader2 className="h-5 w-5 animate-spin" /> : <Volume2 className="h-5 w-5" />}
                                        </Button>
                                    )}
                                </div>
                                {message.role === 'assistant' && message.suggestions && (
                                    <div className="pl-10 mt-3 flex flex-wrap gap-2">
                                        {message.suggestions.map((q, i) => (
                                            <Button
                                                key={i}
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleSendMessage(q)}
                                                disabled={isChatLoading}
                                                className="text-xs h-auto py-1.5 px-3"
                                            >
                                                {q}
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                         {isChatLoading && (
                            <div className="flex items-start gap-3">
                                <Bot className="h-6 w-6 text-primary flex-shrink-0 animate-pulse" />
                                <div className="p-3 rounded-lg max-w-sm bg-muted">
                                   <Loader2 className="h-4 w-4 animate-spin"/>
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
                <SheetFooter className="p-4 border-t bg-background">
                     <form onSubmit={handleSubmit(onFormSubmit)} className="flex items-center gap-2 w-full">
                        <Input 
                            id="prompt"
                            placeholder="Ask a question..."
                            {...register("prompt")}
                            disabled={isChatLoading}
                            autoComplete="off"
                        />
                        <Button type="submit" disabled={isChatLoading} size="icon">
                            {isChatLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                            <span className="sr-only">Send</span>
                        </Button>
                    </form>
                </SheetFooter>
            </SheetContent>
        </Sheet>


      {quizModalState.isOpen && quizModalState.quizId && (
        <QuizModal
          quizId={quizModalState.quizId}
          isOpen={quizModalState.isOpen}
          onClose={handleCloseModal}
          mode={quizModalState.mode}
        />
      )}
    </>
  );
}
