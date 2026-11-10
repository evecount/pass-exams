'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Handshake, Mail, TrendingUp, Users, MessageCircle, School, Palette, UploadCloud, Rocket, Lightbulb, ShieldCheck, Wand2, TestTube2, Languages, Cpu, BarChart, CheckCircle, Building, HeartHandshake } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";


export default function PartnershipPage() {
  const founderImage = PlaceHolderImages.find(p => p.id === 'gwen_founder_image');
  const researchImage = PlaceHolderImages.find(p => p.id === 'quiz_res-5');
  const whatsappNumber = "6512345678"; 
  const whatsappMessage = "Hello! My name is [Your Name] from [Your School/Institution]. I would like to discuss a partnership for your platform.";

  const mailtoHref = "mailto:gwen@evecount.com?subject=Partnership%20Inquiry&body=Hello!%0D%0AI'm%20interested%20in%20(please%20select%20one):%0D%0A-%20Requesting%20a%20Demo%0D%0A-%20White-Label%20Partnership%0D%0A-%20Affiliate%20Program%0D%0A%0D%0A[Your%20Name/Organization]";


  return (
    <main className="flex min-h-screen flex-col items-center pt-16 bg-muted/20">
       <section className="w-full bg-background relative">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          <div className="flex flex-col justify-center p-8 lg:p-16">
            <div className="max-w-md">
              <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Deploy Your Own AI Content Engine
              </h1>
              <p className="mt-4 text-md text-foreground/80">
                We provide a powerful, white-label Machine Learning solution that transforms your proprietary content into an interactive, AI-driven application. This platform is a case study in that vision.
              </p>
              <Button asChild size="lg" className="mt-6">
                <a href={mailtoHref}>
                    <Handshake className="mr-2 h-5 w-5" />
                    Inquire About a Partnership
                </a>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[300px] md:min-h-full">
            {founderImage && (
              <Image
                src={founderImage.imageUrl}
                alt={founderImage.description}
                data-ai-hint={founderImage.imageHint}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
      </section>
      
      <div className="w-full max-w-4xl p-4 sm:p-8 mt-16 mb-16">
        <div className="space-y-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-primary">Who We Partner With</h2>
                <p className="mt-2 text-lg text-muted-foreground">From individual educators to global organizations, our platform is built to scale.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <Card>
                    <CardHeader className="items-center text-center">
                        <Users className="h-10 w-10 text-primary mb-2"/>
                        <CardTitle>Parents & Tutors</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground text-center">Use our AI Sandbox to instantly turn homework notes into fun, interactive worksheets for your child or student.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="items-center text-center">
                        <School className="h-10 w-10 text-primary mb-2"/>
                        <CardTitle>Teachers & Educators</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground text-center">Deploy a simple, private learning tool for your classroom. Use our engine to create quizzes from your lesson plans.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="items-center text-center">
                        <Building className="h-10 w-10 text-primary mb-2"/>
                        <CardTitle>Institutions & Firms</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground text-center">Launch a fully custom-branded, AI-powered learning platform with your proprietary curriculum for large-scale training.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="items-center text-center">
                        <HeartHandshake className="h-10 w-10 text-primary mb-2"/>
                        <CardTitle>NGOs & Non-Profits</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground text-center">Transform your advocacy materials into engaging, educational campaigns to raise public awareness for your cause.</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                        <Cpu /> A Platform for Machine Learning Solutions
                    </CardTitle>
                    <CardDescription className="text-foreground/80 max-w-3xl mx-auto pt-2">
                        We empower organizations to leverage our AI/ML framework with their own expert content.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="prose prose-lg max-w-none mx-auto text-foreground">
                        <p>
                           Our mission is to democratize access to sophisticated machine learning tools. We understand that the true value of AI is unlocked when it's applied to high-quality, proprietary content. Our platform is not just a learning tool; it's a content-agnostic engine designed to be white-labeled.
                        </p>
                        <p>
                            We offer partnership models for institutions that want to deploy their own AI-powered applications without the massive overhead of building an in-house ML team.
                        </p>
                        
                        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            <div className="p-6 rounded-lg">
                                <UploadCloud className="h-12 w-12 mx-auto text-primary" />
                                <h3 className="mt-4 text-xl font-bold">Content Ingestion</h3>
                                <p className="mt-2 text-muted-foreground text-base">You provide your curriculum as simple text; our engine does the rest.</p>
                            </div>
                             <div className="p-6 rounded-lg">
                                <Palette className="h-12 w-12 mx-auto text-primary" />
                                <h3 className="mt-4 text-xl font-bold">White-Label Branding</h3>
                                <p className="mt-2 text-muted-foreground text-base">We deploy a version of the platform with your brand, your logo, and your content.</p>
                            </div>
                            <div className="p-6 rounded-lg">
                                <Languages className="h-12 w-12 mx-auto text-primary" />
                                <h3 className="mt-4 text-xl font-bold">Multilingual Content</h3>
                                <p className="mt-2 text-muted-foreground text-base">Our AI can translate your content on the fly, helping you reach a global audience.</p>
                            </div>
                             <div className="p-6 rounded-lg">
                               <Rocket className="h-12 w-12 mx-auto text-primary" />
                               <h3 className="mt-4 text-xl font-bold">Rapid Deployment</h3>
                               <p className="mt-2 text-muted-foreground text-base">Launch your custom-branded learning application in a fraction of the time it would take to build from scratch.</p>
                            </div>
                        </div>

                        <p className="font-semibold text-center text-xl text-foreground">
                            <strong className="text-xl font-bold text-black">If you are an institution with a valuable content library, a certification body, or a corporation looking to enhance your training, we provide the engine to bring your content to life.</strong>
                        </p>
                    </div>
                </CardContent>
                <CardFooter className="flex-col items-center gap-4 pt-6">
                    <div className="p-6 border-2 border-dashed rounded-lg w-full max-w-md text-center">
                        <h3 className="font-bold text-lg mb-2">Request a Demo</h3>
                        <p className="text-muted-foreground mb-4">Let's discuss how our platform can be tailored for you.</p>
                        <Button asChild size="lg">
                          <a href={mailtoHref}>
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Request a Partnership Demo
                          </a>
                        </Button>
                    </div>
                </CardFooter>
            </Card>

            {/* --- NTU Research Pilot Section --- */}
            <Card className="shadow-lg border-2 border-primary overflow-hidden">
                <CardHeader className="text-center bg-primary/5 p-8">
                    <h2 className="font-headline text-3xl font-extrabold tracking-tight text-primary">
                        Democratizing Educational Intelligence
                    </h2>
                    <p className="mt-2 text-lg font-semibold text-foreground/80">
                        An NTU Research Pilot for Multilingual, Adaptive Learning
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Presenter: Gwendalynn Lim Wan Ting (NTU Data Science & AI)
                    </p>
                </CardHeader>
                <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Slide 1 */}
                    <div className="space-y-4 p-6 border rounded-lg bg-background">
                        <h3 className="font-bold text-xl flex items-center gap-2"><span className="text-primary font-mono text-sm">[1]</span>The Research Question</h3>
                        <p className="font-semibold text-primary">Can AI Bridge the "Language-Logic" Gap?</p>
                        <div>
                            <h4 className="font-semibold text-sm">The Context:</h4>
                            <p className="text-sm text-muted-foreground">Many learners struggle not because they lack intelligence, but because the language of an exam creates Cognitive Friction.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm">The Goal:</h4>
                            <p className="text-sm text-muted-foreground">To test if a Multilingual, Adaptive AI System can reduce failure rates in high-stakes exams by diagnosing logic gaps, not just marking answers wrong.</p>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="space-y-4 p-6 border rounded-lg bg-background">
                        <h3 className="font-bold text-xl flex items-center gap-2"><span className="text-primary font-mono text-sm">[2]</span>The Technology</h3>
                        {researchImage && (
                          <div className="aspect-video relative overflow-hidden rounded-md">
                            <Image src={researchImage.imageUrl} alt="Mobile App Interface" layout="fill" className="object-cover" />
                          </div>
                        )}
                        <div>
                            <h4 className="font-semibold text-sm flex items-center gap-2"><Languages className="h-4 w-4 text-primary"/>Semantic Bridging:</h4>
                            <p className="text-sm text-muted-foreground">Our app allows students to toggle languages instantly, ensuring concept comprehension even if they struggle with vocabulary.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm flex items-center gap-2"><Cpu className="h-4 w-4 text-primary"/>Accessibility:</h4>
                            <p className="text-sm text-muted-foreground">A mobile-first design that works on the devices learners already own. No expensive hardware required.</p>
                        </div>
                    </div>
                     {/* Slide 3 */}
                     <div className="space-y-4 p-6 border rounded-lg bg-background">
                        <h3 className="font-bold text-xl flex items-center gap-2"><span className="text-primary font-mono text-sm">[3]</span>The "Empirical Learning" Engine</h3>
                        <p className="font-semibold text-primary">Moving Beyond Pass/Fail.</p>
                        <div>
                            <h4 className="font-semibold text-sm flex items-center gap-2"><BarChart className="h-4 w-4 text-primary"/>The Innovation:</h4>
                            <p className="text-sm text-muted-foreground">The system tracks learning patterns (hesitation time, translation use) to understand *how* a learner is struggling, not just *what* they got wrong. This data feeds the AI, allowing it to know what kind of content to generate next to address specific knowledge gaps.</p>
                        </div>
                        <div>
                           <h4 className="font-semibold text-sm flex items-center gap-2"><Lightbulb className="h-4 w-4 text-primary"/>The Value for Institutions:</h4>
                           <p className="text-sm text-muted-foreground">We provide anonymized Learning Insights that help educators identify where a cohort is struggling, allowing them to stop wasting time on fundamentals and focus on high-level concepts.</p>
                        </div>
                    </div>
                     {/* Slide 4 */}
                     <div className="space-y-4 p-6 border rounded-lg bg-background">
                        <h3 className="font-bold text-xl flex items-center gap-2"><span className="text-primary font-mono text-sm">[4]</span>The Pilot Proposal (Zero Risk)</h3>
                         <div className="mt-4 space-y-3">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                <div>
                                    <h4 className="font-semibold">The Offer:</h4>
                                    <p className="text-sm text-muted-foreground">Free, full-featured access to our platform for a select cohort of your learners or employees.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Our Request:</h4>
                                    <p className="text-sm text-muted-foreground">Permission to use the anonymized, aggregated usage data for an NTU-affiliated Machine Learning Research Project.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                <div>
                                    <h4 className="font-semibold">The Outcome:</h4>
                                    <p className="text-sm text-muted-foreground">Your institution gets a cutting-edge tool for free; we get the data to prove a revolutionary learning model. A true win-win.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
                 <CardFooter className="p-8 pt-0">
                    <Button asChild size="lg" className="w-full">
                        <a href="mailto:gwen@evecount.com?subject=NTU%20Research%20Pilot%20Inquiry&body=Hello%20Gwen,%0D%0A%0D%0AMy%20name%20is%20[Your%20Name]%20from%20[Your%20Institution].%20I'm%20interested%20in%20learning%20more%20about%20the%20NTU%20Research%20Pilot%20program.%0D%0A%0D%0AThank%20you.">
                            <TestTube2 className="mr-2 h-5 w-5" /> Inquire About the Research Pilot
                        </a>
                    </Button>
                </CardFooter>
            </Card>


            <Card className="shadow-lg">
                 <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                        <Lightbulb /> A New Model for Institutions
                    </CardTitle>
                    <CardDescription className="text-foreground/80 max-w-3xl mx-auto pt-2">
                       Raise your academic standards and create new revenue streams. Stop wasting time on fundamentals.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="prose prose-lg max-w-none mx-auto text-foreground">
                        <p>
                            Our white-label solution offers more than just a teaching tool; it's a strategic asset. By integrating our AI-powered platform as a preparatory step, you can mandate a higher baseline of knowledge for your students.
                        </p>
                        <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                            Think of it as the "LSAT for everything." You set the standard; we provide the scalable tool for students to meet it.
                        </blockquote>
                        <p>
                            This allows your faculty to stop wasting valuable time on fundamentals and focus on advanced, high-level instruction. It also creates a new B2C revenue opportunity, as prospective students invest in the preparatory tool required to join your elite program.
                        </p>
                    </div>
                </CardContent>
                <CardFooter className="flex-col items-center gap-4 pt-6">
                    <p className="text-center text-muted-foreground">If you're an expert who builds your own tools, we speak the same language. Let's talk.</p>
                     <Button asChild size="lg">
                        <a href="mailto:gwen@evecount.com?subject=Custom%20Training%20App%20Inquiry&body=Hello,%0D%0A%0D%0AMy%20name%20is%20[Your%20Name]%20from%20[Your%20Organization].%20I'm%20interested%20in%20turning%20my%20curriculum%20into%20a%20custom%20app%20for%20my%20team.%0D%0A%0D%0AThank%20you.">
                            <Mail className="mr-2 h-4 w-4" />
                            Inquire About a White-Label Solution
                        </a>
                    </Button>
                </CardFooter>
            </Card>

            <Card className="shadow-lg border-2 border-dashed border-primary bg-primary/5">
                <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-3 font-headline text-2xl font-bold text-primary tracking-tighter">
                        <Wand2 /> See The Engine in Action
                    </CardTitle>
                    <CardDescription className="text-foreground/80 max-w-2xl mx-auto pt-2">
                        Want to see how we turn text into a worksheet? Try our ML Sandbox to experience the core technology that powers our white-label solutions.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <Button asChild>
                        <Link href="/demo">
                            Go to ML Sandbox
                        </Link>
                    </Button>
                </CardContent>
            </Card>

            <div className="text-center mt-8">
                 <Button asChild variant="ghost">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </main>
  );
}
