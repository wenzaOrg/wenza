"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { FaStar, FaArrowRight, FaCode, FaBriefcase, FaPalette } from 'react-icons/fa';

/* ─── Pill colors for the tilted book-spine cards ─── */
const PILL_COLORS = [
  'bg-orange-400',
  'bg-pink-300',
  'bg-amber-700',
  'bg-yellow-400',
  'bg-purple-400',
  'bg-cyan-400',
  'bg-green-400',
  'bg-teal-400',
];

/* ─── Row accent border colors (warm brand tones) ─── */
const ROW_ACCENTS = [
  'border-wenza-border',
  'border-wenza-border',
  'border-wenza-border',
];

/* ─── Course data grouped by category ─── */
const courseCategories = [
  {
    name: "Tech & Programming",
    icon: <FaCode className="text-lg" />,
    courses: [
      { title: "Intro to Python", desc: "Learn Python fundamentals, variables, loops, functions, and build real projects from scratch.", rating: 4.9, price: "₦3,500" },
      { title: "JavaScript Mastery", desc: "Master modern JavaScript with ES6+, async patterns, and DOM manipulation techniques.", rating: 4.8, price: "₦4,000" },
      { title: "React & Next.js", desc: "Build production-ready web apps with React components, hooks, and Next.js server rendering.", rating: 4.9, price: "₦5,500" },
      { title: "Data Structures", desc: "Understand arrays, linked lists, trees, graphs, and key algorithms for coding interviews.", rating: 4.7, price: "₦3,000" },
      { title: "Git & DevOps", desc: "Version control with Git, CI/CD pipelines, Docker basics, and deployment workflows.", rating: 4.6, price: "₦2,500" },
      { title: "Mobile with Flutter", desc: "Create cross-platform iOS and Android apps using Flutter and Dart programming language.", rating: 4.8, price: "₦5,000" },
      { title: "Cloud Computing", desc: "AWS and Azure fundamentals, serverless architecture, and cloud deployment strategies.", rating: 4.7, price: "₦4,500" },
    ]
  },
  {
    name: "Business & Entrepreneurship",
    icon: <FaBriefcase className="text-lg" />,
    courses: [
      { title: "Start a Business", desc: "From idea validation to launch — everything you need to build a successful Nigerian startup.", rating: 4.8, price: "₦2,500" },
      { title: "Financial Literacy", desc: "Master budgeting, investing, and personal finance strategies tailored for the Nigerian economy.", rating: 4.7, price: "₦2,000" },
      { title: "Sales Strategy", desc: "Proven sales frameworks, negotiation techniques, and closing strategies for B2B and B2C.", rating: 4.6, price: "₦3,000" },
      { title: "Business Planning", desc: "Write compelling business plans, financial projections, and investor pitch decks.", rating: 4.8, price: "₦3,500" },
      { title: "E-commerce Setup", desc: "Launch and grow your online store with payment integration and logistics management.", rating: 4.5, price: "₦2,500" },
      { title: "Leadership Skills", desc: "Build high-performing teams, manage conflict, and develop your leadership presence.", rating: 4.7, price: "₦3,000" },
    ]
  },
  {
    name: "Design & Creativity",
    icon: <FaPalette className="text-lg" />,
    courses: [
      { title: "UI/UX Design", desc: "Design beautiful, user-centered interfaces with Figma, wireframing, and usability testing.", rating: 4.7, price: "FREE", free: true },
      { title: "Graphic Design", desc: "Create stunning visuals with typography, color theory, layout design, and brand identity.", rating: 4.6, price: "₦2,500" },
      { title: "Motion Graphics", desc: "Bring designs to life with After Effects animations, transitions, and visual storytelling.", rating: 4.8, price: "₦4,000" },
      { title: "Brand Identity", desc: "Build memorable brands with logo design, style guides, and cohesive visual systems.", rating: 4.5, price: "₦3,000" },
      { title: "3D Design Basics", desc: "Introduction to Blender for 3D modeling, texturing, lighting, and rendering scenes.", rating: 4.6, price: "₦3,500" },
      { title: "Photography", desc: "Master composition, lighting, editing, and storytelling through digital photography.", rating: 4.7, price: "₦2,000" },
      { title: "Illustration Art", desc: "Digital illustration techniques using Procreate and Adobe Illustrator for creative projects.", rating: 4.8, price: "₦3,000" },
    ]
  },
];

/* ─── Single Category Row Component ─── */
const CategoryRow = ({
  category,
  accentClass,
  activeIndex,
  onPillClick
}: {
  category: typeof courseCategories[0];
  accentClass: string;
  activeIndex: number;
  onPillClick: (idx: number) => void;
}) => {
  const courses = category.courses;

  return (
    <div className="mb-14 last:mb-0">
      {/* Row header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-wenza-primary/10 flex items-center justify-center text-wenza-primary">
            {category.icon}
          </div>
          <h3 className="text-[18px] md:text-[20px] font-bold text-wenza-card">{category.name}</h3>
        </div>
        <Link href="/courses" className="flex items-center gap-2 text-wenza-primary text-[14px] font-semibold hover:gap-3 transition-all group">
          SEE ALL <FaArrowRight className="text-[12px] group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="relative">
        <div
          className="absolute -bottom-4 left-[-20px] right-[-20px] h-[50px] bg-white/5 rounded-[20px] pointer-events-none overflow-visible z-50"
        />
        {/* Course pills row — spread to fill width */}
        <div className="flex items-end justify-between w-full pb-4">
          {courses.map((course, idx) => {
            const isActive = idx === activeIndex;
            const pillColor = PILL_COLORS[idx % PILL_COLORS.length];

            if (isActive) {
              return (
                <div key={idx} className="flex items-end shrink-0">
                  <div
                    className={`
                    relative flex flex-col sm:flex-row items-stretch
                    bg-wenza-card rounded-[12px] border ${accentClass}
                    shadow-wenza
                    overflow-hidden
                    w-[260px] sm:w-[340px] md:w-[400px]
                    animate-expand-in
                  `}
                  >
                    {/* Course thumbnail */}
                    <div className={`
                    w-full sm:w-[150px] h-[130px] sm:h-[200px] shrink-0
                    ${pillColor} flex flex-col items-center justify-center p-4
                  `}>
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase tracking-wider text-center leading-tight">{course.title}</span>
                    </div>

                    {/* Course details */}
                    <div className="flex flex-col justify-center p-4 flex-1">
                      <h4 className="text-[14px] md:text-[15px] font-bold text-wenza-brown leading-snug mb-1">
                        {course.title}
                      </h4>
                      <p className="text-[11px] md:text-[12px] text-wenza-muted leading-relaxed mb-2.5 line-clamp-3">
                        {course.desc}
                      </p>

                      {/* Rating + Price */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-wenza-gold text-[11px]" />
                          ))}
                        </div>
                        <span className={`text-[13px] font-bold ${course.free ? 'text-wenza-success' : 'text-wenza-brown'}`}>
                          {course.price}
                        </span>
                      </div>

                      {/* Explore button */}
                      <Link
                        href="/courses"
                        className="inline-flex items-center justify-center border border-wenza-primary text-wenza-primary rounded-[8px] px-4 py-1 text-[12px] font-bold uppercase tracking-wider hover:bg-wenza-primary hover:text-white transition-all duration-300"
                      >
                        EXPLORE
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={idx}
                onClick={() => onPillClick(idx)}
                className={`
                relative w-[48px] md:w-[56px] lg:w-[64px] h-[150px] md:h-[180px] lg:h-[200px] rounded-[14px] ml-14
                ${pillColor} cursor-pointer
                border-[3px] border-white shadow-[2px_4px_12px_rgba(0,0,0,0.12)]
                hover:scale-105 hover:-translate-y-1
                transition-all duration-300 ease-out
                flex items-center justify-center shrink-0
              `}
                style={{ transform: 'rotate(-12deg)', transformOrigin: 'bottom center' }}
              >
                <span
                  className="text-white text-[10px] md:text-[11px] lg:text-[12px] font-semibold whitespace-nowrap tracking-wide drop-shadow-sm"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
                >
                  {course.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ─── Main Component ─── */
const FeaturedCourses = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>(
    courseCategories.map((_, catIdx) => {
      const positions = [5, 3, 0];
      return positions[catIdx] ?? 0;
    })
  );
  const [isPaused, setIsPaused] = useState(false);

  const advanceCategory = useCallback((catIdx: number) => {
    setActiveIndices(prev => {
      const next = [...prev];
      const maxIdx = courseCategories[catIdx].courses.length - 1;
      next[catIdx] = next[catIdx] >= maxIdx ? 0 : next[catIdx] + 1;
      return next;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timers = courseCategories.map((_, catIdx) => {
      return setInterval(() => {
        advanceCategory(catIdx);
      }, 4000 + catIdx * 800);
    });

    return () => timers.forEach(t => clearInterval(t));
  }, [isPaused, advanceCategory]);

  const handlePillClick = (catIdx: number, courseIdx: number) => {
    setActiveIndices(prev => {
      const next = [...prev];
      next[catIdx] = courseIdx;
      return next;
    });
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section
      className="w-full py-[72px] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background panel — spans from left edge to ~80% width */}
      <div className="absolute top-0 left-0 w-[85%] md:w-[80%] h-full bg-wenza-brown rounded-r-[24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-[36px] font-bold text-wenza-card font-lora mb-3">
            Explore Courses
          </h2>
          <p className="text-[15px] md:text-[16px] text-wenza-border max-w-[500px]">
            Browse through our top categories and find the perfect course to accelerate your career.
          </p>
        </div>

        {/* Category rows */}
        {courseCategories.map((category, catIdx) => (
          <CategoryRow
            key={catIdx}
            category={category}
            accentClass={ROW_ACCENTS[catIdx % ROW_ACCENTS.length]}
            activeIndex={activeIndices[catIdx]}
            onPillClick={(courseIdx) => handlePillClick(catIdx, courseIdx)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
