
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, FileText, Puzzle, Shield, Scale, Wand2, Target, BrainCircuit, Bot, GitBranch, Share2, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";


export default function WhitepaperPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'power_bundle');

  return (
    <main className="flex min-h-screen flex-col items-center pt-16 bg-muted/20">
      <section className="w-full bg-background relative">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          <div className="flex flex-col justify-center p-8 lg:p-16">
            <div className="max-w-md">
              <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Intellectual Property & Data Asset Strategy
              </h1>
              <p className="mt-4 text-md text-foreground/80">
                Our platform is built on a "proprietary by process" framework. This document outlines our unique approach to AI safety, intellectual property, and how our partners build valuable, long-term data assets.
              </p>
            </div>
          </div>
          <div className="relative min-h-[300px] md:min-h-full">
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

      <div className="w-full max-w-4xl p-4 sm:p-8 mt-16 mb-16">
        <Card className="shadow-lg">
            <CardHeader className="p-8 text-center">
                <Shield className="h-16 w-16 mx-auto text-primary" />
                <CardTitle className="font-headline text-3xl font-bold text-primary tracking-tighter mt-4">Our IP & Data Philosophy</CardTitle>
                <CardDescription className="text-foreground/80 max-w-3xl mx-auto pt-2 text-base">
                    A framework for building safe, effective, and legally-sound AI learning tools.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
                <div className="space-y-8">

                    {/* Situation */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Target className="h-8 w-8 text-primary" />
                            <h3 className="text-2xl font-bold tracking-tight">The Problem: AI Risk & IP Ambiguity</h3>
                        </div>
                        <p className="text-muted-foreground pl-12">
                            Generative AI tools present two major risks for institutions: 1) "Hallucination," where the AI generates incorrect information, and 2) Intellectual Property ambiguity, where it's unclear who owns the output. This creates significant legal and reputational risk, preventing widespread adoption.
                        </p>
                    </div>

                    <Separator />

                    {/* Task & Action */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Wand2 className="h-8 w-8 text-primary" />
                            <h3 className="text-2xl font-bold tracking-tight">Our Solution: A "Proprietary by Process" Framework</h3>
                        </div>
                        <p className="text-muted-foreground pl-12">
                            Our platform is built on a clear and deliberate philosophy that distinguishes between "Artificial Intelligence" (the application) and "Machine Learning" (the tool). This isn't just a technical detail; it's the foundation of our business and legal model.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-12 pt-4">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3"><Bot className="text-primary" /> <h4 className="font-semibold">The AI is the Partner</h4></div>
                                <p className="text-sm text-muted-foreground">The AI is the application layer that understands user intent. It orchestrates the process and structures the output to achieve a specific pedagogical goal.</p>
                            </div>
                             <div className="space-y-2">
                                <div className="flex items-center gap-3"><BrainCircuit className="text-primary" /> <h4 className="font-semibold">The ML is the Tool</h4></div>
                                <p className="text-sm text-muted-foreground">The Machine Learning (ML) models are the powerful engines we use to perform specific tasks: parsing text, identifying patterns, and generating new content.</p>
                            </div>
                        </div>
                    </div>

                    <Separator />
                    
                    {/* The Constraint */}
                     <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <FileText className="h-8 w-8 text-primary" />
                            <h3 className="text-2xl font-bold tracking-tight">The Critical Constraint: No Resources, No Thinking</h3>
                        </div>
                        <div className="prose max-w-none dark:prose-invert text-muted-foreground pl-12">
                            <p>
                                A crucial part of our methodology is the principle that <strong>our engine requires curated resources to function.</strong> The ML model is not an oracle that "knows" things; it is a processor that "reads" things.
                            </p>
                            <ul>
                                <li>If it is not provided with a candidate's resume and a job description, it cannot generate interview questions.</li>
                                <li>If it is not provided with a corpus of case law, it cannot find citations.</li>
                                <li>If it is not provided with a textbook chapter, it cannot create a worksheet.</li>
                            </ul>
                            <p>
                                The thinking cannot happen without the resource. This makes the AI safe and predictable. It cannot "hallucinate" facts because it is not permitted to access outside knowledge; it can only transform the information it is given.
                            </p>
                        </div>
                    </div>

                    <Separator />

                    {/* Result */}
                     <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Scale className="h-8 w-8 text-primary" />
                            <h3 className="text-2xl font-bold tracking-tight">The Result: A Legally Defensible & Value-Accretive Model</h3>
                        </div>
                         <div className="prose max-w-none dark:prose-invert text-muted-foreground pl-12">
                            <p>
                                This "Proprietary by Process" model creates a robust legal framework. By requiring a partner to provide the source material, the legal responsibility for content rights remains with them. Our platform acts as a powerful transformation tool, not a content originator.
                            </p>
                             <p>
                                More importantly, this establishes a clear framework for co-creation and asset ownership. Every client is building their own proprietary data asset:
                            </p>
                             <ul>
                                <li><strong>The Partner's Contribution:</strong> The partner provides the curated, expert knowledge and context. This is their unique IP.</li>
                                <li><strong>The AI's Contribution:</strong> The AI partner applies its unique ability to structure information and generate interactive learning experiences at scale.</li>
                                <li><strong>The Combined Asset:</strong> The resulting learning data—the patterns of how users interact with the partner's unique content—becomes a new, valuable, and proprietary data set owned by the partner.</li>
                            </ul>
                             <p>
                                We are not building a system that replaces human expertise; we are building a tool that amplifies it, turning a static content library into an appreciating data asset.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-12 text-center bg-primary/10 border-primary border-dashed p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-primary font-headline">Ready to Build Your Data Asset?</h3>
                    <p className="mt-2 text-muted-foreground">Turn your curriculum into a private, AI-powered app for your students. We handle the technology, you build the value.</p>
                    <Button asChild className="mt-4">
                        <Link href="/partnership">Learn About White-Label Partnerships</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>

        <div className="text-center mt-12">
            <Button asChild variant="ghost">
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
