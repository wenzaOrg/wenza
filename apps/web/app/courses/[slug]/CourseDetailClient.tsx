'use client';

import React from 'react';
import { 
  Clock, 
  Users, 
  Calendar, 
  TrendingUp, 
  Check 
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
  AccordionTrigger
} from '@wenza/ui';
import { Course } from '@wenza/api-client/types';
import { formatNaira } from '@wenza/ui/lib/format';
import { motion } from 'framer-motion';
import { displayMentorName, displayMentorCompany } from '../../../lib/mentor-display';

interface Props {
  course: Course;
  aboutRendered: React.ReactNode;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function CourseDetailClient({ course, aboutRendered }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-bg-page pt-20">
      {/* 1. Hero Section */}
      <section className="bg-bg-deep-brown text-text-on-dark py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl space-y-8">
            <motion.div {...fadeIn}>
              <Pill variant="secondary" className="bg-white/10 text-white border-white/20 mb-4">
                {course.category.charAt(0).toUpperCase() + course.category.slice(1)} Programme
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
              className="flex flex-col sm:flex-row gap-4 pt-4"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" className="w-full sm:w-auto px-12 text-lg">
                Enroll Now
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <section className="container mx-auto px-4 -mt-10 relative z-20">
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
            value={course.career_outcomes[0]?.nigeria_ngn ? `From ${course.career_outcomes[0].nigeria_ngn}` : 'High Demand'} 
          />
          <StatCard 
            icon={<Users className="w-6 h-6 text-primary" />} 
            label="Mentor-led" 
            value="1-on-1 Sessions" 
          />
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 space-y-32">
        {/* 3. About Programme */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            {aboutRendered && (
              <>
                <SectionHeading title="About the Programme" />
                <div className="prose prose-lg prose-brown max-w-none text-text-body/90 leading-relaxed">
                  {aboutRendered}
                </div>
              </>
            )}
          </div>
          <div className="lg:col-span-5">
            <Card className="p-8 bg-white border-border shadow-card sticky top-24">
              <h3 className="text-xl font-bold text-text-heading mb-6">Course Prerequisites</h3>
              <p className="text-text-body/80 mb-6 leading-relaxed">
                {course.prerequisites || 'No prior experience required. Just a laptop and a hunger to learn.'}
              </p>
              <hr className="border-border/50 my-6" />
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-muted">Tuition Fee</span>
                  <span className="font-bold text-text-heading text-lg">{formatNaira(course.price_ngn)}</span>
                </div>
                {course.scholarship_price_ngn && (
                  <div className="flex justify-between items-center text-sm p-3 bg-success/5 rounded-lg border border-success/10 text-success">
                    <span>Scholarship Price</span>
                    <span className="font-bold">{formatNaira(course.scholarship_price_ngn)}</span>
                  </div>
                )}
                <Button className="w-full mt-4 h-12 shadow-md">Secure Your Spot</Button>
              </div>
            </Card>
          </div>
        </section>

        {/* 4. What you'll learn */}
        <section className="space-y-12">
          <SectionHeading title="What You'll Achieve" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.outcomes.map((outcome, idx) => (
              <motion.div 
                key={idx} 
                className="flex items-start gap-4 p-6 bg-white rounded-card border border-border shadow-sm hover:shadow-md transition-shadow"
                {...fadeIn}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="mt-1 bg-success/10 p-1 rounded-full">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <span className="text-text-body font-medium leading-snug">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Weekly Curriculum */}
        <section className="space-y-12 max-w-4xl">
          <SectionHeading 
            title="Weekly Curriculum" 
            subtitle="A structured, zero-to-one path designed for mastery."
          />
          <CourseCurriculum curriculum={course.curriculum} />
        </section>

        {/* 6. Tools you'll master */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-heading">Tools of the Trade</h2>
            <p className="text-text-body/60 max-w-xl mx-auto">Get hands-on experience with industry-standard software used by top global firms.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {course.tools_and_technologies.map((tool, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element -- External avatar URL from ui-avatars.com */}
                <img src={tool.logo_url} alt={tool.name} className="h-12 w-auto object-contain" />
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Meet Mentors */}
        <section className="space-y-12">
          <SectionHeading 
            title="Learn from the Best" 
            subtitle="Our mentors are active professionals from world-class tech companies."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* 8. Career Outcomes */}
        <section className="bg-bg-dark text-white rounded-[2rem] p-8 md:p-16 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-heading font-bold text-white">Your Career Trajectory</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Graduates of this programme don’t just find jobs; they build careers in high-growth companies worldwide.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-accent-gold text-4xl font-bold">₦4M - ₦10M</div>
                  <div className="text-sm text-white/50 uppercase tracking-widest">Local Salary Potential</div>
                </div>
                <div className="space-y-2">
                  <div className="text-accent-gold text-4xl font-bold">$45k - $90k</div>
                  <div className="text-sm text-white/50 uppercase tracking-widest">Global Freelance Rate</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {course.career_outcomes.map((outcome, idx) => (
                <div key={idx} className="p-6 bg-white/5 rounded-card border border-white/10 space-y-2">
                  <h4 className="font-bold text-lg text-white">{outcome.role}</h4>
                  <div className="text-accent-gold font-medium">{outcome.nigeria_ngn}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQs */}
        <section className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-text-heading">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {course.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-b border-border/50 last:border-0 px-2">
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
      </div>

      {/* 10. Final CTA */}
      <section className="bg-bg-deep-brown py-24 text-center mt-20 relative px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white">Ready to change your story?</h2>
          <p className="text-white/70 text-lg">Join the next cohort and get mentored by world-class industry leads.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="px-12 h-14 text-lg">Apply for Scholarship</Button>
            <Button size="lg" variant="secondary" className="px-12 h-14 text-lg border-white/30 text-white hover:bg-white/10">Full Enrollment</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <Card className="p-6 border-border/50 bg-white shadow-card flex items-center gap-5 hover:border-primary/30 transition-colors">
      <div className="bg-primary/5 p-3 rounded-xl">{icon}</div>
      <div className="space-y-1">
        <div className="text-xs font-bold text-text-muted uppercase tracking-widest">{label}</div>
        <div className="text-lg font-extrabold text-text-heading leading-tight">{value}</div>
      </div>
    </Card>
  );
}

function SectionHeading({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="space-y-3">
      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-heading">{title}</h2>
      {subtitle && <p className="text-text-body/60 text-lg max-w-2xl">{subtitle}</p>}
      <div className="h-1.5 w-12 bg-primary rounded-full mt-2" />
    </div>
  );
}
