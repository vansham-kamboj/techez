import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

export const metadata: Metadata = {
  title: {
    default: 'Techez - AI-Powered Tools & Digital Services',
    template: `%s | Techez`,
  },
  description:
    'Techez is an AI automation company building future-first tools and providing digital services to empower creators, founders, and professionals.',
  keywords: [
    'AI automation',
    'content creation',
    'digital marketing',
    'web development',
    'UI/UX design',
    'startup solutions',
    'Techez',
    'Techies Community',
  ],
  authors: [{ name: 'Techez' }],
  creator: 'Techez',
  openGraph: {
    title: 'Techez - AI-Powered Tools & Digital Services',
    description:
      'We build future tools for the future generation. AI-powered content automation, personal branding, and custom digital solutions.',
    url: 'https://your-app-url.com',
    siteName: 'Techez',
    images: [
      {
        url: 'https://placehold.co/1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Techez - Building Future Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techez - AI-Powered Tools & Digital Services',
    description:
      'We build future tools for the future generation. AI-powered content automation, personal branding, and custom digital solutions.',
    images: ['https://placehold.co/1200x630.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn('min-h-screen bg-background font-body antialiased')}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
