
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookText, Calculator, BookCheck, FileText, Briefcase } from "lucide-react";

const resources = [
  {
    title: "Master Numerical List",
    description: "A master list of 40 crucial numerical data points for the CMFAS exams, especially RES5.",
    href: "/numerical-list",
    icon: BookText,
  },
  {
    title: "Auditing Types Guide",
    description: "A supplementary study guide for RES5, explaining the different types of auditing required by MAS.",
    href: "/auditing",
    icon: BookCheck,
  },
  {
    title: "Master Formulas & Definitions",
    description: "Your quick-reference guide for key CMFAS exam calculations and terms.",
    href: "/formulas",
    icon: Calculator,
  },
  {
    title: "Instruments & Markets Guide",
    description: "A master list categorizing key financial instruments and insurance products.",
    href: "/instruments",
    icon: Briefcase,
  },
];

export default function CMFASHubPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-24 bg-muted/20">
      <div className="w-full max-w-4xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                CMFAS Resource Hub
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                A collection of essential study guides and resources to help you master the CMFAS exams.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
                <Card key={resource.title} className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <resource.icon className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <CardTitle>{resource.title}</CardTitle>
                                <CardDescription className="mt-1">{resource.description}</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex items-end">
                         <Button asChild className="w-full">
                            <Link href={resource.href}>View Guide</Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>

         <div className="text-center mt-16">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
