import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Code2,
  Rocket,
  Paintbrush,
  Clapperboard,
  DollarSign,
  MapPin,
  Calendar,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

const communityMembers = [
  {
    icon: <Code2 className="h-12 w-12 text-primary" />,
    title: 'Developers',
    description: 'who want to level up',
  },
  {
    icon: <Rocket className="h-12 w-12 text-primary" />,
    title: 'Founders',
    description: 'building real things',
  },
  {
    icon: <Paintbrush className="h-12 w-12 text-primary" />,
    title: 'Designers',
    description: 'shaping the future',
  },
  {
    icon: <Clapperboard className="h-12 w-12 text-primary" />,
    title: 'Creators',
    description: 'chasing consistency',
  },
  {
    icon: <DollarSign className="h-12 w-12 text-primary" />,
    title: 'Hustlers',
    description: 'learning to earn online',
  },
];

const events = [
  {
    name: 'Community Kick-off: Details Coming Soon',
    location: 'To Be Announced',
    format: 'Stay Tuned!',
    date: 'Launching Soon',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'community event placeholder',
  },
  {
    name: 'First Workshop: Details Coming Soon',
    location: 'To Be Announced',
    format: 'Stay Tuned!',
    date: 'Launching Soon',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'workshop placeholder',
  },
  {
    name: 'Fireside Chat: Details Coming Soon',
    location: 'To Be Announced',
    format: 'Stay Tuned!',
    date: 'Launching Soon',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'fireside chat placeholder',
  },
];

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-white flex items-center justify-center min-h-screen">
          <div className="container px-4 md:px-6">
            <ScrollAnimationWrapper className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-7xl/none font-headline">
                Techies Community
              </h1>
              <p className="text-2xl md:text-3xl font-bold font-headline text-muted-foreground">
                Not Just a Group. A Growth Culture.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Community Philosophy Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center">
              <ScrollAnimationWrapper className="max-w-3xl text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                  Our Philosophy
                </h2>
                <p className="text-xl md:text-2xl/relaxed text-foreground">
                  We believe in{' '}
                  <span className="font-bold text-primary">together growth</span>{' '}
                  — not just building products, but building people. From
                  coding, startups, freelancing, design, to personal branding —
                  Techies Community is where ideas get shared, collabs get real,
                  and growth becomes mutual.
                </p>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <ScrollAnimationWrapper className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Who Is This For?
              </h2>
            </ScrollAnimationWrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {communityMembers.map((member, index) => (
                <ScrollAnimationWrapper
                  key={member.title}
                  delay={index * 100}
                  className="flex flex-col items-center text-center p-4"
                >
                  {member.icon}
                  <h3 className="mt-4 text-2xl font-bold font-headline">
                    {member.title}
                  </h3>
                  <p className="mt-2 text-md text-muted-foreground">
                    {member.description}
                  </p>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus Quote Block */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <ScrollAnimationWrapper>
              <blockquote className="text-center text-2xl md:text-4xl font-bold font-headline italic border-none">
                "We’re not just sharing knowledge. We’re distributing power."
              </blockquote>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <ScrollAnimationWrapper className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                  You’ve watched enough reels. Now join the real ones.
                </h2>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper delay={200}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="https://chat.whatsapp.com/ESI9d1MyJ6NE1Pa3YHQ7GR">Join the Community</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                    <Link href="/partner">Partner With the Community</Link>
                  </Button>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white border-t">
          <div className="container px-4 md:px-6">
            <ScrollAnimationWrapper className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                📅 Upcoming Community Events
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                Join us on the ground & online. Let’s learn, build and grow —
                together.
              </p>
            </ScrollAnimationWrapper>
            <div className="max-w-3xl mx-auto">
              <div className="relative space-y-12 after:absolute after:inset-y-0 after:w-0.5 after:bg-border after:left-4">
                {events.map((event, index) => (
                  <ScrollAnimationWrapper key={index} className="relative z-10">
                    <div className="relative pl-12">
                      <div className="absolute left-4 top-1 h-8 w-8 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <Card
                        key={event.name}
                        className="overflow-hidden shadow-lg"
                      >
                        <CardContent className="flex flex-col md:flex-row items-center p-6 gap-6">
                          <Image
                            src={event.image}
                            alt={event.name}
                            width={200}
                            height={200}
                            className="w-full md:w-48 h-48 object-cover rounded-lg aspect-square"
                            data-ai-hint={event.aiHint}
                          />
                          <div className="space-y-4 flex-1">
                            <h3 className="text-xl font-bold font-headline">
                              {event.name}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4 flex-shrink-0" />
                              <span>
                                {event.location} &middot; {event.format}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4 flex-shrink-0" />
                              <span>{event.date}</span>
                            </div>
                            <Button className="w-full sm:w-auto mt-2" disabled>
                              Stay Tuned
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
