
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, TrendingUp, Zap, AlertTriangle } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { investmentStrategies } from "@/lib/data/investment-strategies-data";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


export default function InvestmentStrategiesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-24 bg-muted/20">
      <div className="w-full max-w-6xl pt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
            Investment Strategies Guide
          </h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            A guide to common investment strategies and vehicles based on risk appetite and investment size.
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

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
              <TrendingUp /> Investor Risk Profiles & Strategies
            </CardTitle>
            <CardDescription className="text-foreground/80 max-w-3xl pt-2">
              This table outlines suitable investment strategies and vehicles for different risk profiles, from conservative to aggressive.
            </CardDescription>
            <Alert variant="destructive" className="mt-4 bg-amber-500/10 border-amber-500/50 text-amber-700 dark:text-amber-300">
                <AlertTriangle className="h-4 w-4 !text-amber-500" />
                <AlertTitle className="font-bold !text-amber-600 dark:!text-amber-400">Disclaimer</AlertTitle>
                <AlertDescription>
                    This information is for educational purposes only and does not constitute financial advice. Always consult with a qualified financial professional before making any investment decisions.
                </AlertDescription>
            </Alert>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4 font-bold">Risk Profile</TableHead>
                    <TableHead className="w-1/4 font-bold">Typical Investor & Amount</TableHead>
                    <TableHead className="w-1/2 font-bold">Suitable Instruments & Vehicles</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {investmentStrategies.map((profile, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium align-top">
                        <div className="flex items-center gap-2">
                          {profile.riskProfile === 'Conservative' && <Briefcase className="h-5 w-5 text-blue-500" />}
                          {profile.riskProfile === 'Moderate' && <TrendingUp className="h-5 w-5 text-green-500" />}
                          {profile.riskProfile === 'Aggressive' && <Zap className="h-5 w-5 text-red-500" />}
                          {profile.riskProfile}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{profile.objective}</p>
                      </TableCell>
                      <TableCell className="align-top">
                        <p className="font-semibold">{profile.investorType}</p>
                        <p className="text-sm text-muted-foreground">{profile.typicalAmount}</p>
                      </TableCell>
                      <TableCell className="align-top">
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          {profile.vehicles.map((vehicle, vIndex) => (
                            <li key={vIndex}>
                              <strong>{vehicle.name}:</strong> {vehicle.description}
                            </li>
                          ))}
                        </ul>
                      </TableCell>
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
