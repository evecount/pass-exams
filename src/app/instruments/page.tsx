
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookText, FileText, Briefcase, HeartPulse } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { capitalMarketInstruments, moneyMarketInstruments, lifeInsuranceProducts, healthInsuranceProducts } from "@/lib/data/instruments-guide-data";

export default function InstrumentsGuidePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-16 bg-muted/20">
      <div className="w-full max-w-6xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Financial Instruments & Insurance Guide
            </h1>
            <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                A master list categorizing key instruments, markets, and products for your CMFAS exams.
            </p>
        </div>

        <div className="text-center mb-12">
            <Button asChild>
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
        </div>
        
        <div className="space-y-12">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                       <Briefcase /> Capital Market Instruments
                    </CardTitle>
                    <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                        For long-term financing (maturity > 1 year). Includes equities and long-term debt.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-lg border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[25%] font-bold">Instrument</TableHead>
                                    <TableHead className="w-[75%] font-bold">Key Characteristics</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                            {capitalMarketInstruments.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.instrument}</TableCell>
                                    <TableCell>{item.characteristics}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                       <FileText /> Money Market Instruments
                    </CardTitle>
                    <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                        For short-term borrowing and lending (maturity {'<='} 1 year). Highly liquid and low-risk.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-lg border">
                        <Table>
                             <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[25%] font-bold">Instrument</TableHead>
                                    <TableHead className="w-[75%] font-bold">Key Characteristics</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                            {moneyMarketInstruments.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.instrument}</TableCell>
                                    <TableCell>{item.characteristics}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                       <BookText /> Life Insurance Products
                    </CardTitle>
                    <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                        Products designed for protection, savings, and retirement needs over a long-term horizon.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-lg border">
                        <Table>
                             <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[25%] font-bold">Product</TableHead>
                                    <TableHead className="w-[75%] font-bold">Primary Purpose</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                            {lifeInsuranceProducts.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.product}</TableCell>
                                    <TableCell>{item.purpose}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                       <HeartPulse /> Health Insurance Products
                    </CardTitle>
                    <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                        Products designed to cover medical expenses and provide financial support during illness or disability.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-lg border">
                        <Table>
                             <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[25%] font-bold">Product</TableHead>
                                    <TableHead className="w-[75%] font-bold">Primary Purpose</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                            {healthInsuranceProducts.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.product}</TableCell>
                                    <TableCell>{item.purpose}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </main>
  );
}
