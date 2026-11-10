
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check, MessageCircle, User, Users, Building, ArrowLeft, FileText, Bot, Milestone, ClipboardCheck, Rocket, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";


const tuitionCenterProcess = [
  {
    stage: 'Stage 1: Discovery Call',
    title: 'Initial Consultation (30 mins)',
    description: "A short, focused call to understand your center's curriculum, student base, and business goals. We'll discuss how our AI can transform your existing teaching materials.",
    deliverables: ['Understanding of your core content', 'Initial assessment of platform fit'],
    icon: MessageCircle,
  },
  {
    stage: 'Stage 2: Scoping & Content Review',
    title: 'Curriculum Analysis',
    description: "We conduct a high-level review of a sample of your curriculum (e.g., one subject, a few chapters) to determine the scope of the project and the effort required for content ingestion and AI model tuning.",
    deliverables: ['Content structure analysis', 'Identification of key learning objectives'],
    icon: ClipboardCheck,
  },
  {
    stage: 'Stage 3: Formal Proposal',
    title: 'Proposal & Phased Estimate',
    description: "Based on the scope, we provide a detailed proposal outlining the project timeline, deliverables, and a phased cost estimate (e.g., setup fee, monthly licensing).",
    deliverables: ['Detailed Statement of Work (SOW)', 'Transparent cost breakdown', 'Project timeline'],
    icon: FileText,
  },
  {
    stage: 'Stage 4: Deployment',
    title: 'Platform Go-Live',
    description: "Upon agreement, we begin the white-labeling and deployment process. Your custom-branded platform is typically ready within a few weeks.",
    deliverables: ['Branded learning application', 'Admin dashboard access', 'Staff onboarding session'],
    icon: Rocket,
  },
];

const educationalInstituteProcess = [
  {
    stage: 'Stage 1: Stakeholder Workshop',
    title: 'Deep-Dive Scoping Session',
    description: "A comprehensive workshop with key stakeholders (e.g., department heads, IT, curriculum designers) to map out your institution's strategic goals, technical requirements, and pedagogical framework.",
    deliverables: ['Documented strategic objectives', 'Technical integration requirements'],
    icon: Users,
  },
  {
    stage: 'Stage 2: RFP & Solution Design',
    title: 'Request for Proposal (RFP)',
    description: 'Following the workshop, your institution issues a formal RFP. We respond with a detailed solution design document that addresses every requirement, from security and data privacy to custom feature development.',
    deliverables: ['Formal RFP response', 'Detailed technical architecture', 'Security & compliance documentation'],
    icon: FileText,
  },
  {
    stage: 'Stage 3: Pilot Program',
    title: 'Proof-of-Concept (POC) Deployment',
    description: "We recommend a limited-scope pilot program (e.g., for a single department or course) to validate the platform's effectiveness and gather empirical data within your environment before a full-scale rollout.",
    deliverables: ['Live POC application', 'User feedback reports', 'Performance analytics'],
    icon: Milestone,
   },
  {
    stage: 'Stage 4: Enterprise Rollout',
    title: 'Full-Scale Implementation & Support',
    description: "After a successful pilot, we proceed with the full enterprise-wide deployment, including data migration, faculty training, and the establishment of a dedicated support channel.",
    deliverables: ['Campus-wide platform access', 'Custom API integrations', 'Dedicated support agreement'],
    icon: Rocket,
  },
];

const pricingTiers = [
  {
    type: 'Tuition Center',
    population: '1 - 50 Students',
    fee: '~S$5,000 / year',
    revenue: 'S$6,000',
    net: 'S$1,000',
  },
  {
    type: 'Tuition Center',
    population: '51 - 200 Students',
    fee: '~S$12,000 / year',
    revenue: 'S$24,000',
    net: 'S$12,000',
  },
  {
    type: 'Educational Institute',
    population: '201 - 500+ Students',
    fee: 'Custom',
    revenue: '> S$60,000',
    net: 'Contact Us',
  },
];

export default function PricingPage() {
  const mailtoHref = (tier: string) => `mailto:gwen@evecount.com?subject=Inquiry%20for%20${tier}%20Partnership&body=Hello,%0D%0A%0D%0AI'm%20interested%20in%20learning%20more%20about%20your%20partnership%20process%20for%20a%20${tier}.%0D%0A%0D%0AThank%20you.`;

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-24 bg-muted/20">
      <div className="w-full max-w-5xl pt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
            Our Partnership Process
          </h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            A transparent, stage-based approach to building your custom AI learning solution.
          </p>
        </div>

        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl font-bold">
              <DollarSign className="h-6 w-6 text-primary" />
              Pricing & Revenue Estimates
            </CardTitle>
            <CardDescription>
              The following table provides an estimate of our platform fees and your potential annual revenue. These are illustrative figures based on a sample student subscription price of S$10/month (S$120/year).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Partner Type</TableHead>
                    <TableHead>Student Population</TableHead>
                    <TableHead>Est. Annual Platform Fee</TableHead>
                    <TableHead>Potential Annual Revenue</TableHead>
                    <TableHead className="text-right font-bold text-primary">Potential Net Revenue</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingTiers.map((tier, index) => (
                    <TableRow key={index} className={tier.type === 'Educational Institute' ? 'bg-primary/5' : ''}>
                      <TableCell className="font-medium">{tier.type}</TableCell>
                      <TableCell>{tier.population}</TableCell>
                      <TableCell>{tier.fee}</TableCell>
                      <TableCell>{tier.revenue}</TableCell>
                      <TableCell className="text-right font-bold text-primary">{tier.net}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              *All figures are estimates. Final pricing will be provided in a formal proposal after consultation.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="tuition" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tuition">For Tuition Centers</TabsTrigger>
                <TabsTrigger value="institute">For Educational Institutes</TabsTrigger>
            </TabsList>
            <TabsContent value="tuition" className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline text-2xl font-bold">
                            <Users className="h-6 w-6 text-primary" />
                            Tuition Center Engagement Model
                        </CardTitle>
                        <CardDescription>A streamlined process for smaller teams and focused curricula.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {tuitionCenterProcess.map(item => (
                            <div key={item.stage} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div className="h-full w-px bg-border my-2"></div>
                                </div>
                                <div className="pb-8">
                                    <h4 className="font-semibold text-primary">{item.stage}</h4>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                    <div className="mt-3">
                                        <h5 className="text-xs font-semibold text-muted-foreground uppercase">Key Deliverables</h5>
                                        <ul className="text-sm mt-1 space-y-1">
                                            {item.deliverables.map(d => <li key={d} className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> {d}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="institute" className="mt-6">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline text-2xl font-bold">
                            <Building className="h-6 w-6 text-primary" />
                            Educational Institute Engagement Model
                        </CardTitle>
                        <CardDescription>A formal process for large-scale, enterprise-level deployments.</CardDescription>
                    </CardHeader>
                     <CardContent className="space-y-6">
                        {educationalInstituteProcess.map(item => (
                             <div key={item.stage} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div className="h-full w-px bg-border my-2"></div>
                                </div>
                                <div className="pb-8">
                                    <h4 className="font-semibold text-primary">{item.stage}</h4>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                     <div className="mt-3">
                                        <h5 className="text-xs font-semibold text-muted-foreground uppercase">Key Deliverables</h5>
                                        <ul className="text-sm mt-1 space-y-1">
                                            {item.deliverables.map(d => <li key={d} className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> {d}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>

        <Separator className="my-12" />

        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                   <FileText /> Sample RFP Submission Outline
                </CardTitle>
                 <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                   For institutional partners, our formal proposal addresses key technical and business requirements. This is a sample of what you can expect.
                 </CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
                <h4>1. Executive Summary</h4>
                <p>A high-level overview of our proposed solution, aligning our platform's capabilities with your institution's strategic objectives for digital learning and curriculum monetization.</p>
                
                <h4>2. Technical Solution</h4>
                <ul>
                    <li><strong>White-Label Platform Architecture:</strong> Details on the custom-branded web application, hosting environment (GCP/Firebase), and scalability.</li>
                    <li><strong>Content Ingestion Pipeline:</strong> Our process for transforming your source materials (PDFs, DOCX, etc.) into structured, interactive content using our AI models.</li>
                    <li><strong>AI & Machine Learning Framework:</strong> An explanation of our "Proprietary by Process" model, ensuring AI safety, zero hallucination, and content-grounded question generation.</li>
                </ul>

                <h4>3. Data Security & IP Ownership</h4>
                <ul>
                    <li><strong>Data Sovereignty:</strong> Confirmation that your institution retains 100% ownership of your proprietary curriculum and all generated user learning data.</li>
                    <li><strong>PDPA & GDPR Compliance:</strong> How our platform adheres to data privacy regulations.</li>
                    <li><strong>Cognitive Biometrics as a Data Asset:</strong> An overview of how user interaction data can be anonymized and aggregated to create a valuable, proprietary data asset for future AI/ML research.</li>
                </ul>

                <h4>4. Implementation Plan & Timeline</h4>
                <p>A phased rollout plan, from initial setup and content migration to a pilot program and full enterprise deployment, including key milestones and deliverables.</p>

                <h4>5. Commercials</h4>
                <p>A transparent breakdown of costs, including one-time setup fees, annual licensing costs, and pricing for optional services like custom feature development or dedicated support.</p>
            </CardContent>
             <CardFooter className="flex-col items-center gap-4 pt-6">
                <p className="text-center text-muted-foreground">Ready to start the conversation?</p>
                <Button asChild size="lg">
                  <a href={mailtoHref('Institutional')}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Request a Consultation
                  </a>
                </Button>
            </CardFooter>
        </Card>

        <div className="text-center mt-16">
          <Button asChild variant="ghost">
            <Link href="/partnership">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Partnerships
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
