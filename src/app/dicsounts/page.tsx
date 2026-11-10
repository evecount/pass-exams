
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Gift, Tag, Calendar, Users, ShoppingCart, Mail, Building, Rocket, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const allPromotions = [
  {
    title: "Founder's Pass (For Gwen)",
    code: "GWEN100",
    description: "This is your personal, unlimited-use 100% discount code for testing the Stripe payment flow and any other features. This card is only visible to you during development and will not be shown to other users.",
    details: [
      {
        icon: Tag,
        text: "100% off any purchase, with unlimited uses."
      },
      {
        icon: Users,
        text: "Exclusively for your testing purposes."
      },
      {
        icon: Calendar,
        text: "This code will never expire."
      }
    ],
    eligibility: "This coupon is for internal testing and validation.",
    isFounder: true,
  },
  {
    title: "Pioneer Program Discount",
    code: "PIONEER100",
    description: "We're a new Singaporean startup and we've just launched! To thank our first supporters and get valuable feedback, we're offering the first 20 pioneers a 100% discount to test-drive our platform.",
    details: [
      {
        icon: Tag,
        text: "100% off any one-time purchase or the first month of any subscription."
      },
      {
        icon: Users,
        text: "Strictly limited to the first 20 redemptions."
      },
      {
        icon: Calendar,
        text: "Valid until the end of this month."
      }
    ],
    eligibility: "This coupon is valid for first-time customers only.",
    isFeatured: true,
    isContactCTA: false,
  },
   {
    title: "Agency & Corporate Discount - 40% OFF",
    code: "AGENCY40",
    description: "Perfect for agencies and financial advisory firms looking to train their teams. Get 40% off any purchase and equip your representatives with the best tools to succeed.",
    details: [
      {
        icon: Tag,
        text: "40% off any one-time purchase or any subscription plan."
      },
      {
        icon: Building,
        text: "Exclusively for corporate teams and financial advisory firms."
      },
      {
        icon: Mail,
        text: "Requires verification via official company email."
      }
    ],
    eligibility: "To receive your unique code, please contact us from your corporate email address for verification. This offer is designed for bulk team sign-ups.",
    isFeatured: false,
    isContactCTA: true,
    id: "agency-discount"
  },
  {
    title: "First Purchase Discount - 25% OFF",
    code: "FRIENDS25",
    description: "A little help to get you started. Use this code to get 25% off your first purchase on any of our plans.",
    details: [
      {
        icon: Tag,
        text: "25% off any one-time purchase or the first month of any subscription."
      },
      {
        icon: Users,
        text: "One-time use per new customer."
      },
      {
        icon: Calendar,
        text: "This discount applies only to the initial payment."
      }
    ],
    eligibility: "This coupon is intended for new subscribers and applies only to the initial payment. It cannot be combined with other offers.",
    isFeatured: false,
    isContactCTA: false,
    id: "friends-discount"
  }
];

export default function DiscountsPage() {
  const founderPromo = allPromotions.find(p => p.isFounder);
  const pioneerPromo = allPromotions.find(p => p.isFeatured);
  const friendsPromo = allPromotions.find(p => p.id === 'friends-discount');
  const agencyPromo = allPromotions.find(p => p.id === 'agency-discount');

  const pioneerImage = PlaceHolderImages.find(p => p.id === 'pioneer_promo');
  const friendsImage = PlaceHolderImages.find(p => p.id === 'first_purchase_promo');

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-16">
      <div className="w-full max-w-4xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Promotions & Discounts
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                Exclusive offers to help you get started on your CMFAS journey.
            </p>
        </div>

        <div className="space-y-8">
            {founderPromo && (
                <Card className="shadow-lg border-amber-500 border-2 overflow-hidden">
                    <div className="p-6 flex flex-col">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-amber-500 tracking-tighter">
                            <Star className="fill-amber-500" /> {founderPromo.title}
                            </CardTitle>
                            <CardDescription className="text-foreground/80 pt-2 text-base">
                                {founderPromo.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 flex-grow space-y-4">
                            <div>
                                <h3 className="font-bold text-lg mb-3">Your Personal Test Code:</h3>
                                <div className="flex items-center gap-4 p-4 border-2 border-dashed rounded-lg justify-center">
                                    <span className="text-2xl font-mono font-bold tracking-widest text-accent">{founderPromo.code}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2 text-center">Enter this code at checkout.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-3">Terms & Conditions:</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {founderPromo.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <detail.icon className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>{detail.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                         <CardFooter className="p-0 mt-6 flex flex-col items-center gap-2">
                            <Button asChild size="lg" className="w-full">
                                <Link href="/fees">
                                    <ShoppingCart className="mr-2 h-4 w-4" />
                                    Go to Pricing Page to Test
                                </Link>
                            </Button>
                        </CardFooter>
                    </div>
                </Card>
            )}


            {pioneerPromo && (
                 <Card className="shadow-lg border-primary border-2 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {pioneerImage && (
                            <div className="relative min-h-[300px] md:min-h-full">
                                <Image
                                    src={pioneerImage.imageUrl}
                                    alt={pioneerImage.description}
                                    data-ai-hint={pioneerImage.imageHint}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <div className="p-6 flex flex-col">
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                                <Rocket /> {pioneerPromo.title}
                                </CardTitle>
                                <CardDescription className="text-foreground/80 pt-2 text-base">
                                    {pioneerPromo.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0 flex-grow space-y-4">
                                <div>
                                    <h3 className="font-bold text-lg mb-3">Your Coupon Code:</h3>
                                    <div className="flex items-center gap-4 p-4 border-2 border-dashed rounded-lg justify-center">
                                        <span className="text-2xl font-mono font-bold tracking-widest text-accent">{pioneerPromo.code}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2 text-center">Enter this code at checkout.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-3">Applicable Exams:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary">RES5</Badge>
                                        <Badge variant="secondary">HI</Badge>
                                        <Badge variant="secondary">M9</Badge>
                                        <Badge variant="secondary">M9A</Badge>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-3">Terms & Conditions:</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {pioneerPromo.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <detail.icon className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                                <span>{detail.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                             <CardFooter className="p-0 mt-6 flex flex-col items-center gap-2">
                                <Button asChild size="lg" className="w-full">
                                    <Link href="/fees">
                                        <ShoppingCart className="mr-2 h-4 w-4" />
                                        Redeem Now at pass-exams.com
                                    </Link>
                                </Button>
                            </CardFooter>
                        </div>
                    </div>
                </Card>
            )}

            {friendsPromo && (
                <Card className="shadow-lg border-primary border-2 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 flex flex-col">
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                                   <Gift /> {friendsPromo.title}
                                </CardTitle>
                                <CardDescription className="text-foreground/80 max-w-3xl pt-2 text-base">
                                    {friendsPromo.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0 flex-grow space-y-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-3">Your Coupon Code:</h3>
                                    <div className="flex items-center gap-4 p-4 border-2 border-dashed rounded-lg justify-center">
                                        <span className="text-2xl font-mono font-bold tracking-widest text-accent">{friendsPromo.code}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2 text-center">Enter this code at checkout.</p>
                                </div>
                                
                                <div>
                                    <h3 className="font-bold text-lg mb-3">Offer Details:</h3>
                                    <ul className="space-y-3">
                                        {friendsPromo.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <detail.icon className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                                <span>{detail.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-3">Terms & Conditions:</h3>
                                    <p className="text-muted-foreground">{friendsPromo.eligibility}</p>
                                </div>
                            </CardContent>
                             <CardFooter className="p-0 mt-6 flex flex-col items-center gap-2">
                               <Button asChild size="lg" className="w-full">
                                    <Link href="/fees">
                                        <ShoppingCart className="mr-2 h-4 w-4" />
                                        Go to Pricing Page
                                    </Link>
                                </Button>
                             </CardFooter>
                        </div>
                        {friendsImage && (
                            <div className="relative min-h-[300px] md:min-h-full">
                                <Image
                                    src={friendsImage.imageUrl}
                                    alt={friendsImage.description}
                                    data-ai-hint={friendsImage.imageHint}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>
                </Card>
            )}

            {agencyPromo && (
                <Card className="shadow-lg border-primary border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                           <Gift /> {agencyPromo.title}
                        </CardTitle>
                        <CardDescription className="text-foreground/80 max-w-3xl pt-2 text-base">
                            {agencyPromo.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="font-bold text-lg mb-3">How to Redeem:</h3>
                                <div className="flex items-center gap-4 p-4 border-2 border-dashed rounded-lg justify-center">
                                <Button asChild size="lg" variant="outline">
                                    <a href="mailto:gwen@evecount.com?subject=Request%20for%20Agency%20Discount%20Code&body=Hello,%0D%0A%0D%0AMy%20name%20is%20[Your%20Name]%20from%20[Your%20Agency/Company%20Name].%20I%20would%20like%20to%20request%20the%20AGENCY40%20discount%20code%20for%20our%20team.%0D%0A%0D%0AThank%20you.">
                                        <Mail className="mr-2 h-4 w-4" />
                                        Contact Us for Code
                                    </a>
                                </Button>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 text-center">A member of our team will verify your agency and reply with your code.</p>
                        </div>
                        
                        <div>
                            <h3 className="font-bold text-lg mb-3">Offer Details:</h3>
                            <ul className="space-y-3">
                                {agencyPromo.details.map((detail, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <detail.icon className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                        <span>{detail.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-3">Terms & Conditions:</h3>
                            <p className="text-muted-foreground">{agencyPromo.eligibility}</p>
                        </div>
                    </CardContent>
                </Card>
            )}

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
