
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Bot, FileCheck2, Loader2, Sparkles, Wand2, ChevronRight, Printer, Book, Info, Save } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { generateQuestionsFromText, saveGeneratedQuiz } from '@/lib/ai-actions';
type GenerateQuestionsFromTextInput = { text: string };
import { useToast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { marked } from 'marked';
import QuizModal from '@/components/quiz/QuizModal';
import type { Quiz, Question as FullQuestionType } from '@/lib/types';
import { useUser } from '@/firebase';


type GeneratedQuestion = {
  id: number;
  questionText: string;
  options?: { text: string; isCorrect: boolean }[];
  explanation: string;
};

const sampleTexts = [
    {
      id: 'science',
      title: 'Primary School Science',
      text: 'Photosynthesis is the process used by plants, algae, and certain bacteria to harness energy from sunlight and turn it into chemical energy. The main inputs are water, carbon dioxide, and sunlight. The outputs are glucose (sugar for energy) and oxygen, which is released into the atmosphere.',
    },
    {
      id: 'history',
      title: 'High School History',
      text: 'The Treaty of Versailles, signed in 1919, officially ended World War I. Key terms included forcing Germany and its allies to accept full responsibility for the war (the War Guilt Clause), pay heavy financial reparations, disarm, and cede territory. Many historians argue the harsh terms contributed to the economic and political instability that led to World War II.',
    },
    {
      id: 'secondary_math',
      title: 'Secondary School Math',
      text: `### Topic: Quadratic Equations

**Definition:** A quadratic equation is an algebraic equation of the second degree in x.

**Standard Form:**
\`ax² + bx + c = 0\`
Where:
- 'x' is the unknown variable.
- 'a', 'b', and 'c' are known numbers.
- 'a' is not equal to 0.

**The Quadratic Formula:**
The solutions (or roots) for 'x' can be found using the following formula:
\`x = [-b ± sqrt(b² - 4ac)] / 2a\``,
    },
    {
      id: 'phd_math',
      title: 'PhD Math',
      text: `### Topic: The Definition of the Derivative

**Concept:** The derivative of a function of a real variable measures the sensitivity to change of the function value (output value) with respect to a change in its argument (input value).

**Limit Definition:**
The derivative of a function f(x) at a point x=a, denoted f'(a), is defined by the limit:
\`f'(a) = lim(h -> 0) [f(a + h) - f(a)] / h\`

This limit represents the instantaneous rate of change of the function at point 'a', or the slope of the tangent line to the graph of the function at that point.`,
    }
];

export default function DemoPage() {
  const [sourceText, setSourceText] = useState(sampleTexts[0].text);
  const [displaySampleText, setDisplaySampleText] = useState<string | null>(null);
  const [questionType, setQuestionType] = useState<GenerateQuestionsFromTextInput['questionType']>('multipleChoice');
  const [difficultyLevel, setDifficultyLevel] = useState<GenerateQuestionsFromTextInput['difficultyLevel']>('primarySchool');
  const [generatedQuestions, setGeneratedQuestions] = useState<GeneratedQuestion[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const [generatedQuiz, setGeneratedQuiz] = useState<Quiz | null>(null);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  
  const [isSaving, setIsSaving] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (generatedQuestions.length > 0) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      
      const newQuiz: Quiz = {
        id: `custom-${Date.now()}`,
        title: 'Your Custom Quiz',
        description: 'A quiz generated from your provided text.',
        year: new Date().getFullYear().toString(),
        questions: generatedQuestions.map((q, i) => ({
          ...q,
          id: Date.now() + i,
          topic: 'Custom',
          difficulty: 5
        } as FullQuestionType))
      };
      setGeneratedQuiz(newQuiz);
    }
  }, [generatedQuestions]);
  
  const handleUseSampleText = async (sample: typeof sampleTexts[0]) => {
    setSourceText(sample.text);
    if (sample.id.includes('math')) {
      const html = await marked.parse(sample.text);
      setDisplaySampleText(html);
    } else {
      setDisplaySampleText(null);
    }
  }

  const handleSourceTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSourceText(e.target.value);
    if (displaySampleText) {
      setDisplaySampleText(null);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedQuestions([]);
    try {
      const result = await generateQuestionsFromText({ sourceText, questionType, difficultyLevel, numQuestions: 5 });
      if (result.error || !result.questions) {
        throw new Error(result.error || "The model failed to generate questions.");
      }
      setGeneratedQuestions(result.questions.map((q, i) => ({...q, id: i})) as GeneratedQuestion[]);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: error.message,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveQuiz = async () => {
    if (!generatedQuiz || !user) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No quiz to save or you are not logged in.',
      });
      return;
    }
    setIsSaving(true);
    try {
      const result = await saveGeneratedQuiz(user.uid, generatedQuiz);
      if (result.error) {
        throw new Error(result.error);
      }
      toast({
        title: 'Quiz Saved!',
        description: 'Your custom quiz has been saved to your dashboard.',
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Failed to Save Quiz',
        description: error.message,
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handlePrint = () => {
    window.print();
  }

  return (
    <>
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-16 bg-muted/20 print:bg-white print:p-0">
      <div className="w-full max-w-6xl pt-16 print:pt-0">
        <div className="text-center mb-12 print:hidden">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
            Curriculum Generator
          </h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
             Feel free to use our samples, or paste in your own study notes or curriculum materials below. The full platform can process entire documents.
          </p>
        </div>

        <div className="space-y-8 print:space-y-0">
          <Card className="shadow-lg print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="text-primary" />
                <span>Step 1: Create a Worksheet</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="sourceText" className="text-lg font-semibold">Source Material</Label>
                <CardDescription className="mb-2">
                  Use our samples, or paste your own notes below.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-2">
                  {sampleTexts.map(sample => (
                    <Button key={sample.id} variant="outline" size="sm" onClick={() => handleUseSampleText(sample)}>
                      Use {sample.title}
                    </Button>
                  ))}
                </div>
                {displaySampleText && (
                  <div 
                    className="prose dark:prose-invert prose-sm max-w-none p-4 mb-2 border rounded-md bg-background"
                    dangerouslySetInnerHTML={{ __html: displaySampleText }}
                  />
                )}
                <Textarea
                  id="sourceText"
                  value={sourceText}
                  onChange={handleSourceTextChange}
                  placeholder="Paste your lesson notes, a chapter from a textbook, or any source material here..."
                  className="h-48 bg-orange-100 dark:bg-orange-900/30"
                  disabled={isGenerating}
                />
              </div>

              <div>
                <Label className="text-lg font-semibold">Question Type</Label>
                <RadioGroup value={questionType} onValueChange={(value) => setQuestionType(value as any)} className="flex gap-4 mt-2" disabled={isGenerating}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="multipleChoice" id="mc" />
                    <Label htmlFor="mc">Multiple Choice</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="shortAnswer" id="sa" />
                    <Label htmlFor="sa">Written Comprehension</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-lg font-semibold">Difficulty Level</Label>
                 <RadioGroup value={difficultyLevel} onValueChange={(value) => setDifficultyLevel(value as any)} className="flex flex-wrap gap-4 mt-2" disabled={isGenerating}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="preSchool" id="preSchool" />
                    <Label htmlFor="preSchool">Pre-School</Label>
                  </div>
                   <div className="flex items-center space-x-2">
                    <RadioGroupItem value="primarySchool" id="primary" />
                    <Label htmlFor="primary">Primary School</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="highSchool" id="high" />
                    <Label htmlFor="high">High School</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="professional" id="prof" />
                    <Label htmlFor="prof">Professional</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phd" id="phd" />
                    <Label htmlFor="phd">PhD</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button size="lg" onClick={handleGenerate} disabled={isGenerating || !sourceText} className="w-full">
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Exam
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <div ref={resultsRef} className="space-y-8 print:space-y-0">
            {isGenerating && (
                <div className="flex flex-col items-center justify-center text-center p-8 text-muted-foreground print:hidden">
                  <Bot className="h-12 w-12 mb-4 animate-pulse text-primary" />
                  <p className="font-semibold text-lg">The model is creating your exam...</p>
                  <p className="text-sm">This may take a few seconds.</p>
                </div>
            )}
            {generatedQuestions.length > 0 && (
                <>
                <Card className="shadow-lg border-2 border-primary/50 bg-primary/5 animate-in fade-in-50 duration-500 print:hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                            <FileCheck2 />
                            <span>Worksheet Generated</span>
                        </CardTitle>
                        <CardDescription>
                            Your custom exam is ready. You can now launch it as an interactive quiz, print it, or save it to your dashboard.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col sm:flex-row gap-4">
                        <Button onClick={() => setIsQuizModalOpen(true)} className="w-full" size="lg">
                            <Book className="mr-2" />
                            Launch Interactive Quiz
                        </Button>
                        <Button onClick={handlePrint} className="w-full" size="lg" variant="outline">
                            <Printer className="mr-2" />
                            Print as Worksheet
                        </Button>
                        {user && (
                          <Button onClick={handleSaveQuiz} disabled={isSaving} className="w-full" size="lg" variant="outline">
                            {isSaving ? <Loader2 className="mr-2 animate-spin" /> : <Save className="mr-2" />}
                            Save to Dashboard
                          </Button>
                        )}
                    </CardContent>
                </Card>
                
                {/* Printable Worksheet Section */}
                <div className="hidden print:block">
                    <div className="p-8">
                        <h1 className="text-3xl font-bold mb-2">Custom Worksheet</h1>
                        <p className="text-muted-foreground mb-6">Generated from your source material.</p>
                        
                        <div className="space-y-8">
                            {generatedQuestions.map((q, index) => (
                                <div key={q.id} className="space-y-3">
                                    <p className="font-bold">{index + 1}. {q.questionText}</p>
                                    {q.options ? (
                                        <ul className="space-y-2 pl-5">
                                            {q.options.map((opt, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border border-black rounded-sm"></div>
                                                    <span>{opt.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="mt-2 border-b-2 border-dotted h-24"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        
                        <div className="answer-key mt-12 pt-8 border-t">
                             <h2 className="text-2xl font-bold mb-4">Answer Key</h2>
                             <div className="space-y-4">
                                {generatedQuestions.map((q, index) => (
                                    <div key={`ans-${q.id}`}>
                                        <p className="font-bold">{index + 1}. {q.options?.find(o => o.isCorrect)?.text || 'See explanation.'}</p>
                                        <p className="text-sm text-gray-600 pl-4"><strong>Explanation:</strong> {q.explanation}</p>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>
                </div>
                </>
            )}
          </div>
        </div>

        <Card className="mt-12 text-center p-8 bg-primary/10 border-primary border-dashed print:hidden">
            <h2 className="text-2xl font-bold font-headline text-primary">Ready to Build For Your Classroom?</h2>
            <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">Turn your curriculum into a private, AI-powered app for your students. We handle the technology, you provide the expert content.</p>
            <Button asChild className="mt-6">
                <Link href="/partnership">
                    Learn About White-Label Partnerships <ChevronRight className="ml-2" />
                </Link>
            </Button>
        </Card>
      </div>
    </main>
    {isQuizModalOpen && generatedQuiz && (
        <QuizModal
            quizId="custom-generated-quiz"
            isOpen={isQuizModalOpen}
            onClose={() => setIsQuizModalOpen(false)}
            mode="full"
            dynamicQuiz={generatedQuiz}
        />
    )}
    </>
  );
}
