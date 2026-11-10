
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookText, Calculator, FileText } from "lucide-react";
import { formulas, definitions } from "@/lib/data/formulas-definitions-data";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const categories = [...new Set(formulas.map(f => f.category)), ...new Set(definitions.map(d => d.category))];
const uniqueCategories = [...new Set(categories)].sort();

export default async function FormulasPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-16">
      <div className="w-full max-w-6xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Master Formulas & Definitions
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                Your quick-reference guide for key CMFAS exam calculations and terms.
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
                        <BookText className="h-8 w-8 text-primary" />
                        <div>
                            <h3 className="text-lg font-bold">View Master Numerical List</h3>
                            <p className="text-sm text-muted-foreground">Another key study guide for RES5.</p>
                        </div>
                        <Button asChild variant="orange" className="ml-auto">
                            <Link href="/numerical-list">
                                View List
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="space-y-12">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                       <Calculator /> Key Formulas
                    </CardTitle>
                    <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                        Essential calculations for performance measurement, valuation, and risk.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {formulas.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name)).map((formula, index) => (
                            <div key={index} className="p-4 border rounded-lg">
                                <h3 className="font-bold text-lg">{formula.name}</h3>
                                <p className="font-mono text-primary bg-muted p-2 rounded-md my-2 text-sm">{formula.formula}</p>
                                <p className="text-sm text-muted-foreground">{formula.explanation}</p>
                                <p className="text-xs text-muted-foreground mt-2">Category: <span className="font-semibold">{formula.category}</span></p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                       <FileText /> Key Definitions & Numerical Rules
                    </CardTitle>
                    <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                        Crucial terms and regulatory numbers you need to know, sorted by category.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                    {uniqueCategories.map(category => {
                        const categoryDefinitions = definitions.filter(d => d.category === category).sort((a,b) => a.term.localeCompare(b.term));
                        if (categoryDefinitions.length === 0) return null;
                        return (
                            <div key={category}>
                                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                                <div className="rounded-lg border">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-1/3 font-bold">Term / Rule</TableHead>
                                                <TableHead className="w-2/3 font-bold">Definition / Details</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {categoryDefinitions.map((def, index) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{def.term}</TableCell>
                                                    <TableCell>{def.definition}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </main>
  );
}
