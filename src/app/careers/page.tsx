
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Mail, Handshake } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const jobOpenings = [
  {
    title: "Business Development & Sales Lead",
    type: "Full-Time / Remote",
    location: "Singapore",
    description: "We are seeking a motivated and entrepreneurial individual to lead our business development and sales efforts. As a key member of our foundational team, you will be responsible for building relationships with educational institutions, tuition centers, and corporate clients to drive the adoption of our white-label learning platform.",
    responsibilities: [
      "Develop and execute a go-to-market strategy targeting schools and educational organizations.",
      "Build and manage a pipeline of potential partners.",
      "Lead presentations and negotiations to close partnership deals.",
      "Collaborate on marketing strategies to build brand awareness in the education sector.",
      "Represent the company's vision and values to all external stakeholders."
    ],
    qualifications: [
      "Proven experience in B2B sales, business development, or partnership management, preferably in the EdTech or education sector.",
      "A deep passion for education and technology.",
      "Excellent communication, negotiation, and relationship-building skills.",
      "An entrepreneurial mindset with the ability to work independently and drive results.",
      "Alignment with our core philosophy of privacy, empowerment, and true learning over surveillance."
    ]
  }
];

export default function CareersPage() {
  const mailtoHref = "mailto:gwen@evecount.com?subject=Application%20for%20Business%20Development%20Lead&body=Hello,%0D%0A%0D%0AI'm%20interested%20in%20the%20Business%20Development%20Lead%20position.%20Please%20find%20my%20resume%20attached.%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]";
  const careerImage = PlaceHolderImages.find(p => p.id === 'power_bundle');

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-24 bg-muted/20">
      <div className="w-full max-w-4xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Join Our Mission
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                We're a small team with a big vision. Help us build the future of learning.
            </p>
        </div>

        <Card className="shadow-lg overflow-hidden">
          {careerImage && (
              <div className="relative h-64 w-full">
                <Image src={careerImage.imageUrl} alt="A team working together" layout="fill" className="object-cover" />
                <div className="absolute inset-0 bg-black/50" />
              </div>
          )}
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                   <Briefcase /> Open Positions
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                {jobOpenings.map((job, index) => (
                    <div key={index} className="p-6 border rounded-lg bg-background">
                        <h2 className="text-2xl font-bold">{job.title}</h2>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                            <span>{job.type}</span>
                            <span>&bull;</span>
                            <span>{job.location}</span>
                        </div>
                        <p className="mt-4 text-foreground/80">{job.description}</p>
                        
                        <h3 className="font-bold mt-6 mb-2">What You'll Do:</h3>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {job.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>

                        <h3 className="font-bold mt-6 mb-2">What We're Looking For:</h3>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {job.qualifications.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="flex-col items-center gap-4 pt-6 text-center">
                 <div className="p-6 border-2 border-dashed rounded-lg w-full max-w-md">
                    <h3 className="font-bold text-lg mb-2">Ready to Apply?</h3>
                    <p className="text-muted-foreground mb-4">
                        We're looking for a leader to grow with us. If our mission excites you, let's talk.
                    </p>
                    <Button asChild size="lg">
                      <a href={mailtoHref}>
                        <Mail className="mr-2 h-4 w-4" />
                        Apply Now
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
