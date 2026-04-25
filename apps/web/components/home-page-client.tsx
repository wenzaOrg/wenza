'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion, useReducedMotion } from 'framer-motion';
import { useRequest } from '@wenza/api-client';
import { CourseCard, TestimonialMarquee, Button } from '@wenza/ui';
import {
  Accessibility,
  Target,
  ShieldCheck,
  PlayCircle,
  Users,
  Calendar,
  ClipboardList,
  MonitorPlay,
  GraduationCap,
  ArrowRight,
  Quote,
} from 'lucide-react';
import type { Course, Testimonial } from '@wenza/api-client/types';

export function HomePageClient() {
  const prefersReducedMotion = useReducedMotion();

  // Fetch Featured Courses
  const { data: featuredCoursesData, loading: coursesLoading } =
    useRequest<Course[]>('/courses/featured');
  const featuredCourses = featuredCoursesData || [];

  const { data: testimonialsData } =
    useRequest<Testimonial[]>('/testimonials?is_featured=true');
  const testimonials = testimonialsData || [];

  return (
    <>
      {/* 1. HERO — 2-column: text left, image right (Figma: "Studying Online is now much easier") */}
      <section className="relative overflow-hidden bg-bg-deep-brown px-6 py-20 md:px-20 md:py-28">
        {!prefersReducedMotion && (
          <motion.div
            className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary opacity-10 blur-[120px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.08, 0.14, 0.08],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-[40px] font-extrabold leading-[1.1] text-white md:text-[56px] lg:text-[64px]">
              From Zero to Your First Tech Job in Six Months.
            </h1>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-text-on-dark/80 md:text-lg lg:mx-0 mx-auto">
              Cohort-based programmes for ambitious beginners in Africa. No prior
              experience required — just the grit to build your future.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-button bg-primary px-8 py-4 font-medium text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary/50 outline-none w-full sm:w-auto"
              >
                Apply Now
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-button border border-white/30 bg-transparent px-6 py-4 font-medium text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50 outline-none w-full sm:w-auto"
              >
                <PlayCircle className="h-5 w-5 text-primary" />
                Watch how it works
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-gold lg:justify-start">
              <span>1,500+ certificates issued</span>
              <span className="hidden text-text-on-dark/50 sm:inline">•</span>
              <span>99.9% uptime</span>
              <span className="hidden text-text-on-dark/50 sm:inline">•</span>
              <span>90% scholarship available</span>
            </div>
          </div>

          {/* Right: visual frame (Figma's portrait + floating cards) */}
          <div className="relative mx-auto w-full max-w-[520px] aspect-[5/6]">
            {/* Soft backdrop blob */}
            <div className="absolute inset-0 -translate-x-6 translate-y-6 rounded-[2.5rem] bg-primary/15" />
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm">
              <Image
                src="/assets/images/hero/hero-student.png"
                alt="Wenza student learning"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover"
              />
            </div>

            {/* Floating: live class pill */}
            <div className="absolute left-[-18px] top-10 hidden rounded-2xl bg-bg-card px-5 py-4 shadow-card md:flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-text-muted uppercase tracking-wider">Live Cohort</div>
                <div className="text-sm font-bold text-text-heading">250+ enrolled</div>
              </div>
            </div>

            {/* Floating: congrats card */}
            <div className="absolute right-[-12px] bottom-12 hidden rounded-2xl bg-bg-card p-4 shadow-card md:block w-[220px]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-heading">Congratulations</div>
                  <div className="text-xs text-text-muted">Your admission is complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR — "Our Success" (Figma: 5-up stat strip) */}
      <section className="relative bg-bg-card px-6 py-16 md:px-20 shadow-sm">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              Our Success
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-text-muted">
              Real outcomes from real cohorts — built on accountability, mentorship, and verifiable credentials.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-4">
            {[
              { value: '99.9%', label: 'Platform uptime' },
              { value: '1500+', label: 'Certificates issued' },
              { value: '70%', label: 'Zero tech background' },
              { value: '₦12M', label: 'Average PM outcome' },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-heading text-3xl font-bold text-primary md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-medium text-text-muted uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ALL-IN-ONE FEATURES — 3-column icon-card grid (Figma's "All-in-One Cloud Software") */}
      <section className="bg-bg-page px-6 py-20 md:px-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              All-in-One Tech Academy
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-text-muted">
              Wenza is one place for everything you need to master a new tech skill — and land the job.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ClipboardList,
                title: 'Cohort Curriculum',
                description:
                  'Twelve to twenty-four weeks of structured, project-driven learning with weekly milestones.',
                accent: 'bg-primary/10 text-primary',
              },
              {
                icon: Calendar,
                title: 'Live Mentor Sessions',
                description:
                  'One-on-one and group sessions with engineers, designers, and PMs from leading tech companies.',
                accent: 'bg-gold/15 text-gold',
              },
              {
                icon: MonitorPlay,
                title: 'Hands-on Projects',
                description:
                  'Every module produces something you can ship — building a portfolio that proves what you can do.',
                accent: 'bg-primary/10 text-primary',
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group rounded-card border border-border bg-bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${f.accent}`}
                >
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading mb-3 text-xl font-bold text-text-heading">
                  {f.title}
                </h3>
                <p className="text-text-body leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY WENZA — Alternating feature blocks (Figma: "Tools For Teachers", "Class Management") */}
      <section className="bg-bg-card px-6 py-20 md:px-20 md:py-28 shadow-sm">
        <div className="mx-auto max-w-7xl space-y-24">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              The Wenza Difference
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-text-muted">
              Three commitments that shape every cohort we run.
            </p>
          </div>

          {[
            {
              image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
              eyebrow: 'Built for everyone',
              title: 'Accessibility',
              description:
                "Premium tech education shouldn't be gated by wealth. With scholarships up to 90%, we make entry possible for everyone with the grit to succeed.",
              cta: 'Apply for a scholarship',
              ctaHref: '/apply',
              reverse: false,
            },
            {
              image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
              eyebrow: 'Mentor-led, peer-driven',
              title: 'Accountability',
              description:
                "Real mentors. Weekly check-ins. Peer cohorts. We don't just sell you videos; we build an environment that forces you to cross the finish line.",
              cta: 'Meet our mentors',
              ctaHref: '/mentors',
              reverse: true,
            },
            {
              image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
              eyebrow: 'Verifiable credentials',
              title: 'Authenticity',
              description:
                'Verifiable credentials backed by a rigorous curriculum. Graduate with a portfolio that proves you can build exactly what employers need.',
              cta: 'Browse programmes',
              ctaHref: '/courses',
              reverse: false,
            },
          ].map((b, i) => (
            <div
              key={i}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                b.reverse ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Visual */}
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-card border border-border bg-bg-page group">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep-brown/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div className="h-12 w-12 items-center justify-center rounded-2xl bg-primary/90 flex shadow-lg">
                    {i === 0 ? <Accessibility className="h-6 w-6" /> : i === 1 ? <Target className="h-6 w-6" /> : <ShieldCheck className="h-6 w-6" />}
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div>
                <div className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                  {b.eyebrow}
                </div>
                <h3 className="font-heading mb-5 text-3xl font-bold text-text-heading md:text-4xl">
                  {b.title}
                </h3>
                <p className="mb-8 max-w-xl text-lg leading-relaxed text-text-body">
                  {b.description}
                </p>
                <Link
                  href={b.ctaHref}
                  className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary-hover outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  {b.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED COURSES — "Explore Course" (Figma's category tabs) */}
      <section className="bg-bg-page px-6 py-20 md:px-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
                Explore Programmes
              </h2>
              <p className="mt-3 max-w-xl text-text-muted">
                Intensive, outcome-driven tracks designed to launch your career.
              </p>
            </div>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary-hover"
            >
              See all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Category pill row (visual only — links to filtered catalogue) */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {[
              { label: 'All', value: 'all' },
              { label: 'Engineering', value: 'engineering' },
              { label: 'Data & AI', value: 'data' },
              { label: 'Design', value: 'design' },
              { label: 'Business', value: 'business' },
              { label: 'Security', value: 'security' },
            ].map((cat, i) => (
              <Link
                key={cat.value}
                href={cat.value === 'all' ? '/courses' : `/courses?category=${cat.value}`}
                className={`rounded-pill border-2 px-5 py-2 text-sm font-bold transition-all ${
                  i === 0
                    ? 'bg-primary border-primary text-white'
                    : 'bg-bg-card border-border text-text-muted hover:border-primary/30 hover:text-primary'
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {coursesLoading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          ) : featuredCourses.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredCourses.slice(0, 8).map((course: Course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <p className="text-center text-text-muted">
              No featured courses available at this time.
            </p>
          )}
        </div>
      </section>

      {/* 6. TESTIMONIAL — Single quote card style (Figma: "What They Say?") */}
      <section className="bg-bg-card px-6 py-20 md:px-20 md:py-28 shadow-sm">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                Success stories
              </div>
              <h2 className="font-heading mb-6 text-3xl font-bold text-text-heading md:text-4xl">
                What They Say
              </h2>
              <p className="mb-8 max-w-md text-lg leading-relaxed text-text-body">
                Hear from graduates who turned ambition into a tech career —
                shipped portfolios, real offers, and lives changed.
              </p>
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary-hover"
              >
                Read all stories <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              {testimonials && testimonials.length > 0 ? (
                <div className="relative rounded-card border border-border bg-bg-page p-8 shadow-card md:p-10">
                  <Quote
                    className="absolute -top-5 left-8 h-10 w-10 text-primary"
                    fill="currentColor"
                  />
                  <p className="mb-8 text-lg leading-relaxed text-text-body md:text-xl">
                    “{testimonials[0]?.content || 'A transformative cohort experience.'}”
                  </p>
                  <div className="flex items-center gap-4">
                    {testimonials[0]?.avatar_url ? (
                      <Image
                        src={testimonials[0].avatar_url}
                        alt={testimonials[0].author_name || 'Student'}
                        width={56}
                        height={56}
                        className="rounded-full border-2 border-gold object-cover"
                      />
                    ) : (
                      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {(testimonials[0]?.author_name || 'WS').charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-text-heading">
                        {testimonials[0]?.author_name || 'Wenza Student'}
                      </div>
                      <div className="text-sm text-text-muted">
                        {testimonials[0]?.author_role || 'Graduate'}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-card border border-border bg-bg-page p-10 shadow-card text-center">
                  <Quote className="mx-auto mb-4 h-10 w-10 text-primary" />
                  <p className="text-lg text-text-body italic">
                    Real stories from our first cohort, coming August 2026.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Marquee underneath as a richer secondary view */}
          {testimonials && testimonials.length > 1 && (
            <div className="mt-16 -mx-6 md:-mx-20 overflow-hidden">
              <TestimonialMarquee testimonials={testimonials} />
            </div>
          )}
        </div>
      </section>

      {/* 7. LATEST NEWS / PARTNERS (Figma: "Latest News and Resources") */}
      <section className="bg-bg-page px-6 py-20 md:px-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Trusted by employers
            </p>
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              Our Graduates Work At
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80">
            {[
              { name: 'paypal', url: 'https://www.vectorlogo.zone/logos/paypal/paypal-ar21.svg' },
              { name: 'Bloomberg', url: 'https://www.vectorlogo.zone/logos/bloomberg/bloomberg-ar21.svg' },
              { name: 'Andela', url: 'https://cdn.simpleicons.org/andela/3359FF' },
              { name: 'Stripe', url: 'https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg' },
              { name: 'Google', url: 'https://www.vectorlogo.zone/logos/google/google-icon.svg' },
              { name: 'Microsoft', url: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg' },
              { name: 'Meta', url: 'https://www.vectorlogo.zone/logos/facebook/facebook-official.svg' }, // Meta often redirects to FB
              { name: 'Amazon', url: 'https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg' },
            ].map((p, i) => (
              <div key={i} className="relative h-8 w-24 md:h-12 md:w-32 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <Image
                  src={p.url}
                  alt={p.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="bg-bg-deep-brown py-20 text-center px-6 md:px-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">
            Ready to change your story?
          </h2>
          <p className="text-white/70 text-lg">
            Join the next cohort and get mentored by world-class industry leads.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="px-12 h-14 text-lg">
              Apply for Scholarship
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="px-12 h-14 text-lg border-white/30 text-white hover:bg-white/10"
            >
              Full Enrollment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
