import Link from 'next/link';
import {
  Cog,
  Flame,
  Puzzle,
  Users,
  ArrowRight,
  Globe,
  Paintbrush,
  Smartphone,
  Megaphone,
  Network,
  Sparkles,
} from 'lucide-react';



import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import TechFloatingElements from '@/components/TechFloatingElements';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

const services = [
    {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Custom AI Solutions',
    description: 'Automate tasks. Accelerate growth.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Website Development',
    description: 'Lightning-fast, responsive, and SEO-friendly websites.',
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    title: 'UI/UX Design',
    description: 'Designs that look good and feel better.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Mobile App Development',
    description: 'Android, iOS, cross-platform — done right.',
  },
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: 'Startup Marketing & Branding',
    description: 'Full-stack digital marketing from 0 to brand.',
  },
  {
    icon: <Network className="h-8 w-8 text-primary" />,
    title: 'Digital Presence Building',
    description: 'Build your brand’s identity across platforms.',
  },
  
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] relative overflow-hidden">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full relative overflow-hidden flex items-center justify-center min-h-screen">
          {/* Dotted Background */}
          <div className="absolute inset-0 -z-20 h-full w-full bg-[radial-gradient(#d1d5db_0.7px,transparent_1px)] [background-size:12px_12px] opacity-30"></div>
  
          {/* Floating Elements */}
          <TechFloatingElements />
  
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <ScrollAnimationWrapper>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-7xl lg:text-7xl/none font-headline uppercase">
                    We Build Future Tools
                    <br />
                    For The Future Generation.
                  </h1>
                  <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground">
                    AI isn’t the future. We’re already living it. Welcome to Techez.
                  </p>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper delay={200}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="#">Explore Our Tools</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                    <Link href="https://chat.whatsapp.com/ESI9d1MyJ6NE1Pa3YHQ7GR">Join the Revolution</Link>
                  </Button>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>


        {/* What is Techez? Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <ScrollAnimationWrapper className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  We don’t build products. We build growth engines.
                </h2>
                <p className="max-w-[600px] text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground">
                  Techez is an AI automation company that creates future-first
                  tools. From content automation to personal branding, we give
                  creators, founders, and professionals their edge.
                </p>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper className="flex flex-col justify-center space-y-4" delay={200}>
                <blockquote className="border-l-4 border-primary pl-4 italic text-lg font-semibold">
                  "People build hustle. We build the machine that powers it."
                </blockquote>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>

        {/* ContentFlow Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollAnimationWrapper className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-3">
                <p className="text-sm font-bold tracking-wide uppercase text-muted-foreground">
                  Our AI tool to 10x your content game
                </p>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Your Content. Our Flow.
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Reels, LinkedIn, Tweets. Ideas, Scripts, Viral Hooks — all
                  auto-generated, all you. Your vibe + our engine = unstoppable
                  content.
                </p>
              </div>
              <Button asChild variant="link" size="lg" className="text-lg">
                <Link href="https://content-flow-murex.vercel.app/">
                  See ContentFlow <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Custom Services Section */}
        <section id='services' className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <ScrollAnimationWrapper className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  We Don’t Just Build Tools.
                  <br />
                  We Build Digital Powerhouses.
                </h2>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground">
                  Techez offers custom services that help startups, creators,
                  and brands go from idea → full digital presence.
                </p>
              </div>
            </ScrollAnimationWrapper>
            <div className="mx-auto flex flex-wrap items-stretch justify-center gap-8 pt-8 w-full max-w-6xl">
              {services.map((service, index) => (
                <ScrollAnimationWrapper key={service.title} delay={index * 100} className="flex">
                  <Card
                    className="flex flex-col w-full max-w-xs text-center bg-background shadow-lg border-2 border-transparent hover:border-primary transition-colors duration-300 h-full"
                  >
                    <CardHeader className="items-center">
                      {service.icon}
                      <CardTitle className="text-xl font-bold font-headline pt-4">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-md text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              ))}
            </div>
            <ScrollAnimationWrapper className="pt-8 text-center" delay={500}>
              <p className="text-lg mb-4 font-semibold">
                Want to build something custom with us?
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Book a Free Discovery Call</Link>
              </Button>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Why Techez Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'AI First', icon: <Cog className="h-8 w-8 text-primary" />, description: 'Tools powered by intelligent automation.' },
                { title: 'Bold Vision', icon: <Flame className="h-8 w-8 text-primary" />, description: 'We don\'t follow trends. We build them.' },
                { title: 'Creator-Centric', icon: <Puzzle className="h-8 w-8 text-primary" />, description: 'We help you grow — personally and professionally.' },
                { title: 'Community-Backed', icon: <Users className="h-8 w-8 text-primary" />, description: 'Your growth journey isn\'t solo anymore.' },
              ].map((card, index) => (
                <ScrollAnimationWrapper key={card.title} delay={index * 100}>
                  <Card className="border-2 h-full">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-2xl font-bold font-headline">
                        {card.title}
                      </CardTitle>
                      {card.icon}
                    </CardHeader>
                    <CardContent>
                      <p className="text-md text-muted-foreground">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* The Techies Community Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <ScrollAnimationWrapper className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Not Just Builders. We’re a Movement.
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Techies Community — run by Techez — is where builders, dreamers,
                and founders come together. We cover tech, startups, design,
                coding, and earning online.
              </p>
              <p className="text-xl font-bold font-headline">
                No gatekeeping. Only growth. Together.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={200}>
              <Button asChild className="mx-auto">
                <Link href="https://chat.whatsapp.com/ESI9d1MyJ6NE1Pa3YHQ7GR">
                  Join the Community <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <ScrollAnimationWrapper className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline">
                  You’re Either Watching the Future,
                  <br />
                  Or You’re Building It With Us.
                </h2>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper delay={200}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="#">Start Creating</Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Link href="https://chat.whatsapp.com/ESI9d1MyJ6NE1Pa3YHQ7GR">Join Our Ecosystem</Link>
                  </Button>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
