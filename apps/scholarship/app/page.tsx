import { Button, Card } from '@wenza/ui';
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Zap,
  ShieldCheck,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const VALUE_PROPS = [
  {
    icon: CheckCircle2,
    title: 'Merit based',
    body: 'Awarded to candidates who demonstrate exceptional passion, curiosity, and potential in their chosen tech track.',
  },
  {
    icon: GraduationCap,
    title: 'Global access',
    body: 'Available to applicants worldwide. We prioritise talent from underrepresented regions and communities.',
  },
  {
    icon: Zap,
    title: 'Instant impact',
    body: 'Get a decision within four weeks. Once accepted, you start in the next available cohort immediately.',
  },
];

const STATS = [
  { value: '90%', label: 'Of programme fees covered' },
  { value: '2,000+', label: 'Students supported' },
  { value: '4 wk', label: 'Decision turnaround' },
  { value: '98%', label: 'Completion rate' },
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Apply online',
    body: 'Tell us about your background, the programme you want, and why a scholarship would change things for you.',
  },
  {
    step: '02',
    title: 'Review & interview',
    body: 'Shortlisted applicants are invited for a brief conversation with the admissions team.',
  },
  {
    step: '03',
    title: 'Start learning',
    body: 'Accepted scholars join the next cohort and begin coursework immediately — no fees due upfront.',
  },
];

export default function ScholarshipHome() {
  const mainUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL || 'https://wenza.com';

  return (
    <main className="min-h-screen bg-bg-page">
      {/* Hero */}
      <section className="border-b border-border bg-bg-card">
        <div className="mx-auto max-w-[1080px] px-4 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-pill border border-border bg-bg-page px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Wenza Merit Programme · 2026
                </span>
              </div>

              <h1 className="font-heading text-4xl font-bold leading-[1.05] text-text-heading md:text-6xl">
                Education is a <span className="text-primary">right</span>,
                <br />
                not a privilege.
              </h1>

              <p className="max-w-xl text-base text-text-body md:text-lg">
                Our scholarship programme empowers the next generation of tech leaders
                by removing financial barriers. We cover up to{' '}
                <span className="font-semibold text-text-heading">
                  90% of programme fees
                </span>{' '}
                for selected applicants.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link href="/apply">
                  <Button variant="primary" size="lg">
                    Apply for scholarship
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link href={`${mainUrl}/courses`}>
                  <Button variant="outline" size="lg">
                    Explore programmes
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero card */}
            <Card className="p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                  Phoenix cohort 2026
                </span>
              </div>
              <h3 className="mb-3 font-heading text-2xl font-bold text-text-heading">
                Applications now open
              </h3>
              <p className="mb-6 text-sm text-text-body">
                Limited seats. Decisions roll out weekly until cohort fills.
              </p>
              <div className="space-y-3 border-t border-border pt-5">
                {[
                  ['Programme', 'All Wenza tracks'],
                  ['Award', 'Up to 90% off'],
                  ['Eligibility', 'Worldwide, 18+'],
                  ['Deadline', 'Rolling'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm">
                    <span className="text-text-muted">{k}</span>
                    <span className="font-medium text-text-heading">{v}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-bg-page">
        <div className="mx-auto max-w-[1080px] px-4 py-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-bg-page">
        <div className="mx-auto max-w-[1080px] px-4 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Why apply
            </p>
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              A scholarship designed for ambitious learners.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {VALUE_PROPS.map((p) => (
              <Card key={p.title} className="p-8">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon size={22} />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold text-text-heading">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-body">{p.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-bg-card">
        <div className="mx-auto max-w-[1080px] px-4 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              How it works
            </p>
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              From application to first class in three steps.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {HOW_IT_WORKS.map((s) => (
              <div
                key={s.step}
                className="rounded-card border border-border bg-bg-page p-8"
              >
                <p className="mb-4 font-heading text-sm font-semibold text-primary">
                  {s.step}
                </p>
                <h3 className="mb-2 font-heading text-xl font-bold text-text-heading">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-page">
        <div className="mx-auto max-w-[1080px] px-4 py-20">
          <Card className="overflow-hidden bg-bg-deep-brown text-white">
            <div className="grid items-center gap-8 p-10 md:grid-cols-[1fr_auto] md:p-14">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-pill bg-white/10 px-3 py-1">
                  <Users size={14} className="text-gold" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    Limited seats
                  </span>
                </div>
                <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
                  Ready to start your journey?
                </h2>
                <p className="max-w-xl text-base text-white/70">
                  Submit your scholarship application today. Decisions roll out weekly.
                </p>
              </div>
              <Link href="/apply">
                <Button variant="primary" size="lg">
                  Begin application
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
