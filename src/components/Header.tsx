'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, LogIn, LogOut, LayoutDashboard, ChevronDown, Wand2 } from 'lucide-react';
import { useUser, useAuth } from '@/firebase';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    if (auth) {
        await auth.signOut();
        // Clear session cookie by calling a server route
        await fetch('/api/auth/session', { method: 'DELETE' });
    }
    router.push('/');
  };
  
  const resourceLinks = [
    { href: '/affiliateprogram', label: 'Affiliate Program' },
    { href: '/compare', label: 'Compare Solutions' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/pricing', label: 'Pricing' },
  ].sort((a, b) => a.label.localeCompare(b.label));

  const mobileNavLinks = [
      { href: '/demo', label: 'Demo' },
      ...resourceLinks,
  ].sort((a, b) => a.label.localeCompare(b.label));

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary font-headline">Pass-Exams</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button asChild variant="ghost">
                <Link href="/demo">
                    <Wand2 className="mr-2 h-4 w-4" />
                    Demo
                </Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  Resources <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {resourceLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {!isUserLoading && !user && (
              <div className="flex items-center gap-4 pl-4 border-l">
                <Button asChild>
                    <Link href="/login">
                        <LogIn className="mr-2 h-4 w-4" />
                        Login / Sign Up
                    </Link>
                </Button>
              </div>
            )}
            
            {!isUserLoading && user && (
              <div className="flex items-center gap-4 pl-4 border-l">
                 <Button asChild>
                    <Link href="/dashboard">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                    </Link>
                </Button>
                <Button onClick={handleLogout} variant="ghost" size="icon">
                    <LogOut className="h-5 w-5" />
                    <span className="sr-only">Logout</span>
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                  {mobileNavLinks.map((link) => (
                    <Button key={link.href} asChild variant="ghost" className="justify-start text-lg">
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  ))}
                  {!isUserLoading && (
                     <div className='mt-4 pt-4 border-t'>
                        {user ? (
                        <div className="flex justify-between items-center">
                          <Button asChild className="w-full justify-start text-lg">
                            <Link href="/dashboard">
                              <LayoutDashboard className="mr-2 h-5 w-5" />
                              Dashboard
                            </Link>
                          </Button>
                          <Button onClick={handleLogout} variant="ghost" size="icon">
                              <LogOut className="h-6 w-6" />
                              <span className="sr-only">Logout</span>
                          </Button>
                        </div>
                        ) : (
                        <div className="space-y-2">
                            <Button asChild className="w-full justify-start text-lg">
                                <Link href="/login">
                                <LogIn className="mr-2 h-5 w-5" />
                                Login / Sign Up
                                </Link>
                            </Button>
                        </div>
                        )}
                     </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
  );
}
