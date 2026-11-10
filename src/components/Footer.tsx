'use client';

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const exploreLinks = [
    { href: '/demo', label: 'Demo' },
    { href: '/whitepaper', label: 'Whitepaper' },
    { href: '/pitchdeck', label: 'Pitch Deck' },
    { href: '/features', label: 'Features' },
    { href: '/db', label: 'Database' },
    { href: '/investment-strategies', label: 'Investment Strategies' },
    { href: '/empirical-learning', label: 'Empirical Learning' },
  ];

  const examHubLinks = [
    { href: '/cmfas', label: 'CMFAS Exams' },
    { href: '/psle', label: 'PSLE Exams' },
  ];

  const partnershipLinks = [
    { href: '/partnership', label: 'For Educators' },
    { href: '/fundraising', label: 'For Fundraising' },
    { href: '/affiliateprogram', label: 'Affiliate Program'},
    { href: '/compare', label: 'Compare Solutions' },
  ];

  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/terms', label: 'Terms of Use & Privacy' },
  ];

  return (
    <footer className="w-full bg-background border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-xl font-bold text-primary font-headline">
              Pass-Exams.com
            </h2>
            <p className="mt-4 text-xs text-foreground/60">
              This platform is a case study in AI-powered learning. The mock exams are original works created for demonstration and are not affiliated with, nor endorsed by, any official examination body.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {exploreLinks.sort((a, b) => a.label.localeCompare(b.label)).map((link) => (
                 <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>
           <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Exams
            </h3>
            <ul className="mt-4 space-y-2">
              {examHubLinks.sort((a, b) => a.label.localeCompare(b.label)).map((link) => (
                 <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Partnerships
            </h3>
            <ul className="mt-4 space-y-2">
               {partnershipLinks.sort((a, b) => a.label.localeCompare(b.label)).map((link) => (
                 <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
               {companyLinks.sort((a, b) => a.label.localeCompare(b.label)).map((link) => (
                 <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
              ))}
               <li>
                  <Link href="/admin/quiz-audit" className="text-base text-muted-foreground hover:text-primary">
                    Quiz Audit
                  </Link>
                </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Pass-Exams.com by Eve Count Pte. Ltd. (UEN: 53438315K) - EduTech - Singapore
          </p>
        </div>
      </div>
    </footer>
  );
}
