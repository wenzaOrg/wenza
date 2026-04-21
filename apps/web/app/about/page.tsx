import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Sparkles, Calendar, Hammer, Briefcase, TrendingUp } from 'lucide-react';
import { ContentPageLayout } from '../../components/content-page-layout';

export const metadata: Metadata = {
  title: 'About Wenza',
  description: 'World-class tech education built for Africa. Meet the team behind Wenza and learn why we do this.',
};

async function getMentorCount() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/v1'}/mentors?per_page=1`,
      { next: { revalidate: 3600 } }
    );
    const result = await response.json();
    // result.data.total is correct per the ApiResponse::paginated trait structure
    return result.data.total;
  } catch {
    return '12+';
  }
}

export default async function AboutPage() {
  const mentorCount = await getMentorCount();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-bg-deep-brown py-20 px-4 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-8 font-heading text-4xl font-bold text-primary md:text-6xl">
            World-class tech education. Built for Africa. Open to everyone.
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-text-on-dark font-medium leading-relaxed opacity-90">
            Wenza trains the next generation of African technology professionals — starting from zero. No prior experience required. Just the ambition to build your future.
          </p>
        </div>
      </section>

      <ContentPageLayout>
        {/* Our mission Section */}
        <section className="mb-24">
          <h2 className="mb-8 font-heading text-3xl font-bold text-text-heading">Our mission</h2>
          <div className="space-y-6 text-lg text-text-body leading-relaxed">
            <p>
              Across Nigeria and the wider African continent, millions of ambitious people want to build careers in technology. Too often, the path is blocked by the wrong barriers: tuition fees larger than most annual salaries, curricula that assume years of prior experience, and a job market that asks for skills you’ve been given no way to learn.
            </p>
            <p>
              Wenza exists to change that.
            </p>
            <p>
              We believe ambition should be met with opportunity, not obstacles. That’s why we’ve built Wenza around three commitments:
            </p>
          </div>

          <div className="mt-12 space-y-10">
            <div>
              <h3 className="mb-3 text-xl font-bold text-text-heading">Practical learning</h3>
              <p className="text-lg text-text-body">
                Our programmes teach you by building real things. You leave each cohort with a portfolio of projects that demonstrate what you can actually do — not a certificate that proves you attended.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold text-text-heading">Affordable access</h3>
              <p className="text-lg text-text-body">
                Every programme is priced at a fraction of comparable bootcamps, and 90% scholarships are available on every intake for applicants who demonstrate commitment. Nobody should be locked out of a tech career because of fees.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold text-text-heading">Genuine career outcomes</h3>
              <p className="text-lg text-text-body">
                We don’t stop at teaching. Our mentors work at the companies our graduates want to join — Paystack, Kuda, Andela, Stripe, and beyond — and we invest in connecting you to real internships and roles once you’ve earned the skills to fill them.
              </p>
            </div>
          </div>

          <p className="mt-12 text-lg font-medium text-text-body italic">
            Our vision is a continent where every ambitious African has the tools, the mentorship, and the opportunities to enter the global technology economy — and lead in it.
          </p>
        </section>

        {/* What makes Wenza different Section */}
        <section className="mb-24">
          <h2 className="mb-12 font-heading text-3xl font-bold text-text-heading">What we offer</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                icon: Users,
                title: 'Personalised mentorship',
                description: 'One-on-one guidance from engineers, designers, and product leaders who ship work at the companies you want to join. Your mentor knows your name and reviews your code.',
              },
              {
                icon: Sparkles,
                title: 'Beginner-friendly curriculum',
                description: 'No prior tech background? That’s the default assumption. Every programme starts from fundamentals and builds up, so you’re never lost and never left behind.',
              },
              {
                icon: Calendar,
                title: 'Cohort accountability',
                description: 'You learn alongside 30 peers who started where you are. Weekly check-ins, shared deadlines, and a community of people who want you to succeed keeps you moving when motivation flags.',
              },
              {
                icon: Hammer,
                title: 'Project-based learning',
                description: 'Every module produces something real — a working app, a data analysis, a design system, a campaign. By the end of the programme, you have a portfolio that proves what you can do.',
              },
              {
                icon: Briefcase,
                title: 'Career connections',
                description: 'Our partnerships with African and international tech companies mean your final project can be reviewed by hiring managers. Our alumni network opens doors that cold applications don’t.',
              },
              {
                icon: TrendingUp,
                title: 'Path to financial independence',
                description: 'Wenza graduates earn salaries that would be unreachable from their prior careers. The goal isn’t just a job. It’s a meaningful step towards the life you want to build.',
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-card bg-bg-card p-8 border border-border shadow-card">
                <item.icon className="mb-6 h-8 w-8 text-primary" />
                <h3 className="mb-4 text-xl font-bold text-text-heading">{item.title}</h3>
                <p className="text-text-body leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our values Section */}
        <section className="mb-24">
          <h2 className="mb-12 font-heading text-3xl font-bold text-text-heading">Our values</h2>
          <div className="space-y-12">
            {[
              {
                num: '1.',
                title: 'Talent is evenly distributed. Opportunity is not.',
                text: 'The difference between a Wenza graduate earning eight million naira a year at a global fintech and someone still stuck in a job they’ve outgrown is rarely talent. It’s access — to the right curriculum, the right mentors, the right network, the right first opportunity. Our job is to give that access to the people who have the talent and the drive, but didn’t start life with the background.',
              },
              {
                num: '2.',
                title: 'Cohorts beat courses.',
                text: 'You can watch a thousand YouTube tutorials and still never ship anything. What changes careers is not information — it’s accountability, deadlines, peers, and mentors who check your work. Every Wenza programme is cohort-based for this reason. You apply. You get in. You show up for twelve to twenty-four weeks alongside a group of people who want what you want. That is the model that produces results.',
              },
              {
                num: '3.',
                title: 'Africa builds Africa’s technology.',
                text: 'Wenza graduates are building Nigerian fintech, Kenyan logistics, Ghanaian health-tech, pan-African commerce. A thriving continental technology industry requires skilled engineers, designers, and product managers who understand this market from the inside. Our work is to produce them — at scale, and without apology.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <span className="text-2xl font-bold text-primary opacity-50">{item.num}</span>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-text-heading">{item.title}</h3>
                  <p className="text-lg text-text-body leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The team Section */}
        <section className="mb-24">
          <h2 className="mb-8 font-heading text-3xl font-bold text-text-heading">The team</h2>
          <p className="mb-12 text-lg text-text-body leading-relaxed">
            Wenza is built by a small team of founders, educators, and engineers who have spent years in Africa’s technology industry. Our mentors are drawn from Paystack, Kuda, Andela, Stripe, and leading global tech companies. We are headquartered in Lagos, with team members working from across Nigeria and the diaspora.
          </p>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {[
              {
                name: 'Abimbola Bolaji',
                title: 'Founder',
                bio: 'Abimbola founded Wenza in 2026 with the conviction that Nigeria’s next generation of technology talent shouldn’t be gated behind prohibitive tuition. He leads Wenza’s strategy, admissions, and partnerships with industry mentors across Africa and the diaspora.',
                avatar: 'https://ui-avatars.com/api/?name=Abimbola+Bolaji&background=B05010&color=fff&size=200',
              },
              {
                name: 'Abimbola Obafisayo',
                title: 'Co-Founder',
                bio: 'Abimbola co-founded Wenza in 2026, bringing a background in product engineering and frontend development. He leads Wenza’s platform, engineering, and learner experience, and is committed to building technology that removes barriers rather than creating them.',
                avatar: 'https://ui-avatars.com/api/?name=Abimbola+Obafisayo&background=B05010&color=fff&size=200',
              },
            ].map((founder, idx) => (
              <div key={idx} className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full border-4 border-gold shadow-card">
                  <Image src={founder.avatar} alt={founder.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-heading">{founder.name}</h3>
                  <p className="mb-4 font-medium text-primary">{founder.title}</p>
                  <p className="text-text-body leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wenza in 2026 Section */}
        <section className="mb-24">
          <h2 className="mb-12 font-heading text-3xl font-bold text-text-heading">Wenza in 2026</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: 'May 2026', label: 'First cohort begins' },
              { value: 'September 2026', label: 'Second cohort begins' },
              { value: '16', label: 'Programmes in our catalogue' },
              { value: mentorCount, label: 'Mentors from leading tech companies' },
            ].map((stat, idx) => (
              <div key={idx} className="rounded-card bg-bg-card p-10 text-center border border-border shadow-card">
                <div className="mb-2 text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm font-medium text-text-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="rounded-card bg-bg-dark py-16 px-8 text-center text-white">
          <h2 className="mb-6 font-heading text-3xl font-bold">Ready to build your future?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-text-on-dark opacity-90">
            Browse our sixteen programmes or apply for a scholarship. The next cohort begins in May 2026.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/courses"
              className="rounded-button bg-primary px-8 py-4 font-bold transition-colors hover:bg-primary-hover"
            >
              Browse programmes
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_SCHOLARSHIP_URL || 'http://scholarship.localhost:3000'}/apply`}
              className="rounded-button border-2 border-white px-8 py-4 font-bold transition-all hover:bg-white hover:text-bg-dark"
            >
              Apply for a scholarship
            </Link>
          </div>
        </section>
      </ContentPageLayout>
    </div>
  );
}
