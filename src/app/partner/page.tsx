'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, CheckCircle2 } from 'lucide-react';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const partnerFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  partnership_type: z.string({
    required_error: 'Please select a partnership type.',
  }),
  subject: z
    .string()
    .min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<z.infer<typeof partnerFormSchema>>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof partnerFormSchema>) {
    await fetch('https://formbold.com/s/oPGwM', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-white">
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <ScrollAnimationWrapper className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline">
                  Got Ideas? Partnerships?
                  <br />
                  Let's Build Together.
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground">
                  Whether you're a startup, brand, creator, or someone who
                  vibes with our mission — we’d love to connect.
                </p>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper
                delay={200}
                className="w-full max-w-2xl mt-12"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">
                      <span className="text-sm font-medium text-muted-foreground">
                        No spam. Just genuine collabs. Promise 🤝
                      </span>
                      <br />
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center text-center p-8 bg-secondary rounded-lg">
                        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                        <h2 className="text-2xl font-bold mb-2">
                          Message Sent!
                        </h2>
                        <p className="text-muted-foreground">
                          Thanks for reaching out. We'll get back to you soon.
                        </p>
                      </div>
                    ) : (
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-6 text-left"
                        >
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your Name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="partnership_type"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>I want to partner with</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select an option" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="Techies Community">
                                      Techies Community
                                    </SelectItem>
                                    <SelectItem value="Techez Products">
                                      Techez Products
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="What's this about?"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us more..."
                                    rows={5}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="submit" className="w-full" size="lg">
                            Send Message
                          </Button>
                        </form>
                      </Form>
                    )}
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper
                delay={400}
                className="w-full max-w-2xl mx-auto mt-16 text-center"
              >
                <h3 className="text-2xl font-bold font-headline">
                  Or Reach Us Directly
                </h3>
                <p className="text-muted-foreground mt-2">
                  We typically respond within 24 hours.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-8 gap-y-4">
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
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-secondary">
          <div className="container px-4 md:px-6">
            <ScrollAnimationWrapper className="flex flex-col items-center space-y-6 text-center">
              <p className="text-xl font-bold max-w-2xl">
                Want to join our Techez ecosystem as a contributor, partner, or
                community mentor? Let's talk.
              </p>
              <Button asChild>
                <Link href="https://chat.whatsapp.com/ESI9d1MyJ6NE1Pa3YHQ7GR">Join the Community</Link>
              </Button>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </main>
    </div>
  );
}
