import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, MessageSquare, Video, ChevronRight } from 'lucide-react';
import { Button } from '@wenza/ui';
import { ContentPageLayout } from '../../components/content-page-layout';

export const metadata: Metadata = {
  title: 'Student stories | Wenza',
  description: 'Stories from Wenza students as they build their tech careers.',
};

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-bg-deep-brown py-20 px-4 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-8 font-heading text-4xl font-bold text-white md:text-6xl">
            Student stories
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/80 font-medium leading-relaxed">
            We’ll share our students’ journeys here as they complete their programmes and move into their new careers.
          </p>
        </div>
      </section>

      <ContentPageLayout>
        {/* Expectation Setter Section */}
        <section className="mb-24">
          <div className="rounded-card bg-bg-card p-8 md:p-12 border border-border shadow-card text-center">
            <h2 className="mb-6 font-heading text-2xl font-bold text-text-heading">
              Launching soon
            </h2>
            <div className="space-y-6 text-lg text-text-body leading-relaxed max-w-2xl mx-auto">
              <p>
                Wenza’s first cohort begins in May 2026.
              </p>
              <p>
                We’re committed to publishing real stories from real students — no fabricated quotes, no paid testimonials, no stock photos.
              </p>
              <p>
                Check back after the Phoenix 2026 cohort graduates in August 2026 to read about their experience, the challenges they overcame, and where they landed professionally.
              </p>
            </div>
          </div>
        </section>

        {/* What to expect Section */}
        <section className="mb-24">
          <h2 className="mb-12 font-heading text-3xl font-bold text-text-heading text-center">
            What to expect
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Briefcase,
                title: 'Career journeys',
                description: 'Real graduates describing their path from application to first tech job.',
              },
              {
                icon: MessageSquare,
                title: 'Programme reviews',
                description: 'Honest reflections on the curriculum, mentors, and cohort experience.',
              },
              {
                icon: Video,
                title: 'Video stories',
                description: 'Short video interviews with graduates (coming soon).',
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-card bg-bg-page p-8 border border-border text-center">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-text-heading">{item.title}</h3>
                <p className="text-text-body leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meanwhile Section */}
        <section className="mb-24 rounded-card bg-bg-card p-10 border border-border text-center">
          <h2 className="mb-6 font-heading text-2xl font-bold text-text-heading">
            In the meantime...
          </h2>
          <p className="mb-10 text-lg text-text-body leading-relaxed max-w-xl mx-auto">
            While our first students are learning, here are the people building Wenza and guiding our cohort.
          </p>
          <Button variant="outline" asChild className="h-12 px-8 font-bold">
            <Link href="/mentors">
              Meet our mentors
            </Link>
          </Button>
        </section>

        {/* Final CTA Section */}
        <section className="rounded-card bg-bg-dark py-16 px-8 text-center text-white">
          <h2 className="mb-6 font-heading text-3xl font-bold text-white">Want to be part of the first cohort?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white opacity-90">
            Apply now to join the Phoenix 2026 cohort. Applications close soon.
          </p>
          <Button variant="primary" size="lg" asChild className="h-14 px-8 text-lg">
            <Link href="/apply">
              Apply now <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </ContentPageLayout>
    </div>
  );
}
