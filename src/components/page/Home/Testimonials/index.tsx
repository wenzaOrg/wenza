"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const testimonials = [
  {
    text: "Wenza's Python course and the live mentorship sessions completely changed my career trajectory. I went from zero coding knowledge to landing my first developer role in Lagos within 5 months. It really saves me time and effort — Wenza is exactly what Nigerian tech education has been lacking.",
    name: "Chidera Okafor",
    role: "Developer, Lagos",
    reviews: "12 reviews",
    initial: "C",
  },
  {
    text: "As a mum in Abuja, I learned digital marketing on my phone during nap times. The community on Wenza is incredible. The study groups kept me accountable, and having a real mentor to ask questions during live sessions made all the difference. Worth every Naira.",
    name: "Halima Yusuf",
    role: "Marketer, Abuja",
    reviews: "8 reviews",
    initial: "H",
  },
  {
    text: "I tried Udemy and Coursera but always dropped off. Wenza's live mentorship model is different — you can't hide. My mentor pushed me to actually build projects. The business course helped me write a proper plan. I got a loan and launched my fashion brand. Best investment ever.",
    name: "Oluwaseun Adebayo",
    role: "Entrepreneur, Ibadan",
    reviews: "15 reviews",
    initial: "O",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-wenza-bg py-[72px] px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left column — text content */}
          <div className="w-full lg:w-[45%]">
            {/* Label with lines */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-wenza-border" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-wenza-primary">
                Testimonial
              </span>
              <div className="w-8 h-[2px] bg-wenza-border" />
            </div>

            <h2 className="text-3xl md:text-[40px] font-bold text-wenza-brown font-lora mb-6 leading-tight">
              What They Say?
            </h2>

            <div className="space-y-4 text-[15px] text-wenza-text leading-relaxed mb-8">
              <p>
                Wenza has received thousands of positive ratings from learners across Nigeria.
              </p>
              <p>
                Many of our students and mentees have been greatly helped by the platform&apos;s practical, project-based approach.
              </p>
              <p>
                Are you one of them? Please share your experience.
              </p>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-3 border-2 border-wenza-primary text-wenza-primary rounded-[100px] px-6 py-2.5 text-[14px] font-semibold hover:bg-wenza-primary hover:text-white transition-all duration-300 group">
              Write your review
              <span className="w-8 h-8 rounded-full border border-wenza-primary flex items-center justify-center group-hover:border-white group-hover:bg-white/20 transition-all">
                <FaChevronRight className="text-[10px]" />
              </span>
            </button>
          </div>

          {/* Right column — image + testimonial card */}
          <div className="w-full lg:w-[55%] relative">
            <div className="relative">
              {/* Student image */}
              <div className="w-full max-w-[420px] mx-auto lg:ml-auto aspect-3/4 rounded-[20px] overflow-hidden relative shadow-[0_20px_60px_rgba(26,16,8,0.15)]">
                <Image
                  src="/images/testimonial-student.png"
                  alt="Wenza learner"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>

              {/* Navigation arrow */}
              <button
                onClick={goNext}
                className="absolute top-1/2 -right-2 md:right-0 lg:-right-5 -translate-y-1/2 w-12 h-12 rounded-full bg-wenza-primary text-white flex items-center justify-center shadow-[0_8px_24px_rgba(176,80,16,0.3)] hover:bg-wenza-primary-hover hover:scale-105 transition-all duration-300 z-20"
              >
                <FaChevronRight className="text-sm" />
              </button>

              {/* Prev arrow (subtle) */}
              <button
                onClick={goPrev}
                className="absolute top-1/2 -left-2 md:left-0 lg:-left-5 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-wenza-border text-wenza-muted flex items-center justify-center shadow-wenza hover:border-wenza-primary hover:text-wenza-primary transition-all duration-300 z-20"
              >
                <FaChevronLeft className="text-xs" />
              </button>

              {/* Testimonial quote card — overlapping bottom-right */}
              <div
                key={activeIndex}
                className="absolute -bottom-8 right-0 md:right-4 lg:-right-8 w-[85%] md:w-[75%] lg:w-[380px] bg-white rounded-[12px] border border-wenza-border shadow-[0_12px_40px_rgba(26,16,8,0.12)] p-6 z-10 animate-expand-in"
              >
                <p className="text-[13px] md:text-[14px] text-wenza-text italic leading-relaxed mb-4">
                  &ldquo;{current.text}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-[15px] font-bold text-wenza-brown">
                      {current.name}
                    </h4>
                    <p className="text-[12px] text-wenza-muted">{current.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-0.5 mb-1 justify-end">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-wenza-gold text-[12px]" />
                      ))}
                    </div>
                    <p className="text-[11px] text-wenza-muted">{current.reviews}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-16 lg:mt-14">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'bg-wenza-primary w-7'
                      : 'bg-wenza-border hover:bg-wenza-muted'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
