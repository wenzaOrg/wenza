'use client';

import React from 'react';
import Image from 'next/image';
import {
  Clock,
  Users,
  Calendar,
  TrendingUp,
  Check,
  ShieldCheck,
  Award,
  BookOpen,
  Share2,
  Star,
} from 'lucide-react';
import {
  Button,
  Card,
  Pill,
  CourseCurriculum,
  MentorCard,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@wenza/ui';
import { Course } from '@wenza/api-client/types';
import { formatNaira } from '@wenza/ui/lib/format';
import { motion } from 'framer-motion';
import {
  displayMentorName,
  displayMentorCompany,
} from '../../../lib/mentor-display';

interface Props {
  course: Course;
  aboutRendered: React.ReactNode;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function CourseDetailClient({ course, aboutRendered }: Props) {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'curriculum' | 'mentors' | 'faq'>(
    'overview'
  );

  return (
    <div className="flex flex-col min-h-screen bg-bg-page">
      {/* 1. HERO — full-bleed banner (Figma: large image with overlapping purchase card) */}
      <section className="relative bg-bg-deep-brown text-text-on-dark py-16 md:py-24 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src={`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600`}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-bg-deep-brown/60" />
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/15 to-transparent pointer-events-none z-10" />
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <div className="max-w-4xl space-y-6">
            <motion.div {...fadeIn}>
              <div className="text-sm font-medium text-white/60 mb-4">
                <span>Home</span> <span className="mx-2 text-primary">{"//"}</span>{' '}
                <span>Courses</span> <span className="mx-2 text-primary">{"//"}</span>{' '}
                <span className="text-primary">{course.title}</span>
              </div>
              <Pill
                variant="secondary"
                className="bg-white/10 text-white border-white/20 mb-4"
              >
                {course.category.charAt(0).toUpperCase() + course.category.slice(1)}{' '}
                Programme
              </Pill>
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight leading-[1.1]">
                {course.title}
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-text-on-dark/80 max-w-2xl leading-relaxed"
              {...fadeIn}
              transition={{ delay: 0.1 }}
            >
              {course.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm"
              {...fadeIn}
              transition={{ delay: 0.15 }}
            >
              <span className="inline-flex items-center gap-2 text-white/80">
                <Star className="h-4 w-4 fill-gold text-gold" /> 4.8 / 5 rating
              </span>
              <span className="inline-flex items-center gap-2 text-white/80">
                <Users className="h-4 w-4 text-primary" /> Cohort-based
              </span>
              <span className="inline-flex items-center gap-2 text-white/80">
                <Clock className="h-4 w-4 text-primary" /> {course.duration_weeks} Weeks
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STICKY DETAIL ROW — left: tabs/content, right: purchase card (Figma layout) */}
      <div className="container mx-auto px-6 md:px-20 -mt-12 relative z-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT — Tabs + content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Tab pill row (Figma's "Overview Overview Overview Overview" pills) */}
            <div className="flex flex-wrap gap-2 bg-bg-card border border-border rounded-card p-2 shadow-card">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'curriculum', label: 'Curriculum' },
                { key: 'mentors', label: 'Mentors' },
                { key: 'faq', label: 'FAQ' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                  className={`flex-1 min-w-[90px] rounded-button px-4 py-2.5 text-sm font-bold transition-all ${
                    activeTab === tab.key
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'bg-transparent text-text-muted hover:bg-bg-page hover:text-text-heading'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {activeTab === 'overview' && (
              <div className="space-y-12">
                {/* About */}
                {aboutRendered && (
                  <section className="space-y-6">
                    <SectionHeading title="About the Programme" />
                    <div className="prose prose-lg prose-brown max-w-none text-text-body/90 leading-relaxed">
                      {aboutRendered}
                    </div>
                  </section>
                )}

                {/* Outcomes */}
                <section className="space-y-8">
                  <SectionHeading title="What You'll Achieve" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.outcomes.map((outcome, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-4 p-5 bg-bg-card rounded-card border border-border shadow-sm hover:shadow-md transition-shadow"
                        {...fadeIn}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <div className="mt-0.5 bg-success/10 p-1.5 rounded-full flex-shrink-0">
                          <Check className="w-4 h-4 text-success" />
                        </div>
                        <span className="text-text-body font-medium leading-snug">
                          {outcome}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Tools */}
                <section className="space-y-8">
                  <SectionHeading
                    title="Tools of the Trade"
                    subtitle="Hands-on with industry-standard software used by top global firms."
                  />
                  <div className="flex flex-wrap gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
                    {course.tools_and_technologies.map((tool, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={tool.logo_url}
                          alt={tool.name}
                          className="h-12 w-auto object-contain"
                        />
                        <span className="text-xs font-bold text-text-muted uppercase tracking-widest">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <section className="space-y-8">
                <SectionHeading
                  title="Weekly Curriculum"
                  subtitle="A structured, zero-to-one path designed for mastery."
                />
                <CourseCurriculum curriculum={course.curriculum} />
              </section>
            )}

            {activeTab === 'mentors' && (
              <section className="space-y-8">
                <SectionHeading
                  title="Learn from the Best"
                  subtitle="Active professionals from world-class tech companies."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.mentors.map((mentor) => (
                    <MentorCard
                      key={mentor.id}
                      name={displayMentorName(mentor.name)}
                      title={mentor.title}
                      avatar_url={mentor.avatar_url}
                      bio={mentor.bio}
                      linkedin_url={mentor.linkedin_url}
                      company={displayMentorCompany(mentor.company)}
                    />
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'faq' && (
              <section className="space-y-8">
                <SectionHeading title="Frequently Asked Questions" />
                <Accordion type="single" collapsible className="w-full">
                  {course.faqs.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`faq-${idx}`}
                      className="border-b border-border/50 last:border-0 px-2"
                    >
                      <AccordionTrigger className="text-left py-6 text-lg font-bold text-text-heading hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-text-body/70 text-base leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}
          </div>

          {/* RIGHT — Sticky purchase card (Figma: "$49.65 / Buy Now / This Course Included") */}
          <aside className="lg:col-span-4">
            <Card className="p-6 bg-bg-card border-border shadow-card sticky top-24">
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-extrabold text-text-heading">
                    {formatNaira(course.scholarship_price_ngn ?? course.price_ngn)}
                  </span>
                  {course.scholarship_price_ngn && (
                    <>
                      <span className="text-base text-text-muted line-through">
                        {formatNaira(course.price_ngn)}
                      </span>
                      <span className="text-sm font-bold text-primary">
                        Scholarship
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-primary font-medium">
                  Limited seats — next cohort begins soon
                </p>
              </div>

              <Button className="w-full h-12 mb-3 shadow-md text-base">
                Enroll Now
              </Button>
              <Button variant="secondary" className="w-full h-12 mb-6 text-base">
                Download Brochure
              </Button>

              {/* Course included */}
              <div className="border-t border-border pt-6 mb-6">
                <h3 className="text-base font-bold text-text-heading mb-4">
                  This Course Includes
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span className="text-text-body">Money back guarantee</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-text-body">
                      Access on all devices
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-text-body">
                      Certification of completion
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-text-body">
                      {course.duration_weeks} weeks of cohort sessions
                    </span>
                  </li>
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="border-t border-border pt-6 mb-6">
                <h3 className="text-base font-bold text-text-heading mb-3">
                  Prerequisites
                </h3>
                <p className="text-sm text-text-body/80 leading-relaxed">
                  {course.prerequisites ||
                    'No prior experience required. Just a laptop and a hunger to learn.'}
                </p>
              </div>

              {/* Share */}
              <div className="border-t border-border pt-6">
                <h3 className="text-base font-bold text-text-heading mb-3 flex items-center gap-2">
                  <Share2 className="h-4 w-4" /> Share this course
                </h3>
                <div className="flex gap-2">
                  {['Tw', 'Fb', 'Li', 'Wa'].map((s) => (
                    <button
                      key={s}
                      aria-label={`Share on ${s}`}
                      className="h-9 w-9 rounded-full border border-border bg-bg-page flex items-center justify-center text-xs font-bold text-text-muted hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </div>

      {/* 3. STAT STRIP — kept as quick-glance metrics (Figma: 4-up tile row above body) */}
      <section className="container mx-auto px-6 md:px-20 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <StatCard
            icon={<Clock className="w-6 h-6 text-primary" />}
            label="Duration"
            value={`${course.duration_weeks} Weeks`}
          />
          <StatCard
            icon={<Calendar className="w-6 h-6 text-primary" />}
            label="Format"
            value={course.format === 'cohort' ? 'Cohort-based' : 'Self-paced'}
          />
          <StatCard
            icon={<TrendingUp className="w-6 h-6 text-primary" />}
            label="Starting Salary"
            value={
              course.career_outcomes[0]?.nigeria_ngn
                ? `From ${course.career_outcomes[0].nigeria_ngn}`
                : 'High Demand'
            }
          />
          <StatCard
            icon={<Users className="w-6 h-6 text-primary" />}
            label="Mentor-led"
            value="1-on-1 Sessions"
          />
        </div>
      </section>

      {/* 4. CAREER OUTCOMES — dark feature panel (Figma's dark CTA strip) */}
      <section className="container mx-auto px-6 md:px-20 mb-20">
        <div className="bg-bg-dark text-white rounded-card p-8 md:p-16 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Your Career Trajectory
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Graduates of this programme don&rsquo;t just find jobs; they
                build careers in high-growth companies worldwide.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-gold text-3xl md:text-4xl font-bold">
                    ₦4M – ₦10M
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">
                    Local Salary Potential
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-gold text-3xl md:text-4xl font-bold">
                    $45k – $90k
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">
                    Global Freelance Rate
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {course.career_outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white/5 rounded-card border border-white/10 space-y-2"
                >
                  <h4 className="font-bold text-base text-white leading-snug">
                    {outcome.role}
                  </h4>
                  <div className="text-gold text-sm font-medium">
                    {outcome.nigeria_ngn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
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
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Card className="p-6 border-border bg-bg-card shadow-card flex items-center gap-4 hover:border-primary/30 transition-colors">
      <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">{icon}</div>
      <div className="space-y-1 min-w-0">
        <div className="text-xs font-bold text-text-muted uppercase tracking-widest">
          {label}
        </div>
        <div className="text-base font-extrabold text-text-heading leading-tight truncate">
          {value}
        </div>
      </div>
    </Card>
  );
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-text-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-body/60 text-base max-w-2xl">{subtitle}</p>
      )}
      <div className="h-1.5 w-12 bg-primary rounded-full mt-2" />
    </div>
  );
}
