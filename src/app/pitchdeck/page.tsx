
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
    SheetFooter,
} from '@/components/ui/sheet';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Building, Sparkles, FileText, Bot, BrainCircuit, ShieldCheck, Handshake, TestTube2, UploadCloud, Rocket, Target, Scale, Briefcase, TrendingUp, Send, Loader2, MessageCircle, Volume2, BarChart, Cpu, GitBranch, PlayCircle, Database, FileQuestion, HelpCircle, Users, DollarSign, Fingerprint } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { marked } from 'marked';
import { cn } from '@/lib/utils';
import { generateAudioForText } from '@/lib/ai-actions';


const slideData = [
  {
    slideNumber: 1,
    layout: 'intro',
    title: 'Pass-Exams: An Investment Proposal',
    content: "A White-Label AI Platform for Institutional Learning & Data Asset Creation.",
    transcript: "Welcome. This presentation outlines our company's vision, technology, and the significant market opportunity for our AI-powered learning platform. We are seeking strategic partners to join us in redefining digital education.",
    contact: {
        name: "Gwendalynn Lim",
        email: "gwen@evecount.com",
    },
    image: PlaceHolderImages.find(p => p.id === 'quiz_exam_1')
  },
  {
    slideNumber: 2,
    layout: 'video',
    icon: PlayCircle,
    title: 'A Message from the Founder',
    content: "Before we dive in, our founder Gwen wants to share the vision behind this project directly with you. Her passion for education and technology is the driving force behind everything we do.",
    transcript: "This is where I speak from the heart, explaining why I built this. It's about honoring my family's legacy in education and creating the tools I wish I had. This isn't just a business; it's a mission to empower learners by making expert knowledge accessible and interactive.",
    videoPlaceholder: true,
  },
  {
    slideNumber: 3,
    layout: 'default',
    icon: Target,
    title: 'The Problem',
    content: 'The **$7 Trillion education and corporate training market** is saturated with passive content (PDFs, videos) that leads to fragile knowledge and low ROI. Institutions lack the tools to transform their proprietary expertise into scalable, interactive learning experiences that build measurable capability.',
    transcript: "The challenge we solve is universal. The $7 trillion education and training market is filled with static, passive content. This leads to fragile knowledge and a poor return on investment. Organizations have valuable content, but they lack the tools to turn it into an effective, interactive experience that actually builds skill.",
  },
  {
    slideNumber: 4,
    layout: 'default',
    icon: Sparkles,
    title: 'The Solution',
    content: "We provide a **B2B white-label AI platform** that transforms an organization's proprietary content into a scalable, interactive learning application. We don't create content; we make our partners' content valuable, profitable, and into a defensible data asset.",
    transcript: "Our solution is an 'Application Learning Engine.' We are a B2B SaaS company providing a white-label AI platform that transforms our partners' static content into a fully interactive, custom-branded learning application. This allows them to create new revenue streams and build proprietary data assets.",
    button: {
      href: "/features",
      text: "See Platform Features",
      icon: Sparkles
    },
  },
   {
    slideNumber: 5,
    layout: 'default',
    icon: DollarSign,
    title: 'Market Size (TAM, SAM, SOM)',
    content: `
- **TAM (Total Addressable Market):** The $7T global education & corporate training market.
- **SAM (Serviceable Addressable Market):** The $360B+ corporate eLearning and certification market, where our B2B model is a direct fit.
- **SOM (Serviceable Obtainable Market):** We are initially targeting a $1B segment of professional certification bodies and specialized corporate training in finance and tech.`,
    transcript: "The market is enormous. The total global education market is $7 trillion. Our immediate focus is the corporate eLearning and professional certification space, a serviceable market of over $360 billion. We are initially targeting a $1 billion segment of this market, focusing on high-value professional certifications where our model has already been validated.",
  },
  {
    slideNumber: 6,
    layout: 'image-right',
    icon: Bot,
    title: 'The Technology: Our Moat',
    content: '**Proprietary by Process:** Our system has a critical safety feature: it cannot "think" without resources. It only generates content from the source material a partner provides, making it a safe, predictable, and legally-defensible engine where each partner builds their own valuable data asset.',
    transcript: "Our core technology is proprietary by its process. We've built an AI with a fundamental constraint: it cannot 'think' without being given resources. This makes the engine incredibly safe—it cannot 'hallucinate' facts—and creates a clean legal framework for IP ownership. Our partners own their content; we provide the engine that makes it valuable.",
    button: {
      href: "/whitepaper",
      text: "Read IP & Data Strategy",
      icon: ShieldCheck
    },
    image: PlaceHolderImages.find(p => p.id === 'power_bundle')
  },
  {
    slideNumber: 7,
    layout: 'default',
    icon: GitBranch,
    title: 'How It Works: The Empirical Learning Engine',
    content: 'A teacher uploads one standardized exam. After 50 students take it, our engine analyzes their performance patterns—not their identities—and automatically generates **50 new, unique follow-up exams**, each one tailored to an individual student\'s specific knowledge gaps. This enables targeted intervention at scale.',
    transcript: "Here is our engine in action. A teacher can upload a single, standardized exam. Our system doesn't just return 50 grades. It analyzes each student's performance and automatically generates 50 new, unique practice exams for the next learning cycle, each personalized to that student's knowledge gaps. This allows educators to provide targeted, automated intervention at scale.",
    button: {
      href: "/demo",
      text: "Try the Live Demo",
      icon: PlayCircle
    }
  },
  {
    slideNumber: 8,
    layout: 'image-left',
    icon: Database,
    title: 'The Result: A New Data Asset Class',
    content: "Every interaction on the platform generates structured, high-quality data on learning patterns. This corpus becomes a **valuable, proprietary data asset for the institution**, perfect for training future, more advanced AI models and providing deep insights into curriculum effectiveness.",
    transcript: "This data generation creates a powerful flywheel effect. Our partners aren't just licensing software; they're building a long-term, strategic asset. Every quiz taken enriches their own proprietary dataset, which is the ideal fuel for a new generation of AI models, turning a simple content library into an appreciating data asset that compounds in value.",
    image: PlaceHolderImages.find(p => p.id === 'quiz_m9a_exam')
  },
   {
    slideNumber: 9,
    layout: 'default',
    icon: Fingerprint,
    title: 'Cognitive Biometrics: The Ultimate Data Moat',
    content: "We track 7 unique behavioral metrics—like **Decision Latency**, **Heuristic Pathing**, and **Stamina Decay**—to create a 'Cognitive Signature' for each learner. This isn't just PII; it's a high-entropy data fingerprint of how a user thinks. This becomes a new, un-spoofable form of identity, turning a partner's content into a next-generation security and data asset.",
    transcript: "This leads us to our ultimate data moat: Cognitive Biometrics. We measure 7 unique learning behaviors to create a 'Cognitive Signature.' This is a new form of PII based not on what a user knows, but *how* they know it. This Cognitive ID is a high-entropy data asset with massive implications for digital identity, security, and creating truly personalized AI.",
    button: {
      href: "/db",
      text: "View Technical Architecture",
      icon: Database
    },
  },
  {
    slideNumber: 10,
    layout: 'default',
    icon: DollarSign,
    title: 'Business Model',
    content: '**High-Margin B2B SaaS:** Our revenue comes from annual license fees from institutional partners who use our white-label engine to power their own branded learning applications. We provide a scalable solution that allows them to create new revenue streams without the multi-million dollar cost of an in-house ML team.',
    transcript: "Our business model is a classic, high-margin B2B SaaS play. We license our white-label platform to institutional partners—corporations, certification bodies, and universities—for an annual fee. They get a custom-branded, AI-powered application without the multi-million dollar cost of building an in-house ML team."
  },
    {
    slideNumber: 11,
    layout: 'default',
    icon: Users,
    title: 'Ideal Client Profile',
    content: 'Our ideal client is an **elite institution with a unique body of proprietary knowledge.** This includes:\n\n- **Professional Certification Bodies**\n- **Research Universities**\n- **Global Corporations** with deep internal expertise for training & compliance.',
    transcript: "Our Ideal Client is an institution like Princeton, Oxford, or the University of Delhi. They possess a unique, world-class body of knowledge and a distinct way of thinking. Our platform allows them to create a proprietary AI that learns from their content and 'thinks' like their graduates, turning their curriculum into an intelligent, scalable data asset."
  },
  {
    slideNumber: 12,
    layout: 'default',
    icon: Scale,
    title: 'Competitive Landscape',
    content: `Our competitive advantage is clear. We occupy a unique "Blue Ocean" space by being a **B2B White-Label Engine** that uses **Safe, Content-Grounded AI**.

| | **Generic B2C Platform** (Red Ocean) | **B2B White-Label Engine** (Blue Ocean) |
| :--- | :--- | :--- |
| **High-Risk (Generative AI)** | **Mindsmith, Coursebox**<br/>(AI wrappers with hallucination risk) | *Empty Quadrant* |
| **Low-Risk (Grounded AI)**| **Kajabi, Teachable**<br/>(Passive content hosts, no IP asset) | **Pass-Exams (Our Position)**<br/>(Safe AI & proprietary data asset creation for partners) |
`,
    transcript: "Our competitive landscape is best understood on two axes. First, the business model: generic B2C platforms versus true B2B white-label engines. Second, the technology: high-risk generative AI versus our safe, content-grounded model. While others compete in crowded red oceans, we have carved out a blue ocean for ourselves in the top-right quadrant, offering a unique combination of a B2B model with safe, reliable AI technology."
  },
  {
    slideNumber: 13,
    layout: 'default',
    icon: Briefcase,
    title: 'The Team',
    content: '**Gwendalynn Lim Wan Ting - Founder & CEO**\n\nGwendalynn is the company\'s sole founder, strategic lead, and technical architect. She personally built the full-stack application, engineered the machine learning pipeline, and is leading the discussions that have resulted in our current institutional traction. A graduate of NTU\'s Data Science & AI program, she comes from a long line of educators and is singularly focused on this mission.',
    transcript: "Gwendalynn Lim is our founder and CEO. She is both the strategic and technical lead, having personally architected the platform's machine learning pipeline and secured our key institutional traction. Her background in both data science and education makes her uniquely qualified to lead this company."
  },
   {
    slideNumber: 14,
    layout: 'default',
    icon: HelpCircle,
    title: 'Frequently Asked Questions',
    content: 'We\'ve compiled answers to common questions about our business model, technology, and partnership opportunities on our FAQ page.',
    transcript: "Before we move to our final slide, I want to address some common questions. We've created a comprehensive FAQ page on our website that covers details on our technology, security, and business model. I encourage you to review it, and I'm happy to answer any further questions you may have.",
    button: {
      href: "/faq",
      text: "View FAQ",
      icon: HelpCircle,
    }
  },
  {
    slideNumber: 15,
    layout: 'default',
    icon: Handshake,
    title: 'The Ask',
    content: 'We are seeking strategic partners and seed funding to scale our go-to-market strategy in Europe and North America. We have a proven platform, a validated business model, and a clear plan to acquire enterprise clients. **Let\'s build the future of lifelong learning, together.**',
    transcript: "We are seeking strategic partners and investors to help us scale our go-to-market strategy. We have a proven platform, a validated business model, and a clear plan to acquire enterprise clients. Let's build the future of lifelong learning, together."
  },
  {
    slideNumber: 16,
    layout: 'outro',
    title: 'Join Our Journey',
    content: "I come from a long line of educators. My great-grandmother was the first local female principal in Singapore. This company is my way of honoring that legacy—using technology to build the next generation of teaching tools. I built this platform because it's the tool I wish I had.",
    transcript: "I come from a long line of educators. My great-grandmother was the first local female principal in Singapore. This company is my way of honoring that legacy—using technology to build the next generation of teaching tools. I built this platform because it's the tool I wish I had.",
    contact: {
        name: "Gwendalynn Lim",
        email: "gwen@evecount.com",
    },
    image: PlaceHolderImages.find(p => p.id === 'gwen_founder_image')
  },
];


const mailtoHref = "mailto:gwen@evecount.com?subject=Innovative%20Partner%20Program%20Application&body=Hello,%0D%0A%0D%0APlease%20send%20us%20the%20one-page%20prospectus%20for%20the%20Innovative%20Partner%20Program.%20We%20are%20interested%20in%20learning%20more.%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]%0D%0A[Your%20Organization]";

const PitchDeckSlide = ({ slide }: { slide: (typeof slideData)[0] & { icon?: React.ElementType, isCta?: boolean, button?: { href: string; text: string; icon: React.ElementType }, citation?: { href: string; text: string; icon: React.ElementType } } }) => {
    
    const renderDefaultLayout = () => (
        <div className='flex flex-col items-center justify-center gap-6 text-center h-full'>
            {slide.icon && (
                <div className="mb-6">
                    <slide.icon className="h-16 w-16 text-primary mx-auto" />
                </div>
            )}
            <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-primary tracking-tight">
                {slide.title}
            </h2>
            <div 
                className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto prose dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: marked.parse(slide.content) }}
            />
            {slide.citation && (
               <div className="mt-6">
                    <Button asChild variant="ghost" size="sm">
                        <Link href={slide.citation.href}>
                            <slide.citation.icon className="mr-2 h-4 w-4"/>
                            {slide.citation.text}
                        </Link>
                    </Button>
                </div>
            )}
            {slide.button && (
                <div className="mt-8">
                    <Button asChild variant="orange">
                        <Link href={slide.button.href}>
                            <slide.button.icon className="mr-2 h-4 w-4"/>
                            {slide.button.text}
                        </Link>
                    </Button>
                </div>
            )}
        </div>
    );

    const renderImageLayout = (imagePosition: 'left' | 'right') => (
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-8">
            <div className={cn("relative min-h-[300px] md:min-h-[500px] rounded-lg overflow-hidden", imagePosition === 'right' && 'md:order-2')}>
                {slide.image && (
                     <Image
                        src={slide.image.imageUrl}
                        alt={slide.image.description}
                        data-ai-hint={slide.image.imageHint}
                        fill
                        className="object-cover"
                    />
                )}
            </div>
            <div className={cn("flex flex-col justify-center p-8", imagePosition === 'right' && 'md:order-1')}>
                 {slide.icon && <slide.icon className="h-12 w-12 text-primary mb-4" />}
                 <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-primary tracking-tight">
                    {slide.title}
                </h2>
                <div 
                    className="mt-4 text-lg text-foreground/80 max-w-2xl prose dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: marked.parse(slide.content) }}
                />
            </div>
        </div>
    );

    const renderCtaLayout = () => (
        <div className='flex flex-col items-center justify-center gap-6 text-center h-full bg-primary/5 p-8 rounded-lg'>
            {slide.icon && (
                <div className="mb-6">
                    <slide.icon className="h-16 w-16 text-primary mx-auto" />
                </div>
            )}
            <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-primary tracking-tight">
                {slide.title}
            </h2>
            <div 
                className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto prose dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: marked.parse(slide.content) }}
            />
             {slide.button && (
                <div className="mt-8">
                    <Button asChild size="lg" variant="orange">
                        <Link href={slide.button.href}>
                            <slide.button.icon className="mr-2 h-4 w-4"/>
                            {slide.button.text}
                        </Link>
                    </Button>
                </div>
            )}
             <div className="mt-8 border-t pt-6 w-full max-w-md">
                <p className="mb-4 text-foreground">Ready to build a smarter learning experience? Let's connect.</p>
                <Button asChild size="lg">
                    <a href={mailtoHref}>
                        <Building className="mr-2 h-5 w-5" />
                        Inquire About Partnership
                    </a>
                </Button>
            </div>
        </div>
    );
    
    let content;
    switch(slide.layout) {
        case 'intro':
            return (
                <div className="p-1 min-h-[80vh] h-full relative flex items-center justify-center">
                    {slide.image && <Image
                        src={slide.image.imageUrl}
                        alt={slide.image.description}
                        data-ai-hint={slide.image.imageHint}
                        fill
                        className="object-cover rounded-lg"
                    />}
                    <div className="absolute inset-0 bg-black/60 rounded-lg" />
                    <div className="relative z-10 text-center text-white p-8">
                        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">{slide.title}</h1>
                        <div 
                            className="mt-4 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto" 
                            dangerouslySetInnerHTML={{ __html: marked.parse(slide.content) }} 
                        />
                        <div className="mt-8 border-t border-white/30 pt-6 inline-block">
                            <p className="font-semibold">{slide.contact?.name}</p>
                            <a href={`mailto:${slide.contact?.email}`} className="block hover:underline">{slide.contact?.email}</a>
                        </div>
                    </div>
                </div>
            );
        case 'outro':
            return (
                 <div className="p-1 min-h-[80vh] h-full relative flex items-center justify-center">
                    {slide.image && <Image
                        src={slide.image.imageUrl}
                        alt={slide.image.description}
                        data-ai-hint={slide.image.imageHint}
                        fill
                        className="object-cover rounded-lg"
                    />}
                    <div className="absolute inset-0 bg-black/70 rounded-lg" />
                    <div className="relative z-10 text-center text-white p-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold font-headline">{slide.title}</h1>
                        <div className="mt-4 text-lg text-white/90 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: marked.parse(slide.content) }} />
                        <div className="mt-8 border-t border-white/30 pt-6 inline-block">
                            <p className="font-semibold">{slide.contact?.name}</p>
                            <a href={`mailto:${slide.contact?.email}`} className="block hover:underline">{slide.contact?.email}</a>
                        </div>
                    </div>
                </div>
            );
        case 'video':
            return (
                 <div className='flex flex-col items-center justify-center gap-6 text-center h-full'>
                    {slide.icon && <slide.icon className="h-16 w-16 text-primary mx-auto" />}
                    <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-primary tracking-tight">
                        {slide.title}
                    </h2>
                    <div 
                        className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto"
                        dangerouslySetInnerHTML={{ __html: marked.parse(slide.content) }}
                    />
                     <div className="mt-4 w-full max-w-lg aspect-video bg-black rounded-lg overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/nROE-S2aP9c"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                    </div>
                </div>
            );
        case 'image-left':
            content = renderImageLayout('left');
            break;
        case 'image-right':
            content = renderImageLayout('right');
            break;
        case 'cta':
            content = renderCtaLayout();
            break;
        default:
            content = renderDefaultLayout();
            break;
    }

    return (
        <div className="p-1">
            <Card className="flex flex-col min-h-[80vh] h-full overflow-hidden">
                <CardContent className="flex flex-col flex-grow p-6 bg-background relative items-center justify-center gap-6">
                    {content}
                </CardContent>
                <footer className="bg-primary text-primary-foreground p-3 text-xs mt-auto">
                    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
                        <p className='font-bold'>Slide {slide.slideNumber} / {slideData.length}</p>
                        <a href="mailto:gwen@evecount.com" className="flex items-center gap-2 hover:underline">
                            <Mail className="h-4 w-4" />
                            <span>gwen@evecount.com</span>
                        </a>
                    </div>
                </footer>
            </Card>
        </div>
    );
};

type ChatMessage = {
    role: 'user' | 'assistant';
    content: string;
    suggestions?: string[];
};

type ChatFormData = {
    prompt: string;
};

const initialGreeting = "Hello! I'm your AI Co-founder. I can answer questions about our business model or technology. How can I help you today?";

export default function PitchDeckPage() {
    const cannedAnswers: Record<string, string> = {
        "What is your business model?": "Our business model is a high-margin B2B SaaS. We license our white-label AI platform to institutional partners like corporations, certification bodies, and universities for an annual fee. This allows them to launch their own custom-branded, AI-powered learning applications without the high cost of an in-house ML team.",
        "Tell me about the technology.": "Our core technology is 'Proprietary by Process.' We've built an AI with a fundamental safety constraint: it can only generate content from the source material a partner provides. This prevents AI 'hallucinations' and creates a clean IP framework where our partners own their valuable, compounding data asset.",
        "Who is your target market?": "Our ideal client is an elite institution with a unique body of proprietary knowledge. This includes professional certification bodies, research universities, and global corporations with deep internal expertise for training and compliance. We help them turn their knowledge into a scalable, intelligent data asset.",
    };

    const [messages, setMessages] = React.useState<ChatMessage[]>([
        { role: 'assistant', content: initialGreeting, suggestions: Object.keys(cannedAnswers) }
    ]);
    const { register, handleSubmit, reset } = useForm<ChatFormData>();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const scrollAreaRef = React.useRef<HTMLDivElement>(null);
    const [playingAudioId, setPlayingAudioId] = React.useState<string | null>(null);
    const [isAudioLoading, setIsAudioLoading] = React.useState<string | null>(null);
    const audioRef = React.useRef<HTMLAudioElement>(null);


    React.useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages]);

    const handleQuickQuestionClick = (question: string) => {
        const userMessage: ChatMessage = { role: 'user', content: question };
        const assistantResponse: ChatMessage = { role: 'assistant', content: cannedAnswers[question] || "That's a great question. Let me find the right information for you.", suggestions: Object.keys(cannedAnswers).filter(q => q !== question) };

        setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage.role === 'assistant' && lastMessage.suggestions) {
                const newMessages = [...prev.slice(0, -1), { ...lastMessage, suggestions: undefined }];
                return [...newMessages, userMessage, assistantResponse];
            }
            return [...prev, userMessage, assistantResponse];
        });
    };
    
    const handlePlayAudio = async (text: string, messageId: string) => {
      if (playingAudioId === messageId && audioRef.current && !audioRef.current.paused) {
          audioRef.current.pause();
          setPlayingAudioId(null);
          return;
      }
      setIsAudioLoading(messageId);
      try {
          const result = await generateAudioForText(text);
          if (result.audioDataUri && audioRef.current) {
              audioRef.current.src = result.audioDataUri;
              audioRef.current.play();
              setPlayingAudioId(messageId);
          } else {
              throw new Error(result.error || "No audio data returned.");
          }
      } catch (error: any) {
          toast({ variant: "destructive", title: "Audio Generation Failed", description: error.message });
      } finally {
          setIsAudioLoading(null);
      }
    };


    const onSendMessage: SubmitHandler<ChatFormData> = async (data) => {
        if (!data.prompt.trim()) return;
        handleQuickQuestionClick(data.prompt);
        reset();
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-muted/20 p-4 relative">
             <audio ref={audioRef} onEnded={() => setPlayingAudioId(null)} />
            <Button asChild variant="outline" className="absolute top-6 left-6 z-10 print:hidden">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
            <Carousel className="w-full max-w-5xl">
                <CarouselContent>
                    {slideData.map((slide, index) => (
                        <CarouselItem key={index}>
                            <PitchDeckSlide slide={slide as any} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-[-1rem] sm:left-[-4rem]" />
                <CarouselNext className="right-[-1rem] sm:right-[-4rem]" />
            </Carousel>
            
            <div className="fixed bottom-6 right-6 z-20 flex flex-col items-end gap-2">
                <div className="bg-background border border-border px-3 py-1 rounded-full shadow-lg animate-in fade-in-50 slide-in-from-bottom-2">
                    <p className="text-xs font-semibold text-primary">Ask me about our business model!</p>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="orange"
                            className="h-16 w-16 rounded-full shadow-lg"
                        >
                            <MessageCircle className="h-8 w-8" />
                            <span className="sr-only">Open Chat</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="h-[90vh] flex flex-col p-0">
                        <SheetHeader className="p-6 pb-2 border-b">
                            <div className="flex justify-between items-center">
                                <SheetTitle className="flex items-center gap-3 text-2xl font-headline">
                                    <Bot className="h-8 w-8 text-primary" />
                                    AI Co-founder
                                </SheetTitle>
                            </div>
                            <SheetDescription className="text-left pt-2">
                                I'm your AI co-founder. Ask me anything about our technology, business model, or partnership opportunities.
                            </SheetDescription>
                        </SheetHeader>
                        <ScrollArea className="flex-grow p-6" ref={scrollAreaRef}>
                            <div className="space-y-6">
                                {messages.map((message, index) => (
                                     <div key={index}>
                                        <div className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : 'items-center'}`}>
                                            {message.role === 'assistant' && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                                            <div className={`p-3 rounded-lg max-w-md ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                                <p className="text-sm">{message.content}</p>
                                            </div>
                                             {message.role === 'assistant' && (
                                                <Button variant="ghost" size="icon" onClick={() => handlePlayAudio(message.content, index.toString())} disabled={!!isAudioLoading}>
                                                    {isAudioLoading === index.toString() ? <Loader2 className="h-5 w-5 animate-spin" /> : <Volume2 className="h-5 w-5" />}
                                                </Button>
                                            )}
                                        </div>
                                        {message.role === 'assistant' && message.suggestions && (
                                            <div className="pl-10 mt-3 flex flex-wrap gap-2">
                                                {message.suggestions.map((q, i) => (
                                                    <Button
                                                        key={i}
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleQuickQuestionClick(q)}
                                                        disabled={isSubmitting}
                                                        className="text-xs h-auto py-1.5 px-3"
                                                    >
                                                        {q}
                                                    </Button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {isSubmitting && (
                                    <div className="flex items-start gap-3">
                                        <Bot className="h-6 w-6 text-primary flex-shrink-0 animate-pulse" />
                                        <div className="p-3 rounded-lg max-w-sm bg-muted">
                                        <Loader2 className="h-4 w-4 animate-spin"/>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                        <SheetFooter className="p-4 border-t bg-background">
                            <form onSubmit={handleSubmit(onSendMessage)} className="flex items-center gap-2 w-full">
                                <Input 
                                    id="prompt"
                                    placeholder="Ask about our TAM, tech stack, or pilot program..."
                                    {...register("prompt")}
                                    disabled={isSubmitting}
                                    autoComplete="off"
                                />
                                <Button type="submit" disabled={isSubmitting} size="icon">
                                    {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                                    <span className="sr-only">Send</span>
                                </Button>
                            </form>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </main>
    );
}
