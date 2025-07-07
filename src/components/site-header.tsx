'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-headline text-lg font-bold">Techez</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="/community"
              className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Community
            </Link>
            <Link
              href="/contact"
              className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex">
            <Button asChild>
              <Link href="https://chat.whatsapp.com/ESI9d1MyJ6NE1Pa3YHQ7GR">Join Community</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 text-lg font-medium mt-6">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold mb-4"
                  >
                    <span className="font-headline text-2xl font-bold">
                      Techez
                    </span>
                  </Link>
                  <SheetClose asChild>
                    <Link
                      href="/community"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Community
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Contact
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild className="mt-4">
                      <Link href="https://chat.whatsapp.com/ESI9d1MyJ6NE1Pa3YHQ7GR">Join Community</Link>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
