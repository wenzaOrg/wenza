import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, MessageSquare, Video, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@wenza/ui';

export const metadata: Metadata = {
  title: 'Student stories | Wenza',
  description: 'Stories from Wenza students as they build their tech careers.',
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO — light banner with breadcrumb (Figma pattern) */}
      <section className="relative bg-bg-card border-b border-border py-20 md:py-24 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[10%] -left-[8%] w-[35%] h-[60%] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute top-[10%] right-[-5%] w-[28%] h-[50%] bg-gold/15 blur-[100px] rounded-full" />
        </div>
        <div className="container mx-auto relative text-center max-w-3xl">
          <div className="text-sm font-medium text-text-muted mb-4">
            <span>Home</span> <span className="mx-2 text-primary">{"//"}</span>{' '}
            <span className="text-primary">Testimonials</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-heading mb-5 leading-[1.1]">
            Student <span className="text-primary">stories</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-body leading-relaxed">
            We&rsquo;ll share our students&rsquo; journeys here as they
            complete their programmes and move into their new careers.
          </p>
        </div>
      </section>

      {/* 2. LAUNCHING SOON — single quote card (Figma's "What They Say" centerpiece) */}
      <section className="bg-bg-page py-20 md:py-28 px-6 md:px-20">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-card bg-bg-card p-10 md:p-14 border border-border shadow-card">
            <Quote
              className="absolute -top-5 left-10 h-10 w-10 text-primary"
              fill="currentColor"
            />
            <div className="text-center">
              <div className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                Launching soon
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-heading mb-6">
                Real stories from real students
              </h2>
              <div className="space-y-4 text-lg text-text-body leading-relaxed max-w-2xl mx-auto">
                <p>
                  Wenza&rsquo;s first cohort begins in May 2026. We&rsquo;re
                  committed to publishing real stories from real students — no
                  fabricated quotes, no paid testimonials, no stock photos.
                </p>
                <p>
                  Check back after the Phoenix 2026 cohort graduates in August
                  2026 to read about their experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT TO EXPECT — 3-col feature grid */}
      <section className="bg-bg-card py-20 md:py-28 px-6 md:px-20 shadow-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <div className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Coming soon
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-heading">
              What to expect
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Briefcase,
                title: 'Career journeys',
                description:
                  'Real graduates describing their path from application to first tech job.',
              },
              {
                icon: MessageSquare,
                title: 'Programme reviews',
                description:
                  'Honest reflections on the curriculum, mentors, and cohort experience.',
              },
              {
                icon: Video,
                title: 'Video stories',
                description:
                  'Short video interviews with graduates (coming soon).',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-card bg-bg-page p-8 border border-border shadow-card text-center hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading mb-3 text-xl font-bold text-text-heading">
                  {item.title}
                </h3>
                <p className="text-text-body leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEANWHILE — meet mentors panel */}
      <section className="bg-bg-page py-20 md:py-28 px-6 md:px-20">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-card bg-bg-card p-10 md:p-14 border border-border shadow-card text-center">
            <h2 className="mb-5 font-heading text-2xl md:text-3xl font-bold text-text-heading">
              In the meantime&hellip;
            </h2>
            <p className="mb-10 text-lg text-text-body leading-relaxed max-w-xl mx-auto">
              While our first students are learning, here are the people
              building Wenza and guiding our cohort.
            </p>
            <Button variant="outline" asChild className="h-12 px-8 font-bold">
              <Link href="/mentors">Meet our mentors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="bg-bg-deep-brown py-20 md:py-28 px-6 md:px-20 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-6 font-heading text-3xl md:text-5xl font-extrabold text-white">
            Want to be part of the first cohort?
          </h2>
          <p className="mb-10 text-lg text-text-on-dark/80">
            Apply now to join the Phoenix 2026 cohort. Applications close soon.
          </p>
          <Button variant="primary" size="lg" asChild className="h-14 px-8 text-lg">
            <Link href="/apply">
              Apply now <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
