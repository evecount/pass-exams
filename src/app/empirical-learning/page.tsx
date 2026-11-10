'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BrainCircuit, Database, GitBranch, PlayCircle, Cpu, Fingerprint } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from 'react';
import QuizModal from '@/components/quiz/QuizModal';
import { dataEngExam } from '@/lib/data/data-eng-exam-data';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { marked } from 'marked';


// Content embedded for prototype purposes
const whitepaperContent = {
    intro: `Traditional learning platforms are static; they present information and record a simple pass/fail outcome. They cannot answer the question: "Why did the user get this wrong?"

Our Empirical Learning Engine is designed to answer that question. It treats every user interaction as a data point, transforming the platform from a simple "quiz app" into an intelligent system that learns about the user's understanding and the curriculum's effectiveness simultaneously.`,
    xAxis: `This coordinate tracks a single user's state of mastery for a specific concept.

1.  **Initial State:** A user answers a standard-difficulty question.
2.  **Coordinate Shift:**
    *   If the answer is **incorrect**, their coordinate for that concept shifts to "needs-reinforcement."
    *   If the answer is **correct**, their coordinate shifts to "mastery-achieved."
3.  **Adaptive Retake:** On the next attempt, the system reads this coordinate:
    *   "Needs-reinforcement" -> The system serves the **Easy** version of the question.
    *   "Mastery-achieved" -> The system serves the **Hard** version to challenge true understanding.

This creates a personalized, adaptive learning path for every individual.`,
    yAxis: `This coordinate tracks the aggregate performance of the *entire user base* on a specific question, providing a powerful "truth-teller" for the curriculum itself.

If 75% of users get Question 15 wrong, the problem is not with the users; it's with the question or the way the concept is taught. This data-driven insight allows curriculum creators to identify and fix common stumbling blocks with empirical evidence.`,
    zAxis: `This is the architectural link that makes the system work. An individual concept is not a single question but a "genus" of questions linked by a shared ID.

*   \`q15_easy\`
*   \`q15_standard\`
*   \`q15_hard\`

These three variants all relate to the same core concept, \`id: 15\`. This structure allows the engine to seamlessly switch between difficulty levels based on the user's "coordinate" on the X-Axis.`,
    flywheel: `This three-dimensional model creates a powerful data flywheel:

1.  **Individual interactions** (X-Axis) feed into the **collective dataset** (Y-Axis).
2.  Insights from the collective dataset inform improvements to the **conceptual questions** (Z-Axis).
3.  Improved questions lead to more accurate measurements of individual understanding, and the cycle continues.

This is how our platform moves from a static content repository to a living, self-improving Empirical Learning Engine.`
};

const sampleDataset = `
[
  {
    "interaction_id": "ia_001",
    "user_id": "user_alpha",
    "question_id": "2001",
    "session_timestamp": "2024-08-02T10:00:10Z",
    "latency_ms": 12000,
    "pathing_data": { "final_choice": "option_4" },
    "correction_count": 2,
    "is_correct": false
  },
  {
    "interaction_id": "ia_011",
    "user_id": "user_alpha",
    "question_id": "2001",
    "session_timestamp": "2024-08-04T10:00:15Z",
    "latency_ms": 5000,
    "pathing_data": { "final_choice": "option_3" },
    "correction_count": 0,
    "is_correct": true
  }
]
`; // Truncated for brevity

const adaptiveEngineSample = `
### The Adaptive Retake Logic

1.  **Read History:** Look up the user's most recent answer for a question ID.
2.  **Check Coordinate:** Check the \`is_correct\` status of that last attempt.
3.  **Apply Adaptive Rule:**
    *   If \`is_correct: true\`, serve the **Hard** version.
    *   If \`is_correct: false\`, serve the **Easy** version.

---

### Generating Attempt #4 for \`user_alpha\`

*   **Analysis:** \`user_alpha\` answered all questions correctly in their last attempt (e.g., interaction \`ia_011\` for question 2001 was \`is_correct: true\`).
*   **Conclusion:** The system generates a "Mastery Challenge" retake.
*   **Generated Quiz:**
    *   Question 1: **Hard** version of ID \`2001\`
    *   ...and so on for all questions.
`;

const cognitiveVariables = [
    { name: 'Decision Latency Delta', metric: 'Processing Speed', mechanism: 'The millisecond difference in response time between "Bookmarked" (hard) vs. "Non-Bookmarked" (easy) questions.' },
    { name: 'Heuristic Pathing (MCQ)', metric: 'Elimination Logic', mechanism: 'Tracking mouse/touch movement patterns across the 4 MCQ options before selection.' },
    { name: 'Rationale Dwell-Time', metric: 'Receptivity Index', mechanism: 'Time spent reading the "Teaching Rationale" vs. the complexity (word count) of the text.' },
    { name: 'Semantic KPC Variance', metric: 'Linguistic Fingerprint', mechanism: "In text answers, measuring the linguistic distance between the user's vocabulary and the KPC (Key Point Checklist)." },
    { name: 'The Self-Correction Pulse', metric: 'Metacognitive Monitoring', mechanism: 'Frequency and timing of "backspacing" or editing text-based answers before submission.' },
    { name: 'Topic Gravity (Bookmark Ratio)', metric: 'Intellectual Topography', mechanism: "The specific distribution of bookmarks across 100+ topic tags." },
    { name: 'Stamina Decay Slope', metric: 'Neuro-Endurance', mechanism: 'The rate at which accuracy and latency change over a 2-hour session.' }
];

export default function EmpiricalLearningPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // States for parsed markdown
    const [parsedIntro, setParsedIntro] = useState('');
    const [parsedXAxis, setParsedXAxis] = useState('');
    const [parsedYAxis, setParsedYAxis] = useState('');
    const [parsedZAxis, setParsedZAxis] = useState('');
    const [parsedAdaptiveSample, setParsedAdaptiveSample] = useState('');

    useEffect(() => {
        const parseMarkdown = async () => {
            setParsedIntro(await marked.parse(whitepaperContent.intro));
            setParsedXAxis(await marked.parse(whitepaperContent.xAxis));
            setParsedYAxis(await marked.parse(whitepaperContent.yAxis));
            setParsedZAxis(await marked.parse(whitepaperContent.zAxis));
            setParsedAdaptiveSample(await marked.parse(adaptiveEngineSample));
        };
        parseMarkdown();
    }, []);

  return (
    <>
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-24 bg-muted/20">
      <div className="w-full max-w-4xl pt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
            The Empirical Learning Engine
          </h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            A whitepaper on our proprietary methodology for creating adaptive, self-improving educational experiences.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="p-8">
            <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
              <BrainCircuit /> Core Concept: Beyond Pass/Fail
            </CardTitle>
            <div className="prose dark:prose-invert max-w-none text-foreground/80 pt-2 text-base" dangerouslySetInnerHTML={{ __html: parsedIntro }} />
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-12">
            
            <Card className="shadow-lg mt-12 border-2 border-primary">
                <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                       <PlayCircle /> Try It Live
                    </CardTitle>
                    <CardDescription className="text-foreground/80 max-w-3xl mx-auto pt-2">
                        Experience the adaptive engine for yourself. Take this short 5-question quiz on Data Engineering. Try getting some wrong to see how the next retake adapts to you.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <Button onClick={() => setIsModalOpen(true)} size="lg">
                        Launch Interactive Demo
                    </Button>
                </CardContent>
            </Card>

            <Separator />
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">The "Coordinates" of Understanding</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">The X-Axis</CardTitle>
                    <CardDescription>The Individual Path</CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm dark:prose-invert text-muted-foreground" dangerouslySetInnerHTML={{ __html: parsedXAxis }}/>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">The Y-Axis</CardTitle>
                    <CardDescription>The Collective Insight</CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm dark:prose-invert text-muted-foreground" dangerouslySetInnerHTML={{ __html: parsedYAxis }}/>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">The Z-Axis</CardTitle>
                    <CardDescription>The Conceptual Genus</CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm dark:prose-invert text-muted-foreground" dangerouslySetInnerHTML={{ __html: parsedZAxis }}/>
                </Card>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3"><Database/>Syntactic Data: A Sample Dataset</h3>
                 <p className="text-muted-foreground">This is a sample of what the raw data from the \`cognitive_interactions\` table would look like. It's the fuel for our machine learning analysis.</p>
                <div className="bg-gray-900 text-white rounded-lg p-4">
                    <pre className="text-xs whitespace-pre-wrap"><code>{sampleDataset}</code></pre>
                </div>
            </div>

            <Separator />

            <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3"><GitBranch/>The Adaptive Engine in Action</h3>
                <p className="text-muted-foreground">Here is a practical example of how the system uses a user's performance history to generate the next appropriate test.</p>
                <div className="prose prose-sm dark:prose-invert max-w-none mt-4 p-4 border rounded-lg bg-background" dangerouslySetInnerHTML={{ __html: parsedAdaptiveSample }} />
            </div>

            <Separator />

             <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3"><Fingerprint/>Cognitive Biometrics: The 7 Tracking Metrics</h3>
                <p className="text-muted-foreground">
                    Our platform doesn't just track correct or incorrect answers. It measures *how* a user thinks, creating a unique "Cognitive Signature" from seven behavioral data points. This turns learning metrics into a new class of high-entropy data with applications in digital identity and security.
                </p>

                <div className="mt-6 rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[25%] font-bold">Cognitive Variable</TableHead>
                                <TableHead className="w-[25%] font-bold">Neural/Pedagogical Metric</TableHead>
                                <TableHead className="w-[50%] font-bold">Measurement Mechanism</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {cognitiveVariables.map((variable) => (
                                <TableRow key={variable.name}>
                                    <TableCell className="font-medium">{variable.name}</TableCell>
                                    <TableCell className="text-muted-foreground">{variable.metric}</TableCell>
                                    <TableCell>{variable.mechanism}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            <Separator />

            <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3"><Cpu/>Architectural Evolution: The Path to Vectorization</h3>
                <p className="text-muted-foreground">Our current system is the foundation. Here’s how it evolves into a true machine learning model that understands *meaning*.</p>
                <div className="mt-6 space-y-6">
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</div>
                            <div className="h-full w-px bg-border"></div>
                        </div>
                        <div>
                            <h4 className="font-semibold">Phase 1: Structured Data (Current State)</h4>
                            <p className="text-sm text-muted-foreground">Our current engine tracks discrete events: a specific user answers a specific multiple-choice question, and the answer is either correct or incorrect. This builds a structured, predictable dataset, perfect for the adaptive logic we've just demonstrated.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</div>
                            <div className="h-full w-px bg-border"></div>
                        </div>
                        <div>
                            <h4 className="font-semibold">Phase 2: The Tipping Point (Semantic Analysis)</h4>
                            <p className="text-sm text-muted-foreground">The next frontier is understanding unstructured data, such as a user's written answer. To do this, we need to move beyond simple "correct/incorrect" and measure *meaning*. This is the trigger for using vectorization.</p>
                        </div>
                    </div>
                        <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</div>
                        </div>
                        <div>
                            <h4 className="font-semibold">Phase 3: The Vector Database Solution</h4>
                            <p className="text-sm text-muted-foreground">We convert text—both the student's answer and the ideal answer—into mathematical vectors called "embeddings." A **Vector Database** stores these embeddings and allows for ultra-fast similarity searches. This lets us ask: "How close in meaning is the student's answer to our expert-defined key points?" This 'semantic distance' becomes a new, powerful coordinate in their Cognitive ID.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="text-center mt-12 border-t pt-8">
              <Button asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
    {isModalOpen && (
        <QuizModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            quizId="data-eng-exam"
            mode="full"
            dynamicQuiz={dataEngExam}
        />
    )}
    </>
  );
}
