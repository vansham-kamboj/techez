'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, CheckCircle2, Mail, Phone } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
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
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

const appointmentFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  service: z.string({ required_error: 'Please select a service.' }),
  date: z.date({ required_error: 'A date is required.' }),
  time: z.string({ required_error: 'A time slot is required.' }),
  brief: z
    .string()
    .min(10, { message: 'Brief must be at least 10 characters.' }),
});

const services = [
  'Website Development',
  'UI/UX Design',
  'Mobile App Development',
  'Startup Marketing & Branding',
  'Digital Presence Building',
  'Custom Build',
];

const timeSlots = [
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '01:00 PM - 02:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM',
  '05:00 PM - 06:00 PM',
  '06:00 PM - 07:00 PM',
  '07:00 PM - 08:00 PM',
  '08:00 PM - 09:00 PM',
  '09:00 PM - 10:00 PM',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<z.infer<typeof appointmentFormSchema>>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      brief: '',
    },
  });

  async function onSubmit(values: z.infer<typeof appointmentFormSchema>) {
 await fetch('https://formbold.com/s/oyGyJ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...values,
        date: format(values.date, 'yyyy-MM-dd'), // Format date for API
      }),
    });

 console.log(values);
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-white">
        <section className="w-full py-20 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-12">
              <ScrollAnimationWrapper className="space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                  We Don’t Just Build Tools.
                  <br />
                  We Build Digital Powerhouses.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Book a free consultation call and let’s build your brand’s
                  digital future.
                </p>
              </ScrollAnimationWrapper>

              {submitted ? (
                <ScrollAnimationWrapper className="flex flex-col items-center justify-center text-center p-8 bg-secondary rounded-lg">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Thanks!</h2>
                  <p className="text-muted-foreground">
                    We'll reach out to you soon.
                  </p>
                </ScrollAnimationWrapper>
              ) : (
                <ScrollAnimationWrapper
                  delay={200}
                  className="w-full p-8 border rounded-lg shadow-sm bg-background"
                >
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
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
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="you@example.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="(123) 456-7890"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Select Service</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Choose a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {services.map((service) => (
                                    <SelectItem key={service} value={service}>
                                      {service}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Preferred Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={'outline'}
                                      className={cn(
                                        'w-full justify-start text-left font-normal',
                                        !field.value && 'text-muted-foreground'
                                      )}
                                    >
                                      <CalendarIcon className="mr-2 h-4 w-4" />
                                      {field.value ? (
                                        format(field.value, 'PPP')
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => date < new Date() || date < new Date('1900-01-01')}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Time Slot</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Choose a time" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="brief"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Brief</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us a little bit about your project..."
                                className="resize-none"
                                rows={5}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex flex-col items-center">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full md:w-auto transition-transform hover:scale-105"
                        >
                          Book Appointment
                        </Button>
                      </div>
                    </form>
                  </Form>
                </ScrollAnimationWrapper>
              )}
              <ScrollAnimationWrapper
                delay={400}
                className="w-full max-w-2xl mx-auto mt-16 text-center"
              >
                <h3 className="text-2xl font-bold font-headline">
                  Or Reach Us Directly
                </h3>
                <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-8 gap-y-4 text-muted-foreground">
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
              <ScrollAnimationWrapper className="text-center">
                <p className="text-sm text-muted-foreground">
                  P.S. You won’t be ghosted. We reply within 24 hours 😉
                </p>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
