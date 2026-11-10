'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HeartHandshake, Mail, TrendingUp, Users, MessageCircle, School, Palette, UploadCloud, Rocket, Lightbulb, ShieldCheck, Wand2, TestTube2, Languages, Cpu, BarChart, CheckCircle, Building, Gift } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function FundraisingPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'ngo_hero');
    const mailtoHref = "mailto:gwen@evecount.com?subject=Inquiry%20about%20NGO%20Fundraising%20Platform&body=Hello,%0D%0A%0D%0AMy%20organization%20is%20interested%20in%20learning%20more%20about%20using%20your%20platform%20as%20a%20fundraising%20and%20educational%20tool.%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]%0D%0A[Your%20Organization]";

    return (
        <main className="flex min-h-screen flex-col items-center pt-16 bg-muted/20">
            <section className="w-full bg-background relative">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
                    <div className="flex flex-col justify-center p-8 lg:p-16">
                        <div className="max-w-md">
                            <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                                Transform Your Cause into an Interactive Campaign
                            </h1>
                            <p className="mt-4 text-md text-foreground/80">
                                Our AI-powered platform turns your research, reports, and advocacy materials into engaging educational experiences that drive both awareness and donations.
                            </p>
                            <Button asChild size="lg" className="mt-6">
                                <a href={mailtoHref}>
                                    <HeartHandshake className="mr-2 h-5 w-5" />
                                    Book a Consultation
                                </a>
                            </Button>
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
                        <HeartHandshake className="h-16 w-16 mx-auto text-primary" />
                        <CardTitle className="font-headline text-3xl font-bold text-primary tracking-tighter mt-4">A New Fundraising Vehicle for the Digital Age</CardTitle>
                        <CardDescription className="text-foreground/80 max-w-3xl mx-auto pt-2 text-base">
                            Move beyond static donation buttons. Engage your supporters' minds to capture their hearts and their support.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                        <div className="prose prose-lg max-w-none mx-auto text-foreground">
                            <p>
                                For non-profits and NGOs, public education is paramount. But traditional methods like reports and articles are passive. What if you could turn your most important findings into an interactive quiz or a guided learning module?
                            </p>
                            <p>
                                Our platform allows you to do just that. We provide the technology to transform your advocacy materials into a powerful tool for engagement that also serves as an innovative fundraising vehicle.
                            </p>

                            <h3 className="text-primary">How It Works: The "Learn-to-Donate" Model</h3>
                            <ol>
                                <li><strong>You Provide the Content:</strong> Your organization's research, impact reports, or educational materials serve as the "source of truth."</li>
                                <li><strong>We Build the Experience:</strong> Our AI engine ingests your content and generates a custom-branded, interactive quiz or micro-learning module.</li>
                                <li><strong>You Engage & Fundraise:</strong> Deploy the module on your website. Use it as a lead magnet to grow your mailing list, or as a direct fundraising tool—offer a basic quiz for free and unlock a more advanced module for supporters who donate.</li>
                            </ol>

                            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                                <div className="p-6 rounded-lg">
                                    <TrendingUp className="h-12 w-12 mx-auto text-primary" />
                                    <h4 className="mt-4 text-xl font-bold">Deeper Engagement</h4>
                                    <p className="mt-2 text-muted-foreground text-base">Turn passive readers into active participants who truly understand the importance of your work.</p>
                                </div>
                                <div className="p-6 rounded-lg">
                                    <Gift className="h-12 w-12 mx-auto text-primary" />
                                    <h4 className="mt-4 text-xl font-bold">Innovative Fundraising</h4>
                                    <p className="mt-2 text-muted-foreground text-base">Create a compelling new reason for supporters to donate, unlocking exclusive educational content.</p>
                                </div>
                                <div className="p-6 rounded-lg">
                                    <BarChart className="h-12 w-12 mx-auto text-primary" />
                                    <h4 className="mt-4 text-xl font-bold">Measure Your Impact</h4>
                                    <p className="mt-2 text-muted-foreground text-base">Gain insights into which parts of your message are resonating most with your audience, helping you refine your advocacy.</p>
                                </div>
                                <div className="p-6 rounded-lg">
                                    <Rocket className="h-12 w-12 mx-auto text-primary" />
                                    <h4 className="mt-4 text-xl font-bold">Scale Your Volunteers</h4>
                                    <p className="mt-2 text-muted-foreground text-base">Use the platform to create standardized, remote training modules for new volunteers, allowing you to expand your reach and onboard new team members effectively.</p>
                                </div>
                            </div>
                            
                            <p className="font-semibold text-center text-xl text-foreground">
                                Let's work together to build a campaign that not only educates the public but also fuels your mission.
                            </p>
                        </div>
                    </CardContent>
                     <CardFooter className="flex-col items-center gap-4 p-8 pt-0">
                        <div className="p-6 border-2 border-dashed rounded-lg w-full max-w-md text-center">
                            <h3 className="font-bold text-lg mb-2">Ready to Get Started?</h3>
                            <p className="text-muted-foreground mb-4">
                                Contact us today for a free consultation and let's explore how we can tailor this platform for your cause.
                            </p>
                            <Button asChild size="lg">
                            <a href={mailtoHref}>
                                <Mail className="mr-2 h-4 w-4" />
                                Inquire About NGO Solutions
                            </a>
                            </Button>
                        </div>
                    </CardFooter>
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
