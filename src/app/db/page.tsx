
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Database, Share2, ShieldCheck, Fingerprint, GitBranch, BrainCircuit, BarChart, Cpu } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";


const saasDbmlCode = `// Database Markup Language (DBML) for Pass-Exams Platform
// This diagram illustrates our user-centric, sandboxed data model.

// The 'users' table is the root for all user-specific data.
// The 'id' is the Firebase Auth UID, acting as the primary key.
Table users {
  id varchar [primary key, note: 'Firebase Auth UID']
  email varchar [unique, not null]
  displayName varchar
  photoURL varchar
  createdAt timestamp
  subscriptionStatus varchar
  isCustomer boolean
}

// A sub-collection under 'users'.
// Stores custom quizzes created by a user.
Table exams {
  id varchar [primary key, note: 'Auto-generated ID']
  user_id varchar [not null, ref: > users.id]
  title varchar [not null]
  description text
  public boolean [default: false]
  createdAt timestamp
}

// A sub-collection under 'users'.
// Stores questions a user has bookmarked for review.
Table bookmarkedQuestions {
  question_id varchar [primary key, note: 'The ID of the bookmarked question']
  user_id varchar [not null, ref: > users.id]
  quiz_id varchar [not null]
  createdAt timestamp
}
`;

const enterpriseDbmlCode = `// --- EVE COUNT: ENTERPRISE COGNITIVE ARCHITECTURE ---

// 1. TENANCY & ACCESS CONTROL
Table organizations {
  id varchar [pk]
  name varchar
  slug varchar [note: 'For white-label URLs: pass-exams.com/org-slug']
  api_key_hash varchar [note: 'For secure QKD seed extraction']
  created_at timestamp
}

Table users {
  id varchar [pk, note: 'Firebase Auth UID']
  org_id varchar [ref: > organizations.id]
  email varchar [unique]
  role varchar [note: 'student, tutor, institution_admin']
  last_login timestamp
}

// 2. CONTENT ENGINE (MCQ & KPC WRITTEN)
Table exams {
  id varchar [pk]
  org_id varchar [ref: > organizations.id]
  title varchar [note: 'RES5, M8, M9, HI, etc.']
  is_white_labeled boolean [default: true]
  created_at timestamp
}

Table questions {
  id varchar [pk]
  exam_id varchar [ref: > exams.id]
  topic_tag varchar [note: 'e.g., Fiduciary Standard']
  question_type varchar [note: 'MCQ or WRITTEN']
  content jsonb [note: 'Question text, options, and rationales']
  kpc_rubric jsonb [note: 'Key Point Checklist for written synthesis']
}

// 3. THE ALPHA LOOP (MASTERY DATA)
Table bookmarks {
  id varchar [pk]
  user_id varchar [ref: > users.id]
  question_id varchar [ref: > questions.id]
  weighting_modifier integer [default: 5, note: 'The Alpha Loop weight multiplier']
  created_at timestamp
}

// 4. COGNITIVE BIOMETRICS (THE 7 VARIABLES)
// This table captures the raw entropy for the PII/QKD seed
Table cognitive_interactions {
  id varchar [pk]
  user_id varchar [ref: > users.id]
  question_id varchar [ref: > questions.id]
  
  // RAW DATA FOR THE 7 METRICS
  latency_ms integer [note: 'Metric 1: Decision Latency']
  pathing_data jsonb [note: 'Metric 2: Heuristic Pathing patterns']
  dwell_time_ms integer [note: 'Metric 3: Rationale Dwell-Time']
  semantic_variance float [note: 'Metric 4: Distance from KPC vocabulary']
  correction_count integer [note: 'Metric 5: Self-Correction Pulse/Backspacing']
  session_timestamp timestamp [note: 'Metric 7: Used to calculate Stamina Decay']
}

// 5. IDENTITY & SECURITY (THE SEED VAULT)
Table cognitive_profiles {
  user_id varchar [pk, ref: - users.id]
  intellectual_topography jsonb [note: 'Metric 6: 3D map of mastery valleys']
  stamina_decay_constant float [note: 'The calculated physiological decay slope']
  
  // THE OUTPUTS
  cognitive_fingerprint_hash varchar [note: 'Unique non-spoofable PII']
  qkd_entropy_seed varchar [note: 'The generated cryptographic seed']
  last_updated timestamp
}

Table progress_logs {
  id varchar [pk]
  user_id varchar [ref: > users.id]
  exam_id varchar [ref: > exams.id]
  score float
  is_mastery_achieved boolean
  completed_at timestamp
}

// --- Relationships ---
Ref: organizations.id < users.org_id
Ref: organizations.id < exams.org_id
Ref: users.id < bookmarks.user_id
Ref: users.id < cognitive_interactions.user_id
Ref: users.id < progress_logs.user_id
Ref: questions.id < bookmarks.question_id
Ref: questions.id < cognitive_interactions.question_id
Ref: exams.id < questions.exam_id
Ref: exams.id < progress_logs.exam_id
`;

const cognitiveVariables = [
    { name: 'Decision Latency Delta', metric: 'Processing Speed', mechanism: 'The millisecond difference in response time between "Bookmarked" (hard) vs. "Non-Bookmarked" (easy) questions.' },
    { name: 'Heuristic Pathing (MCQ)', metric: 'Elimination Logic', mechanism: 'Tracking mouse/touch movement patterns across the 4 MCQ options before selection.' },
    { name: 'Rationale Dwell-Time', metric: 'Receptivity Index', mechanism: 'Time spent reading the "Teaching Rationale" vs. the complexity (word count) of the text.' },
    { name: 'Semantic KPC Variance', metric: 'Linguistic Fingerprint', mechanism: "In text answers, measuring the linguistic distance between the user's vocabulary and the KPC (Key Point Checklist)." },
    { name: 'The Self-Correction Pulse', metric: 'Metacognitive Monitoring', mechanism: 'Frequency and timing of "backspacing" or editing text-based answers before submission.' },
    { name: 'Topic Gravity (Bookmark Ratio)', metric: 'Intellectual Topography', mechanism: "The specific distribution of bookmarks across 100+ topic tags." },
    { name: 'Stamina Decay Slope', metric: 'Neuro-Endurance', mechanism: 'The rate at which accuracy and latency change over a 2-hour session.' }
];

export default function DatabaseArchitecturePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-24 bg-muted/20">
      <div className="w-full max-w-4xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Platform Architecture
            </h1>
            <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                An overview of our scalable, privacy-by-design data model, from individual SaaS to a full Enterprise solution.
            </p>
        </div>

        <Card className="shadow-lg">
            <CardHeader className="p-8">
                <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                   <GitBranch /> From SaaS to Enterprise
                </CardTitle>
                 <CardDescription className="text-foreground/80 max-w-3xl pt-2 text-base">
                    Our platform is built on a dual architecture that gracefully scales from serving individual users to powering large institutions. The diagrams below illustrate this evolution, enforced at every level by secure backend rules.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-12">
                 <Tabs defaultValue="saas">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="saas">Individual / SaaS Model</TabsTrigger>
                        <TabsTrigger value="enterprise">Enterprise Architecture</TabsTrigger>
                    </TabsList>
                    <TabsContent value="saas" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><ShieldCheck /> SaaS Model: User-Centric Sandbox</CardTitle>
                                <CardDescription>This model is designed for individual teachers, parents, and learners. Data is strictly partitioned by user.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-gray-900 text-white rounded-lg p-4">
                                    <pre className="text-sm whitespace-pre-wrap"><code>{saasDbmlCode}</code></pre>
                                </div>
                                <Button asChild variant="outline" className="mt-4 w-full"><a href="https://dbdiagram.io/d" target="_blank" rel="noopener noreferrer"><Share2 className="mr-2 h-4 w-4" />View Interactive Diagram</a></Button>
                                <div className="mt-4 prose dark:prose-invert max-w-none text-muted-foreground">
                                    <p>The core principle here is **data isolation**. Each user's data—their custom exams and bookmarks—exists in a secure "sandbox" under their unique user ID. This is enforced by `firestore.rules`, making it impossible for one user to access another's data.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="enterprise" className="mt-6">
                        <Card>
                             <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Database /> Enterprise Model: Multi-Tenant Cognitive Architecture</CardTitle>
                                <CardDescription>This is the full architecture, designed for institutional partners. It introduces organization-level tenancy, role-based access, and our proprietary Cognitive Biometrics engine.</CardDescription>
                            </CardHeader>
                             <CardContent>
                                <div className="bg-gray-900 text-white rounded-lg p-4">
                                    <pre className="text-sm whitespace-pre-wrap"><code>{enterpriseDbmlCode}</code></pre>
                                </div>
                                 <Button asChild variant="outline" className="mt-4 w-full"><a href="https://dbdiagram.io/d" target="_blank" rel="noopener noreferrer"><Share2 className="mr-2 h-4 w-4" />View Interactive Diagram</a></Button>
                                <div className="mt-4 prose dark:prose-invert max-w-none text-muted-foreground">
                                    <p>The enterprise model introduces `organizations` as a top-level entity, creating a **multi-tenant structure**. Users are assigned roles (`student`, `tutor`, `admin`) within an organization, and security rules enforce access based on these roles. This architecture also includes the `cognitive_interactions` table, which captures the raw data for our 7 Cognitive Variables, turning learning metrics into a secure, high-value data asset.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
                
                <Separator />

                 <div>
                    <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                       <BrainCircuit /> Architectural Evolution: When to Use a Vector Database
                    </CardTitle>
                    <CardDescription className="text-foreground/80 max-w-3xl pt-2 text-base">
                        Our architecture is designed to evolve with our data needs. Here’s when and why a Vector DB becomes essential.
                    </CardDescription>
                    <div className="mt-6 space-y-6">
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">1</div>
                                <div className="h-full w-px bg-border"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold">Phase 1: Current State (NoSQL Document DB)</h4>
                                <p className="text-sm text-muted-foreground">Our current model uses Firestore, a NoSQL database perfect for storing structured data like user profiles, exam metadata, and bookmarks. It answers questions like: "Who is this user?" or "What did they bookmark?".</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                             <div className="flex flex-col items-center">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">2</div>
                                <div className="h-full w-px bg-border"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold">Phase 2: The Tipping Point (Semantic Search)</h4>
                                <p className="text-sm text-muted-foreground">The architecture must evolve when we need to understand the *meaning* of unstructured data, like a student's written answer. This is the trigger for **Cognitive Variable #4: Semantic KPC Variance**. We need to measure how "semantically similar" a student's answer is to an ideal answer.</p>
                            </div>
                        </div>
                         <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">3</div>
                            </div>
                            <div>
                                <h4 className="font-semibold">Phase 3: The Vector Database Solution</h4>
                                <p className="text-sm text-muted-foreground">To solve this, we convert text into mathematical vectors (embeddings). A **Vector Database** is purpose-built to store these vectors and perform ultra-fast similarity searches. It allows us to ask: "How close in meaning is this student's answer to our expert-defined key points?" This measurement becomes a core part of their unique Cognitive ID.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-12">
                     <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                       <Fingerprint /> Cognitive Biometrics: A New Data Asset
                    </CardTitle>
                    <CardDescription className="text-foreground/80 max-w-3xl pt-2 text-base">
                        Our platform doesn't just track correct or incorrect answers. It measures *how* a user thinks, creating a unique "Cognitive Signature" from seven behavioral data points. This turns learning metrics into a new class of high-entropy data with applications in digital identity and security.
                    </CardDescription>

                    <div className="mt-6 rounded-lg border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[25%] font-bold">Cognitive Variable</TableHead>
                                    <TableHead className="w-[25%] font-bold">Neural/Pedagogical Metric</TableHead>
                                    <TableHead className="w-[50%] font-bold">Measurement Mechanism</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cognitiveVariables.map((variable) => (
                                    <TableRow key={variable.name}>
                                        <TableCell className="font-medium">{variable.name}</TableCell>
                                        <TableCell className="text-muted-foreground">{variable.metric}</TableCell>
                                        <TableCell>{variable.mechanism}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="mt-6 prose dark:prose-invert max-w-none text-muted-foreground">
                        <h4>Application: The "Sovereign Learner" Identity</h4>
                        <p>By measuring these metrics, our platform can verify a user not by what they know, but by *how* they know it. The unique combination of these cognitive variables forms a "Cognitive ID"—a high-entropy seed that is statistically unique to an individual's learning process. This data asset, owned by our institutional partners, has massive implications for high-stakes certification, identity verification, and next-generation data security.</p>
                    </div>
                </div>


                 <div className="text-center mt-12 border-t pt-8">
                     <Button asChild>
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
      </div>
    </main>
  );
}

    