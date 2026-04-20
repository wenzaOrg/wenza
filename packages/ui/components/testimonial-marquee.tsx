'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card, CardContent } from './card';

export interface Testimonial {
  id: number;
  author_name: string;
  author_role: string;
  content: string;
  source: string;
  avatar_url?: string | null;
}

export interface TestimonialMarqueeProps {
  testimonials: Testimonial[];
}

export function TestimonialMarquee({ testimonials }: TestimonialMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  // Duplicate testimonials to create seamlessly looping sequence
  const loopedTestimonials = [...testimonials, ...testimonials];

  const content = (
    <div className="flex gap-6 py-4">
      {loopedTestimonials.map((testimonial, idx) => (
        <Card
          key={`${testimonial.id}-${idx}`}
          variant="default"
          className="w-[300px] shrink-0 md:w-[400px]"
        >
          <CardContent className="pt-6">
            <div className="mb-4 text-text-muted">
              <svg className="h-6 w-6 text-gold/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <q className="mb-6 block text-sm leading-relaxed text-text-body md:text-base before:content-[''] after:content-[''] quotes-none">
              {testimonial.content}
            </q>
            <div>
              <div className="font-heading font-semibold text-text-heading">
                {testimonial.author_name}
              </div>
              <div className="text-sm text-text-muted">{testimonial.author_role}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient masks for smooth fade in/out on edges */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-bg-page to-transparent md:w-32" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-bg-page to-transparent md:w-32" />

      {prefersReducedMotion ? (
        <div className="flex gap-6 overflow-x-auto pb-4 pl-4 sm:pl-0 snap-x">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              variant="default"
              className="w-[300px] shrink-0 snap-center md:w-[400px]"
            >
              <CardContent className="pt-6">
                <q className="mb-6 block text-sm leading-relaxed text-text-body md:text-base before:content-[''] after:content-[''] quotes-none">
                  {testimonial.content}
                </q>
                <div>
                  <div className="font-heading font-semibold text-text-heading">
                    {testimonial.author_name}
                  </div>
                  <div className="text-sm text-text-muted">{testimonial.author_role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex w-max"
          animate={{ x: '-50%' }}
          transition={{
            duration: 30, // Base duration for full loop
            ease: 'linear',
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {content}
        </motion.div>
      )}
    </div>
  );
}
