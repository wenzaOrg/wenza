import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Sparkles, Calendar, Hammer, Briefcase, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Wenza',
  description:
    'World-class tech education built for Africa. Meet the team behind Wenza and learn why we do this.',
};

async function getMentorCount() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/v1'}/mentors?per_page=1`,
      { next: { revalidate: 3600 } }
    );
    const result = await response.json();
    return result.data.total;
  } catch {
    return '12+';
  }
}

export default async function AboutPage() {
  const mentorCount = await getMentorCount();

  return (
    <div className="flex min-h-screen flex-col">
      {/* 1. HERO — light banner with breadcrumb (Figma's "TEACHER" hero pattern) */}
      <section className="relative bg-bg-card border-b border-border py-20 md:py-28 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[10%] -left-[5%] w-[35%] h-[60%] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] right-[-5%] w-[28%] h-[40%] bg-gold/15 blur-[100px] rounded-full" />
        </div>
        <div className="mx-auto max-w-4xl text-center relative">
          <div className="text-sm font-medium text-text-muted mb-4">
            <span>Home</span> <span className="mx-2 text-primary">{"//"}</span>{' '}
            <span className="text-primary">About Us</span>
          </div>
          <h1 className="font-heading text-4xl font-bold text-text-heading md:text-6xl mb-6 leading-[1.1]">
            World-class tech education,{' '}
            <span className="text-primary">built for Africa</span>.
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-text-body leading-relaxed">
            Wenza trains the next generation of African technology
            professionals — starting from zero. No prior experience required.
            Just the ambition to build your future.
          </p>
        </div>
      </section>

      {/* 2. MISSION — 2-col with sticky heading (Figma's "Tools For Teachers" pattern) */}
      <section className="bg-bg-page py-20 md:py-28 px-6 md:px-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Why Wenza
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-heading mb-6">
              Our mission
            </h2>
            <p className="text-text-body leading-relaxed">
              Talent is evenly distributed. Opportunity is not. Our work is to
              fix that — at scale, and without apology.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-8 text-lg text-text-body leading-relaxed">
            <p>
              Across Nigeria and the wider African continent, millions of
              ambitious people want to build careers in technology. Too often,
              the path is blocked by the wrong barriers: tuition fees larger
              than most annual salaries, curricula that assume years of prior
              experience, and a job market that asks for skills you&rsquo;ve
              been given no way to learn.
            </p>
            <p>Wenza exists to change that.</p>
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {[
                {
                  title: 'Practical learning',
                  text: 'Build real things. Leave with a portfolio that proves what you can do.',
                },
                {
                  title: 'Affordable access',
                  text: 'Every programme priced fairly, with 90% scholarships on every intake.',
                },
                {
                  title: 'Real outcomes',
                  text: 'Mentors at the companies our graduates join. Real intros, real offers.',
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="rounded-card border border-border bg-bg-card p-6 shadow-card"
                >
                  <h3 className="font-bold text-text-heading mb-2">{c.title}</h3>
                  <p className="text-sm text-text-body leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
            <p className="italic text-text-body/80 pt-4">
              Our vision: every ambitious African with the tools, mentorship,
              and opportunities to enter — and lead in — the global technology
              economy.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER — 3-col icon-card grid (Figma's "Our Features") */}
      <section className="bg-bg-card py-20 md:py-28 px-6 md:px-20 shadow-sm">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              What we offer
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-heading">
              An academy built for outcomes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Personalised mentorship',
                description:
                  'One-on-one guidance from engineers, designers, and product leaders who ship work at the companies you want to join.',
              },
              {
                icon: Sparkles,
                title: 'Beginner-friendly curriculum',
                description:
                  'Every programme starts from fundamentals and builds up, so you&rsquo;re never lost and never left behind.',
              },
              {
                icon: Calendar,
                title: 'Cohort accountability',
                description:
                  'Weekly check-ins, shared deadlines, and a community of peers who want you to succeed keeps you moving.',
              },
              {
                icon: Hammer,
                title: 'Project-based learning',
                description:
                  'Every module produces something real — a working app, a data analysis, a design system, a campaign.',
              },
              {
                icon: Briefcase,
                title: 'Career connections',
                description:
                  'Partnerships with African and international tech companies open doors that cold applications don&rsquo;t.',
              },
              {
                icon: TrendingUp,
                title: 'Path to independence',
                description:
                  'Wenza graduates earn salaries unreachable from their prior careers. The goal is the life you want to build.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-card bg-bg-page p-8 border border-border shadow-card hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading mb-3 text-xl font-bold text-text-heading">
                  {item.title}
                </h3>
                <p
                  className="text-text-body leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VALUES — numbered list block (Figma's value tiles) */}
      <section className="bg-bg-page py-20 md:py-28 px-6 md:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Our values
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-heading">
              Three principles, no exceptions
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                num: '01',
                title: 'Talent is evenly distributed. Opportunity is not.',
                text: 'The difference between a Wenza graduate earning eight million naira a year at a global fintech and someone still stuck in a job they have outgrown is rarely talent. It is access.',
              },
              {
                num: '02',
                title: 'Cohorts beat courses.',
                text: 'You can watch a thousand YouTube tutorials and still never ship anything. What changes careers is accountability, deadlines, peers, and mentors who check your work.',
              },
              {
                num: '03',
                title: 'Africa builds Africa\u2019s technology.',
                text: 'Wenza graduates are building Nigerian fintech, Kenyan logistics, Ghanaian health-tech, pan-African commerce. Our work is to produce them at scale.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-card border border-border bg-bg-card p-8 md:p-10 shadow-card flex flex-col md:flex-row gap-6 md:gap-10"
              >
                <div className="font-heading text-5xl md:text-6xl font-extrabold text-primary leading-none flex-shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-text-heading mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-body leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE TEAM — founder cards (Figma's "Meet Our Instructor" pattern) */}
      <section className="bg-bg-card py-20 md:py-28 px-6 md:px-20 shadow-sm">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              The team
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-heading mb-6">
              Built by people who&rsquo;ve been here
            </h2>
            <p className="mx-auto max-w-2xl text-text-body leading-relaxed">
              A small team of founders, educators, and engineers who have spent
              years in Africa&rsquo;s technology industry. Mentors drawn from
              Paystack, Kuda, Andela, Stripe, and leading global tech companies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Abimbola Bolaji',
                title: 'Founder',
                bio: 'Abimbola founded Wenza in 2026 with the conviction that Nigeria\u2019s next generation of technology talent shouldn\u2019t be gated behind prohibitive tuition.',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
              },
              {
                name: 'Abimbola Obafisayo',
                title: 'Co-Founder',
                bio: 'Abimbola co-founded Wenza in 2026, bringing a background in product engineering and frontend development. He leads platform, engineering, and learner experience.',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
              },
            ].map((founder, idx) => (
              <div
                key={idx}
                className="rounded-card bg-bg-page border border-border shadow-card overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[4/3] w-full bg-bg-card">
                  <Image
                    src={founder.avatar}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute right-4 bottom-4 h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                    <span className="text-xs font-bold">in</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-heading">
                    {founder.name}
                  </h3>
                  <p className="font-medium text-primary mb-3">
                    {founder.title}
                  </p>
                  <p className="text-text-body leading-relaxed text-sm">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WENZA IN 2026 — stat tiles */}
      <section className="bg-bg-page py-20 md:py-28 px-6 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-heading">
              Wenza in 2026
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 'May 2026', label: 'First cohort begins' },
              { value: 'Sept 2026', label: 'Second cohort begins' },
              { value: '16', label: 'Programmes' },
              { value: mentorCount, label: 'Mentors' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-card bg-bg-card p-8 text-center border border-border shadow-card"
              >
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-medium text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="bg-bg-deep-brown py-20 md:py-28 px-6 md:px-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-heading text-3xl md:text-5xl font-extrabold text-white">
            Ready to build your future?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-text-on-dark/80">
            Browse our sixteen programmes or apply for a scholarship. The next
            cohort begins in May 2026.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-button bg-primary px-8 py-4 font-bold text-white transition-colors hover:bg-primary-hover"
            >
              Browse programmes
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_SCHOLARSHIP_URL || 'http://scholarship.localhost:3000'}/apply`}
              className="inline-flex items-center justify-center rounded-button border-2 border-white px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-bg-deep-brown"
            >
              Apply for a scholarship
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
