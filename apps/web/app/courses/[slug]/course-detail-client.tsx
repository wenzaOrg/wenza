'use client';

import * as React from 'react';
import { useRequest } from '@wenza/api-client';
import type { Course } from '@wenza/api-client/types';
import {
  Button,
  Card,
  Pill,
  Skeleton,
  CourseCurriculum,
  MentorCard,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  formatNaira,
} from '@wenza/ui';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  BookOpen,
  Trophy,
  HelpCircle
} from 'lucide-react';

interface CourseDetailClientProps {
  course: Course;
  aboutMdx: React.ReactNode;
}

export default function CourseDetailClient({ course: initialCourse, aboutMdx }: CourseDetailClientProps) {
  const { data: course, isLoading, error } = useRequest<Course>(`courses/${initialCourse.slug}`, {
    initialValue: initialCourse,
    refreshInterval: 0,
  });

  if (isLoading && !course) return <CourseDetailSkeleton />;
  if (error || !course) return <CourseDetailError />;

  const nextCohort = course.cohorts?.[0];

  return (
    <div className="min-h-screen bg-bg-dark text-white pb-20">
      {/* Sticky Secondary Nav */}
      <nav className="sticky top-16 z-40 w-full border-b border-white/10 bg-bg-dark/80 backdrop-blur-md hidden md:block">
        <div className="container flex items-center justify-between h-14">
          <div className="flex gap-8 text-sm font-medium text-white/60">
            {['Overview', 'Curriculum', 'Mentors', 'FAQs'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-brand-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <Button size="sm" variant="primary" className="h-9">
            Enrol Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/4" />
        </div>

        <div className="container relative">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <a href="/courses" className="hover:text-white transition-colors">Programmes</a>
            <ChevronRight size={14} />
            <span className="text-brand-primary">{course.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Pill variant="primary" className="mb-6 uppercase tracking-widest text-[10px]">
                {course.category} TRACK
              </Pill>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
                {course.title}
              </h1>
              <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-xl">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="primary" className="px-8 h-14 text-base">
                  Secure Your Seat <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="secondary" className="px-8 h-14 text-base">
                  Download Syllabus
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="relative">
              <Card className="p-8 border-white/10 bg-white/[0.02] relative z-10">
                <div className="grid grid-cols-2 gap-8">
                  <StatItem 
                    icon={<Calendar className="text-brand-primary" />} 
                    label="Next Cohort" 
                    value={nextCohort ? new Date(nextCohort.start_date).toLocaleDateString('en-GB', { month: 'short', day: 'numeric', year: 'numeric' }) : 'TBA'} 
                  />
                  <StatItem 
                    icon={<Clock className="text-brand-primary" />} 
                    label="Duration" 
                    value={`${course.duration_weeks} Weeks`} 
                  />
                  <StatItem 
                    icon={<Users className="text-brand-primary" />} 
                    label="Class Size" 
                    value="Max 30" 
                  />
                  <StatItem 
                    icon={<Trophy className="text-brand-primary" />} 
                    label="Certificate" 
                    value="Included" 
                  />
                </div>
                <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/40 text-sm">Tuition Fee</span>
                    <span className="text-2xl font-bold">{formatNaira(course.price_ngn)}</span>
                  </div>
                  {course.scholarship_price_ngn && (
                    <div className="flex justify-between items-center bg-brand-primary/5 p-3 rounded-lg border border-brand-primary/20">
                      <span className="text-brand-primary text-xs font-bold uppercase tracking-wider">Scholarship Price</span>
                      <span className="text-brand-primary font-bold">{formatNaira(course.scholarship_price_ngn)}</span>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="container">
          <p className="text-center text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-8">
            Master Industry-Standard Tools
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {course.tools_and_technologies?.map((tool, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                {/* eslint-disable-next-line @next/next/no-img-element -- External avatar URL from ui-avatars.com */}
                <img src={tool.logo_url} alt={tool.name} className="h-8 md:h-10 w-auto transition-transform group-hover:scale-110" />
                <span className="text-[10px] font-medium text-white/0 group-hover:text-white/40 transition-colors uppercase">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container pt-20 md:pt-32">
        <div className="grid lg:grid-cols-[1fr_400px] gap-20">
          <div className="space-y-32">
            
            {/* Overview */}
            <section id="overview" className="prose prose-invert prose-brand max-w-none">
              <h2 className="text-3xl font-bold mb-8 scroll-mt-32">Track Overview</h2>
              <div className="text-white/70 leading-relaxed text-lg">
                {aboutMdx}
              </div>
            </section>

            {/* Curriculum */}
            <section id="curriculum" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-3xl font-bold">Curriculum</h2>
              </div>
              <CourseCurriculum curriculum={course.curriculum} />
            </section>

            {/* Outcomes */}
            <section id="outcomes" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-8">Career Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 border-white/5 bg-white/[0.01]">
                  <h3 className="text-lg font-bold mb-6">What you’ll achieve</h3>
                  <ul className="space-y-4">
                    {course.outcomes?.map((outcome, i) => (
                      <li key={i} className="flex gap-3 text-sm text-white/70">
                        <CheckCircle2 size={18} className="text-brand-primary shrink-0 mt-0.5" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </Card>
                <div className="space-y-4 text-sm">
                  {course.career_outcomes?.map((role, i) => (
                    <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                      <div className="font-bold text-white mb-2">{role.role}</div>
                      <div className="flex justify-between text-white/50">
                        <span>Nigeria</span>
                        <span className="text-white">{role.nigeria_ngn}</span>
                      </div>
                      <div className="flex justify-between text-white/50 mt-1">
                        <span>Global</span>
                        <span className="text-white">{role.us_usd}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Mentors */}
            <section id="mentors" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Users size={24} />
                </div>
                <h2 className="text-3xl font-bold">Your Mentors</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {course.mentors?.map((mentor) => (
                  <MentorCard 
                    key={mentor.id}
                    name={mentor.name}
                    title={mentor.title}
                    avatar_url={mentor.avatar_url}
                    bio={mentor.bio}
                    linkedin_url={mentor.linkedin_url}
                  />
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <HelpCircle size={24} />
                </div>
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {course.faqs?.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-white/5">
                    <AccordionTrigger className="text-left text-lg font-bold py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/60 text-base leading-relaxed pb-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

          </div>

          {/* Sidebar CTA */}
          <aside className="hidden lg:block">
            <div className="sticky top-40 space-y-6">
              <Card className="p-8 border-brand-primary/30 bg-brand-primary/[0.03] shadow-[0_0_50px_-12px_rgba(var(--brand-primary-rgb),0.2)]">
                <h3 className="text-xl font-bold mb-4">Start your transformation today</h3>
                <p className="text-sm text-white/60 mb-8">
                  Enrolments are currently open for the Phoenix Cohort beginning in {nextCohort ? new Date(nextCohort.start_date).toLocaleDateString('en-GB', { month: 'long' }) : 'next month'}.
                </p>
                <Button variant="primary" className="w-full h-14 text-base font-bold shadow-2xl">
                  Enrol in Programme
                </Button>
                <p className="text-[10px] text-center text-white/30 mt-6 uppercase tracking-widest font-bold">
                  Next intake: {nextCohort ? new Date(nextCohort.start_date).toLocaleDateString('en-GB') : 'Coming soon'}
                </p>
              </Card>
              
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
                <h4 className="font-bold mb-3 text-sm">Need more information?</h4>
                <p className="text-xs text-white/50 mb-4 leading-relaxed">
                  Schedule a 15-minute call with an admissions advisor to discuss your goals.
                </p>
                <Button variant="ghost" className="w-full border-white/10 text-white/70 hover:text-white h-10">
                  Book a call
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex gap-4">
      <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-wider font-bold text-white/30 mb-0.5">{label}</p>
        <p className="text-sm font-bold text-white">{value}</p>
      </div>
    </div>
  );
}

function CourseDetailSkeleton() {
  return (
    <div className="container py-20 space-y-12">
      <Skeleton className="h-12 w-1/3" />
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
        <Skeleton className="h-96 w-full rounded-2xl" />
      </div>
    </div>
  );
}

function CourseDetailError() {
  return (
    <div className="container py-40 text-center">
      <h2 className="text-2xl font-bold mb-4">Programme not found</h2>
      <p className="text-white/60 mb-8">We couldn’t find the course you’re looking for.</p>
      <Button variant="primary" onClick={() => window.location.href = '/courses'}>
        Back to Courses
      </Button>
    </div>
  );
}
