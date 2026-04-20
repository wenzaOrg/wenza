'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion, useReducedMotion } from 'framer-motion';
import { useRequest } from '@wenza/api-client';
import { CourseCard, TestimonialMarquee } from '@wenza/ui';
import { Accessibility, Target, ShieldCheck } from 'lucide-react';
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
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-bg-deep-brown px-4 py-28 md:py-40">
        {/* Subtle dynamic background */}
        {!prefersReducedMotion && (
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-10 blur-[100px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
        <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
          <h1 className="font-heading text-[40px] font-extrabold leading-[1.1] text-white md:text-[64px] max-w-[12ch] mx-auto">
            From Zero to Your First Tech Job in Six Months.
          </h1>
          <p className="mt-6 max-w-[50ch] text-base text-text-on-dark/80 md:text-lg">
            Cohort-based programmes for ambitious beginners in Africa. No prior experience required — just the grit to build your future.
          </p>

          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-4 lg:gap-4 md:gap-4 justify-center">
            <Link
              href="/apply"
              className="rounded-button bg-primary px-8 py-4 text-center font-medium text-white transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary/50 outline-none w-full sm:w-auto"
            >
              Apply Now
            </Link>
            <Link
              href="/courses"
              className="rounded-button border border-white/30 bg-transparent px-8 py-4 text-center font-medium text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50 outline-none w-full sm:w-auto"
            >
              Browse Courses
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium text-gold md:gap-x-6">
            <span>1,500+ certificates issued</span>
            <span className="hidden text-text-on-dark/60 sm:inline">•</span>
            <span>99.9% uptime</span>
            <span className="hidden text-text-on-dark/60 sm:inline">•</span>
            <span>90% scholarship available</span>
          </div>
        </div>
      </section>

      {/* 2. Stats bar */}
      <section className="bg-bg-card px-4 py-12 shadow-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-4">
          <div>
            <div className="font-heading text-3xl font-bold text-text-heading md:text-4xl">99.9%</div>
            <div className="mt-2 text-sm text-text-muted">Platform uptime</div>
          </div>
          <div>
            <div className="font-heading text-3xl font-bold text-text-heading md:text-4xl">1500+</div>
            <div className="mt-2 text-sm text-text-muted">Certificates issued</div>
          </div>
          <div>
            <div className="font-heading text-3xl font-bold text-text-heading md:text-4xl">70%</div>
            <div className="mt-2 text-sm text-text-muted">Zero tech background</div>
          </div>
          <div>
            <div className="font-heading text-3xl font-bold text-text-heading md:text-4xl">₦12M</div>
            <div className="mt-2 text-sm text-text-muted">Average PM outcome</div>
          </div>
        </div>
      </section>

      {/* 3. Featured Courses */}
      <section className="bg-bg-page px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              Featured Programmes
            </h2>
            <p className="mt-4 text-text-muted">
              Intensive, outcome-driven tracks designed to launch your career.
            </p>
          </div>

          {coursesLoading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          ) : featuredCourses.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredCourses.slice(0, 4).map((course: Course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <p className="text-center text-text-muted">No featured courses available at this time.</p>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary-hover outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              View complete catalogue <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Wenza */}
      <section className="bg-bg-card px-4 py-20 shadow-sm md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              The Wenza Difference
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center md:text-left">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary md:mx-0">
                <Accessibility size={32} />
              </div>
              <h3 className="font-heading mb-4 text-xl font-bold text-text-heading">Accessibility</h3>
              <p className="text-text-muted">
                Premium tech education shouldn&apos;t be gated by wealth. With scholarships up to 90%, we make entry possible for everyone with the grit to succeed.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary md:mx-0">
                <Target size={32} />
              </div>
              <h3 className="font-heading mb-4 text-xl font-bold text-text-heading">Accountability</h3>
              <p className="text-text-muted">
                Real mentors. Weekly check-ins. Peer cohorts. We don&apos;t just sell you videos; we build an environment that forces you to cross the finish line.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary md:mx-0">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-heading mb-4 text-xl font-bold text-text-heading">Authenticity</h3>
              <p className="text-text-muted">
                Verifiable credentials backed by a rigorous curriculum. Graduate with a portfolio that proves you can build exactly what employers need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonial Marquee */}
      <section className="overflow-hidden bg-bg-page py-20 pb-10 md:py-28 md:pb-16">
        <div className="mx-auto mb-12 max-w-7xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
            Success Stories
          </h2>
        </div>
        {testimonials && testimonials.length > 0 && (
          <TestimonialMarquee testimonials={testimonials} />
        )}
      </section>

      {/* 6. Partner Logo Cloud */}
      <section className="bg-bg-page pb-20 pt-10 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="mb-8 text-sm font-medium uppercase tracking-wider text-text-muted">
            Our graduates work at
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative h-8 w-32 md:h-10 md:w-40">
                <Image
                  src={`/partners/partner-${i}.svg`}
                  alt={`Partner ${i}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="bg-bg-deep-brown px-4 py-20 text-center md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading mb-6 text-3xl font-extrabold text-white md:text-5xl">
            Ready to change your career?
          </h2>
          <p className="mb-10 text-lg text-text-on-dark/80">
            Join the next cohort and start building your future today.
          </p>
          <Link
            href="/apply"
            className="inline-block rounded-button bg-primary px-10 py-5 text-lg font-medium text-white transition-transform hover:scale-105 hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary/50 outline-none"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
