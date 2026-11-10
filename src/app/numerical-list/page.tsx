
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
import { ArrowLeft, BookText, BookCheck } from "lucide-react";
import { numericalListData } from "@/lib/numerical-list-data";


export default async function NumericalListPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-16">
      <div className="w-full max-w-6xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Master Numerical List
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                A master list of 40 crucial numerical data points for the CMFAS exams.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
             <Card className="flex flex-col justify-center">
                <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                        <ArrowLeft className="h-8 w-8 text-primary" />
                        <div>
                            <h3 className="text-lg font-bold">Back to Home</h3>
                            <p className="text-sm text-muted-foreground">Return to the main page.</p>
                        </div>
                         <Button asChild className="ml-auto">
                            <Link href="/">
                                Go Back
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <Card className="flex flex-col justify-center">
                <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                        <BookCheck className="h-8 w-8 text-primary" />
                        <div>
                            <h3 className="text-lg font-bold">Learn About Auditing Types</h3>
                            <p className="text-sm text-muted-foreground">Discover another key study guide for RES5.</p>
                        </div>
                        <Button asChild variant="orange" className="ml-auto">
                            <Link href="/auditing">
                                View Guide
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>

        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                   <BookText /> 40 Unique Data Points
                </CardTitle>
                <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                    This table contains every crucial numerical figure, sorted in ascending order.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="rounded-lg border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold w-[10%]">Number</TableHead>
                            <TableHead className="font-bold w-[25%]">Context / Requirement</TableHead>
                            <TableHead className="font-bold w-[15%]">Regulatory Source / Topic</TableHead>
                            <TableHead className="font-bold w-[50%]">Details</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {numericalListData.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.number}</TableCell>
                            <TableCell>{item.context}</TableCell>
                            <TableCell className="text-muted-foreground">{item.source}</TableCell>
                            <TableCell className="text-sm">{item.details}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </div>
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
