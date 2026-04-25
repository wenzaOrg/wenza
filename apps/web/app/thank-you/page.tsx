import * as React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Users,
  ArrowRight,
  BookOpen,
  Clock,
  Mail,
} from 'lucide-react';
import { Card, Button } from '@wenza/ui';

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ThankYouPage({ searchParams }: Props) {
  const reference =
    typeof searchParams.reference === 'string'
      ? searchParams.reference
      : 'APP-XXXXXX';
  const mainUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL || '';

  return (
    <main className="min-h-screen bg-bg-page py-12 md:py-20">
      <div className="container mx-auto max-w-3xl px-6 md:px-20">
        {/* Header */}
        <div className="mb-12 space-y-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
            <CheckCircle2 size={32} />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Application received
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-text-heading md:text-5xl">
              Thank you — we’ve got it.
            </h1>
            <p className="mx-auto max-w-xl text-base text-text-muted md:text-lg">
              Your application to Wenza Academy has been successfully submitted. 
              Our team reviews every application carefully to ensure a great cohort experience.
            </p>
          </div>
        </div>

        {/* Reference card */}
        <Card className="mb-10 p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-2 md:divide-x md:divide-border">
            <div className="space-y-2 md:pr-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Application reference
              </p>
              <p className="font-mono text-2xl font-bold tracking-[0.15em] text-text-heading md:text-3xl">
                {reference}
              </p>
              <p className="text-sm text-text-muted">
                Save this for your records.
              </p>
            </div>
            <div className="flex items-center gap-4 md:pl-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                  Estimated review
                </p>
                <p className="font-heading text-lg font-bold text-text-heading">
                  Within 2 business days
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* What happens next */}
        <section className="mb-10">
          <h2 className="mb-6 font-heading text-2xl font-bold text-text-heading">
            What happens next
          </h2>
          <ol className="space-y-4">
            {[
              {
                title: 'Application review',
                body: 'Our admissions team will review your profile and background against the programme requirements.',
              },
              {
                title: 'Interview (if shortlisted)',
                body: 'If shortlisted, we’ll reach out to schedule a brief conversation about your goals and expectations.',
              },
              {
                title: 'Decision & onboarding',
                body: 'You’ll receive your decision by email. Accepted students are guided through onboarding for the next cohort.',
              },
            ].map((s, i) => (
              <li
                key={s.title}
                className="flex gap-4 rounded-card border border-border bg-bg-card p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-semibold text-text-heading">{s.title}</p>
                  <p className="mt-1 text-sm text-text-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA cards */}
        <section className="mb-10">
          <h2 className="mb-6 font-heading text-2xl font-bold text-text-heading">
            While you wait
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/courses"
              className="group block"
            >
              <Card className="flex h-full flex-col p-6 transition-all hover:border-primary/40 hover:shadow-card">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen size={20} />
                </div>
                <h3 className="mb-1.5 font-heading text-lg font-bold text-text-heading">
                  Explore programmes
                </h3>
                <p className="mb-5 flex-grow text-sm text-text-body">
                  Browse our range of technical courses and find your perfect fit
                  while you wait.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View courses
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Card>
            </Link>

            <a
              href={
                process.env.NEXT_PUBLIC_WHATSAPP_URL ||
                '#'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="flex h-full flex-col p-6 transition-all hover:border-success/40 hover:shadow-card">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-success/10 text-success">
                  <Users size={20} />
                </div>
                <h3 className="mb-1.5 font-heading text-lg font-bold text-text-heading">
                  Join community
                </h3>
                <p className="mb-5 flex-grow text-sm text-text-body">
                  Connect with fellow learners and get the latest updates in our
                  community group.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-success">
                  Join WhatsApp
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Card>
            </a>
          </div>
        </section>

        {/* Support */}
        <Card className="mb-10 p-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-bg-page text-text-muted">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-semibold text-text-heading">
                  Questions about your application?
                </p>
                <p className="text-sm text-text-muted">
                  Reach out and reference your application code.
                </p>
              </div>
            </div>
            <a
              href="mailto:admissions@wenza.com"
              className="text-sm font-semibold text-primary hover:underline"
            >
              admissions@wenza.com
            </a>
          </div>
        </Card>

        <div className="text-center">
          <Link href="/">
            <Button variant="outline" size="md">
              Return to Wenza homepage
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

