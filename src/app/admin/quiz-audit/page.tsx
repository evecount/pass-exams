import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookCheck, CheckCircle, XCircle } from "lucide-react";
import { quizzes } from "@/lib/quiz-data";

const expectedCounts = {
    'exam-1': 20,
    'res-5': 150,
    'hi-exam': 50,
    'm9a-exam': 50,
    'm9-exam': 100,
    'm8-exam': 50,
    'data-eng-exam': 8,
};

export default async function QuizAuditPage() {
  const auditData = quizzes
    .filter(quiz => quiz.questions && quiz.questions.length > 0) // Only include actual quizzes with questions
    .map(quiz => {
        const expected = expectedCounts[quiz.id as keyof typeof expectedCounts] ?? quiz.questions.length; // Default to actual if not in list
        const actual = quiz.questions.length;
        const isCorrect = expected === actual;
        return {
        id: quiz.id,
        title: quiz.title,
        expectedCount: expected,
        actualCount: actual,
        isCorrect: isCorrect,
        };
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-24 bg-muted/20">
      <div className="w-full max-w-4xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Quiz Content Audit
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                This page provides a live count of questions for each exam directly from the source code to ensure data integrity.
            </p>
        </div>

        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                   <BookCheck /> Live Question Count Verification
                </CardTitle>
                <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                    Verify that the correct number of questions are loaded for each mock exam.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="rounded-lg border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold w-[20%]">Exam ID</TableHead>
                            <TableHead className="font-bold w-[40%]">Title</TableHead>
                            <TableHead className="font-bold text-center w-[15%]">Expected Count</TableHead>
                            <TableHead className="font-bold text-center w-[15%]">Actual Count</TableHead>
                            <TableHead className="font-bold text-center w-[10%]">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {auditData.map((item) => (
                        <TableRow key={item.id} className={!item.isCorrect ? 'bg-destructive/10' : ''}>
                            <TableCell className="font-mono text-xs">{item.id}</TableCell>
                            <TableCell className="font-medium">{item.title}</TableCell>
                            <TableCell className="text-center">{item.expectedCount > 0 ? item.expectedCount : 'N/A'}</TableCell>
                            <TableCell className="text-center font-bold">{item.actualCount}</TableCell>
                            <TableCell className="text-center">
                                {item.isCorrect ? (
                                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                                ) : (
                                    <XCircle className="h-5 w-5 text-destructive mx-auto" />
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </div>
                 <div className="text-center mt-12">
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
  );
}
