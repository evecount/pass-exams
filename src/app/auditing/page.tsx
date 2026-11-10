
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

export default function AuditingPage() {
  const financialStatementsAudit = [
    {
      rule: "Annual Audit Submission",
      coherentRule: "A licensed FA must submit its audited accounts and auditor's report to the MAS within 5 months after the close of the financial year.",
      source: "FAR, Chapter 7",
      whyTest: "Tests your memory of the long-term reporting deadline for confirming the firm's minimum capital (S$150k/S$300k) is met.",
    },
  ];

  const ilpSubFundAudit = [
    {
      rule: "Audit Method 1 (Financial Statements)",
      methods: "Audit on the financial statements of each ILP sub-fund.",
      deadline: "Audit period: 12 months.",
    },
    {
      rule: "Audit Method 2 (Internal Controls)",
      methods: "Audit on the internal controls and processes of the ILP sub-funds.",
      deadline: "Inaugural Audit Deadline: Completed not later than 3 months after the sub-fund's year-end (for the first time only).",
    },
    {
      rule: "Terminated/Matured Fund Audit",
      methods: "For ILP sub-funds that are terminated or matured, an audit certificate must be completed.",
      deadline: "Must be completed within 6 months after termination/maturity and sent to MAS within 30 days of completion.",
    },
  ];

  const salesQualityAudit = [
    {
        method: "Method 1: Independent Sales Audit (ISA) Unit",
        principle: "Internal Audit: The firm's internal unit samples transactions after the sale to check compliance and assigns the Balanced Scorecard (BSC) grade (e.g., checks for proper Fact Find/Disclosure).",
        source: "FAA-N20 (BSC Framework)",
    },
    {
        method: "Method 2: Mystery Shopping",
        principle: "External Audit: A third-party tester poses as a client to assess the representative's actual ethical conduct, suitability process, and disclosure before and during the sale.",
        source: "FAA-G14 (Remuneration Framework)",
    },
    {
        method: "Method 3: Supervisory Review",
        principle: "Managerial Audit: The representative's direct manager reviews a sample of advice documents and may conduct call-backs with high-risk clients.",
        source: "FAA-G08 (Supervision Guidelines)",
    },
    {
        method: "Method 4: Client Feedback (Complaints)",
        principle: "Reactive Audit: Formal recording and analysis of client complaints and customer feedback (FDO 4/5).",
        source: "GFA-G06 (Fair Dealing Outcomes)",
    },
  ];
  
    const mediSaveAWL = [
        { ageGroup: "40 years old or younger", limit: "S$300", distinction: "The lowest annual limit, reflecting lower health risk and the need to preserve funds for later years." },
        { ageGroup: "41 to 70 years old", limit: "S$600", distinction: "The standard middle-tier limit for most working and pre-retiree adults." },
        { ageGroup: "71 years old or older", limit: "S$900", distinction: "This is the highest annual limit, applicable to the most senior policyholders, to help them cope with rapidly increasing IP premiums." }
    ];


  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-24 bg-background">
      <div className="w-full max-w-5xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Understanding the different types of Auditing
            </h1>
            <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Auditing is regulated by the MAS to ensure Firms (FA, ILP Insurers, Fund Managers) maintain structural integrity and client safety. These are mandatory checks often hidden in the fine print of the Notices.
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
                            <p className="text-sm text-muted-foreground">A key study guide for RES5.</p>
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
          {/* Section 1 */}
          <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                   <BookCheck /> I. Audit of Financial Statements (General FA Firm)
                </CardTitle>
                <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                    This is the standard financial oversight mandated by the Financial Advisers Regulations (FAR).
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/4">Rule / Concept</TableHead>
                                <TableHead>Coherent Rule (The Deadline)</TableHead>
                                <TableHead className="w-[150px]">Source</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {financialStatementsAudit.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.rule}</TableCell>
                                <TableCell>{item.coherentRule}</TableCell>
                                <TableCell>{item.source}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="font-semibold">Why it's Tested:</p>
                    <p className="text-muted-foreground">{financialStatementsAudit[0].whyTest}</p>
                </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                   <BookCheck /> II. Audit of ILP Sub-Funds (MAS Notice 307)
                </CardTitle>
                <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                    This is one of the hardest compliance traps, as it outlines two mandatory methods for auditing the complex structure of Investment-Linked Policy (ILP) funds.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Rule / Concept</TableHead>
                                <TableHead>The Two Mandatory Audit Methods</TableHead>
                                <TableHead>Coherent Rule (The Deadline/Figure)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {ilpSubFundAudit.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.rule}</TableCell>
                                <TableCell>{item.methods}</TableCell>
                                <TableCell>{item.deadline}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
          </Card>
          
          {/* Section 3 */}
          <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                   <BookCheck /> III. Audit of Sales Quality (The MAS 'Methods' Trap)
                </CardTitle>
                <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                    This topic is frequently tested in a 'Which method is being described?' format. It's where the MAS outlines how it assesses the quality of advice provided by financial adviser representatives.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Method Name</TableHead>
                                <TableHead>Compliance Function (The Coherent Principle)</TableHead>
                                <TableHead>Source</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {salesQualityAudit.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.method}</TableCell>
                                <TableCell>{item.principle}</TableCell>
                                <TableCell>{item.source}</TableCell>
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
