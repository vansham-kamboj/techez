import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const footerNavs = [
  { href: '/community', name: 'Community' },
  { href: '/partner', name: 'Partner With Us' },
  { href: '/contact', name: 'Contact' },
];

const socialLinks = [
  { name: 'linkedin', href: '#', icon: <Linkedin className="h-6 w-6" /> },
  { name: 'twitter', href: 'https://x.com/techez_in', icon: <Twitter className="h-6 w-6" /> },
  { name: 'instagram', href: 'https://www.instagram.com/techez.in/', icon: <Instagram className="h-6 w-6" /> },
];

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm font-medium">
            {footerNavs.map((e) => (
              <Link
                key={e.name}
                href={e.href}
                className="transition-colors hover:text-primary"
              >
                {e.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 text-center text-sm">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-8 gap-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href="mailto:contact.techez@gmail.com"
                className="font-medium hover:underline"
              >
                contact.techez@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <a
                href="tel:+918320495754"
                className="font-medium hover:underline"
              >
                +91 8320495754
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <a
                href="tel:+919313672805"
                className="font-medium hover:underline"
              >
                +91 93136 72805
              </a>
            </div>
          </div>
          <div className="mt-4 text-muted-foreground">
            © 2025 Techez. Built with boldness and a whole lot of coffee ☕.
          </div>
        </div>
      </div>
    </footer>
  );
}
