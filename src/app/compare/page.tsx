
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  BrainCircuit,
  Lightbulb,
  Sparkles,
  ShoppingCart,
  BookOpen,
  Star,
} from "lucide-react";
import { quizzes } from "@/lib/quiz-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";


const providers = [
  {
    name: "Pass-Exams",
    title: "The Smart Choice for Value & Efficacy",
    rating: 5,
    features: [
      "Best Value for Quality: High-end features at an affordable price.",
      "AI-Powered Understanding: Go beyond memorization with AI explanations for every question.",
      "Study On The Go: Fully mobile-friendly platform beats static PDFs.",
      "Multi-Language Support: Instant translations for better comprehension.",
      "Trusted Local Business: A registered Singaporean company you can trust.",
      "Original, High-Quality Questions: Content is based on the official syllabus, ensuring relevance without repetition."
    ],
    drawbacks: [],
    isUs: true,
  },
  {
    name: "Expensive Courses & Tuition",
    rating: 3,
    features: [],
    drawbacks: [
      "Extremely High Cost: Often costs hundreds or thousands of dollars for a single subject.",
      "Rigid Schedules: Learning is tied to a fixed class schedule, offering little flexibility.",
      "Outdated Materials: May rely on static, infrequently updated physical or PDF materials.",
      "Lacks Personalization: One-size-fits-all approach doesn't adapt to individual learning speeds."
    ],
  },
  {
    name: "Cheap PDF Dumps",
    rating: 2,
    features: [],
    drawbacks: [
        "Static PDF Files: No interactive practice, progress tracking, or mobile-friendly experience.",
        "Unreliable Quality: Content is often outdated and may contain critical errors.",
        "Anonymous & Unaccountable: Often run by anonymous sellers with no support or recourse.",
        "High Risk of Negative Learning: Practicing with wrong answers is worse than not studying at all."
    ],
  },
  {
    name: "Low-Quality 'Massive Banks'",
    rating: 1,
    features: [],
    drawbacks: [
        "Dishonest Practices: Often use fake testimonials and hide company information.",
        "Very Poor Reviews: Consistently low ratings on platforms like TrustPilot.",
        "Quantity Over Quality: Focus on thousands of repetitive, low-value questions.",
        "Promotes Memorization: Designed for rote learning, not deep understanding."
    ],
  },
];

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex justify-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
        ))}
    </div>
);


export default function ComparePage() {
  const paidQuizzes = quizzes.filter(
    (q) => q.price && q.id !== "exam-1"
  );
  const heroImage = PlaceHolderImages.find(p => p.id === 'power_bundle');

  return (
    <main className="flex min-h-screen flex-col items-center pt-16">
      <section className="w-full bg-background relative">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          <div className="flex flex-col justify-center p-8 lg:p-16">
            <div className="max-w-md">
              <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl font-headline text-primary">
                  The AI-Powered Advantage
              </h1>
              <p className="mt-4 text-md text-foreground/80">
                  Traditional mock exams just test your memory. We use AI to build true understanding, giving you the confidence to pass. Here's how our AI-enabled features set you apart.
              </p>
               <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                      <BrainCircuit className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                      <div>
                          <h3 className="text-lg font-bold">Deeper Dive Explanations</h3>
                          <p className="text-muted-foreground text-sm">Don't just know the right answer—understand *why*. Get instant, detailed mini-lessons on the core concept behind any question.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <Lightbulb className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                      <div>
                          <h3 className="text-lg font-bold">AI-Generated Hints</h3>
                          <p className="text-muted-foreground text-sm">Stuck on a tough question? Our AI provides a gentle nudge in the right direction without giving the answer away, helping you learn to think critically.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <Sparkles className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                      <div>
                          <h3 className="text-lg font-bold">Smart Practice</h3>
                          <p className="text-muted-foreground text-sm">Our platform learns with you, helping you focus on the topics where you need the most improvement. It's the most efficient way to study.</p>
                      </div>
                  </div>
               </div>
            </div>
          </div>
          <div className="relative min-h-[300px] md:min-h-[500px]">
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

      <div className="w-full max-w-7xl p-4 sm:p-8 mt-16 mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
            A Better Way to Learn
          </h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            The education "after-market" is filled with expensive, inflexible, or low-quality options that often fail the modern learner. We built a different approach, focusing on value, quality, and true understanding over rote memorization.
          </p>
        </div>

        <Card className="shadow-lg">
            <CardContent className="p-0">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            {providers.map((provider) => (
                                <TableHead key={provider.name} className={`w-1/4 p-6 text-center ${provider.isUs ? 'bg-primary/5' : ''}`}>
                                    <h3 className={`font-headline text-xl font-bold ${provider.isUs ? 'text-primary' : 'text-foreground'}`}>{provider.name}</h3>
                                    <div className="mt-2"><StarRating rating={provider.rating} /></div>
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                           {providers.map((provider) => (
                                <TableCell key={provider.name} className={`p-6 align-top ${provider.isUs ? 'bg-primary/5' : ''}`}>
                                    {provider.isUs ? (
                                        <ul className="space-y-3">
                                            {provider.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <ul className="space-y-3">
                                            {provider.drawbacks.map((drawback, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                                                    <span>{drawback}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </TableCell>
                           ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
             {providers.find(p => p.isUs) && (
                <CardContent className="mt-8 pt-6 border-t text-center">
                    <h3 className="font-bold text-lg mb-4">Ready to Experience the Difference?</h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild variant="default" size="lg">
                            <Link href="/">
                                <BookOpen className="mr-2 h-4 w-4" />
                                Try a Free Demo
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            )}
        </Card>

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
