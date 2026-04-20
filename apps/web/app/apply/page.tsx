'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Card, Input, FormField, Textarea } from '@wenza/ui';
import { ChevronLeft, Send } from 'lucide-react';
import Link from 'next/link';

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get('course');
  const courseTitle = courseSlug?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="min-h-screen bg-bg-dark py-20 md:py-32">
      <div className="container max-w-2xl">
        <Link 
          href={courseSlug ? `/courses/${courseSlug}` : '/courses'} 
          className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft size={16} />
          <span>Back to {courseTitle || 'Programmes'}</span>
        </Link>

        <div className="space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-white">Apply for Enrolment</h1>
          <p className="text-white/60">
            Start your journey today. Fill out the form below and our admissions team will 
            get back to you within 24 hours.
          </p>
        </div>

        <Card className="p-8 border-white/10 bg-white/[0.02]">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField label="Full Name" name="full_name">
                <Input placeholder="John Doe" className="bg-white/5 border-white/10" />
              </FormField>
              <FormField label="Email Address" name="email">
                <Input type="email" placeholder="john@example.com" className="bg-white/5 border-white/10" />
              </FormField>
            </div>

            <FormField label="Phone Number" name="phone_number">
              <Input placeholder="+234 ..." className="bg-white/5 border-white/10" />
            </FormField>

            <FormField label="Selected Programme" name="course_title">
              <Input 
                value={courseTitle || ''} 
                className="bg-white/10 border-white/10 text-white/50 cursor-not-allowed" 
                readOnly 
              />
            </FormField>

            <FormField label="Why do you want to join Wenza?" name="reason">
              <Textarea 
                placeholder="Tell us about your goals and expectations..." 
                className="bg-white/5 border-white/10 min-h-[120px]"
              />
            </FormField>

            <Button variant="primary" className="w-full h-14 text-base font-bold">
              Submit Application <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Card>
      </div>
    </main>
  );
}
