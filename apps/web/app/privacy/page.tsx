import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Database, Globe2, Clock, Baby, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Wenza collects, uses, and protects your personal information.',
};

const TOC = [
  '1. WHAT INFORMATION DO WE COLLECT?',
  '2. HOW DO WE PROCESS YOUR INFORMATION?',
  '3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?',
  '4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?',
  '5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?',
  '6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?',
  '7. HOW LONG DO WE KEEP YOUR INFORMATION?',
  '8. DO WE COLLECT INFORMATION FROM MINORS?',
  '9. WHAT ARE YOUR PRIVACY RIGHTS?',
  '10. CONTROLS FOR DO-NOT-TRACK FEATURES',
  '11. DO WE MAKE UPDATES TO THIS NOTICE?',
  '12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?',
  '13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?',
];

const KEY_POINTS = [
  {
    icon: Database,
    title: 'What we process',
    body: 'Personal information you provide depending on how you interact with our Services and the products and features you use.',
  },
  {
    icon: ShieldCheck,
    title: 'Sensitive data',
    body: 'We do not process sensitive personal information.',
  },
  {
    icon: Globe2,
    title: 'Third-party data',
    body: 'We may collect information from public databases, marketing partners, and other outside sources.',
  },
  {
    icon: Clock,
    title: 'How we use it',
    body: 'To provide, improve, and administer our Services, communicate with you, and prevent fraud — only when we have a valid legal reason.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg-page">
      {/* Hero */}
      <section className="border-b border-border bg-bg-card">
        <div className="mx-auto max-w-[960px] px-6 py-16 md:px-20 md:py-24">
          <nav className="mb-6 flex items-center gap-2 text-sm text-text-muted">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-text-heading">Privacy Notice</span>
          </nav>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Legal
          </p>
          <h1 className="mb-4 font-heading text-4xl font-bold leading-tight text-text-heading md:text-5xl">
            Privacy Notice
          </h1>
          <p className="text-base text-text-muted">Last updated 20 April 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-[960px] px-6 py-16 md:px-20 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_280px]">
          <article className="space-y-12 text-text-body">
            <div className="space-y-4">
              <p>
                This Privacy Notice for Wenza (“we,” “us,” or “our”), describes how
                and why we might access, collect, store, use, and/or share
                (“process”) your personal information when you use our services
                (“Services”), including when you visit our website at
                https://wenza.com or apply for our programmes.
              </p>
              <p>
                Questions or concerns? Reading this Privacy Notice will help you
                understand your privacy rights and choices. If you do not agree with
                our policies and practices, please do not use our Services. If you
                still have any questions or concerns, please contact us at{' '}
                <a href="mailto:admissions@wenza.com" className="text-primary hover:underline">
                  admissions@wenza.com
                </a>
                .
              </p>
            </div>

            {/* Key points */}
            <section id="summary" className="space-y-4">
              <div className="flex items-baseline gap-4 border-b border-border pb-3">
                <span className="font-heading text-sm font-semibold text-primary">00</span>
                <h2 className="font-heading text-2xl font-bold text-text-heading">
                  Summary of key points
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {KEY_POINTS.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-card border border-border bg-bg-card p-6"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <p.icon size={20} />
                    </div>
                    <h3 className="mb-1.5 font-heading text-base font-semibold text-text-heading">
                      {p.title}
                    </h3>
                    <p className="text-sm text-text-body">{p.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <Section id="section-1" number="01" title="What information do we collect?">
              <h3 className="font-heading text-lg font-semibold text-text-heading">
                Personal information you disclose to us
              </h3>
              <p>
                We collect personal information that you voluntarily provide to us
                when you register on the Services, express an interest in obtaining
                information about us or our products and Services, when you
                participate in activities on the Services, or otherwise when you
                contact us.
              </p>
              <h3 className="font-heading text-lg font-semibold text-text-heading pt-2">
                Information automatically collected
              </h3>
              <p>
                We automatically collect certain information when you visit, use, or
                navigate the Services. This information does not reveal your specific
                identity but may include device and usage information, such as your
                IP address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country, location,
                and information about how and when you use our Services.
              </p>
            </Section>

            <Section id="section-2" number="02" title="How do we process your information?">
              <p>We process your personal information for a variety of reasons, including:</p>
              <ul className="my-4 list-disc space-y-1.5 pl-6">
                <li>To facilitate account creation, authentication, and management.</li>
                <li>To deliver and facilitate delivery of services to the user.</li>
                <li>To respond to user inquiries and offer support.</li>
                <li>To send administrative information to you.</li>
                <li>To fulfil and manage your orders / applications.</li>
                <li>To request feedback.</li>
                <li>To send you marketing and promotional communications.</li>
                <li>To protect our Services and for fraud prevention.</li>
              </ul>
            </Section>

            <Section id="section-3" number="03" title="When and with whom do we share your personal information?">
              <p>We may share your personal information in specific situations, such as:</p>
              <ul className="my-4 space-y-2 pl-0">
                {[
                  ['Infrastructure providers', 'We use Vercel and AWS for hosting and service delivery.'],
                  ['Payment processors', 'We use Paystack for processing tuition payments.'],
                  [
                    'Business transfers',
                    'We may share or transfer your information in connection with a merger, sale of company assets, financing, or acquisition.',
                  ],
                ].map(([title, body]) => (
                  <li key={title} className="rounded-card border border-border bg-bg-card p-4">
                    <span className="font-semibold text-text-heading">{title}.</span>{' '}
                    <span className="text-text-body">{body}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="section-6" number="06" title="Is your information transferred internationally?">
              <p>
                Our servers are located in various locations worldwide. Please be
                aware that your information may be transferred to, stored by, and
                processed by us and our third-party partners. If you are a resident
                in the European Economic Area (EEA), United Kingdom (UK), or
                Switzerland, we will take all necessary measures to protect your
                personal information in accordance with this Privacy Notice and
                applicable law.
              </p>
            </Section>

            <Section id="section-7" number="07" title="How long do we keep your information?">
              <p>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this Privacy Notice, unless a
                longer retention period is required or permitted by law (such as tax,
                accounting, or other legal requirements).
              </p>
            </Section>

            <Section id="section-8" number="08" title="Do we collect information from minors?">
              <div className="flex gap-4 rounded-card border border-primary/20 bg-primary/5 p-5">
                <Baby className="mt-0.5 shrink-0 text-primary" size={20} />
                <p className="text-text-body">
                  We do not knowingly collect data from or market to children under
                  18 years of age. By using the Services, you represent that you are
                  at least 18 or that you are the parent or guardian of such a minor
                  and consent to such minor dependent’s use of the Services.
                </p>
              </div>
            </Section>

            <Section id="section-12" number="12" title="How can you contact us about this notice?">
              <p>
                If you have questions or comments about this notice, you may contact
                us by email at{' '}
                <a href="mailto:admissions@wenza.com" className="text-primary hover:underline">
                  admissions@wenza.com
                </a>{' '}
                or by post at:
              </p>
              <div className="mt-4 flex items-start gap-3 rounded-card border border-border bg-bg-card p-6">
                <Mail className="mt-1 shrink-0 text-primary" size={18} />
                <div>
                  <p className="font-semibold text-text-heading">Wenza Academy</p>
                  <p className="text-text-body">Lagos, Nigeria</p>
                </div>
              </div>
            </Section>
          </article>

          <aside className="hidden md:block">
            <div className="sticky top-24 rounded-card border border-border bg-bg-card p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Table of contents
              </p>
              <ul className="space-y-2">
                {TOC.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#section-${idx + 1}`}
                      className="block text-sm leading-snug text-text-body hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="space-y-4 scroll-mt-24">
      <div className="flex items-baseline gap-4 border-b border-border pb-3">
        <span className="font-heading text-sm font-semibold text-primary">{number}</span>
        <h2 className="font-heading text-2xl font-bold text-text-heading">{title}</h2>
      </div>
      <div className="space-y-3 text-text-body">{children}</div>
    </section>
  );
}
