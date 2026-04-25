import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Wenza’s Terms of Service governing use of the Wenza education platform and services.',
};

const TOC = [
  '1. OUR SERVICES',
  '2. INTELLECTUAL PROPERTY RIGHTS',
  '3. USER REPRESENTATIONS',
  '4. USER REGISTRATION',
  '5. PRODUCTS',
  '6. PURCHASES AND PAYMENT',
  '7. REFUNDS POLICY',
  '8. PROHIBITED ACTIVITIES',
  '9. USER GENERATED CONTRIBUTIONS',
  '10. CONTRIBUTION LICENCE',
  '11. GUIDELINES FOR REVIEWS',
  '12. THIRD-PARTY WEBSITES AND CONTENT',
  '13. SERVICES MANAGEMENT',
  '14. PRIVACY POLICY',
  '15. COPYRIGHT INFRINGEMENTS',
  '16. TERM AND TERMINATION',
  '17. MODIFICATIONS AND INTERRUPTIONS',
  '18. GOVERNING LAW',
  '19. DISPUTE RESOLUTION',
  '20. CORRECTIONS',
  '21. DISCLAIMER',
  '22. LIMITATIONS OF LIABILITY',
  '23. INDEMNIFICATION',
  '24. USER DATA',
  '25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES',
  '26. MISCELLANEOUS',
  '27. CONTACT US',
];

export default function TermsPage() {
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
            <span className="text-text-heading">Terms &amp; Conditions</span>
          </nav>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Legal
          </p>
          <h1 className="mb-4 font-heading text-4xl font-bold leading-tight text-text-heading md:text-5xl">
            Terms and Conditions
          </h1>
          <p className="text-base text-text-muted">Last updated 20 April 2026</p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-[960px] px-6 py-16 md:px-20 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_280px]">
          <article className="space-y-12 text-text-body">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-text-heading">
                Agreement to our legal terms
              </h2>
              <p>
                We are Wenza (“Company,” “we,” “us,” or “our”), a company registered
                in Nigeria at Lagos, Nigeria.
              </p>
              <p>
                We operate the website https://wenza.com (the “Site”), as well as any
                other related products and services that refer or link to these legal
                terms (the “Legal Terms”) (collectively, the “Services”).
              </p>
              <p>
                Wenza operates an online technology education platform. We deliver
                cohort-based programmes across software development, data science,
                design, digital marketing, cybersecurity, and related fields to
                students across Africa and the diaspora. Our Services include the
                Wenza website, programme application systems, scholarship
                administration, and any related learning platforms.
              </p>
              <p>
                You can contact us by email at{' '}
                <a href="mailto:admissions@wenza.com" className="text-primary hover:underline">
                  admissions@wenza.com
                </a>{' '}
                or by mail to Lagos, Nigeria.
              </p>
              <p>
                These Legal Terms constitute a legally binding agreement made between
                you, whether personally or on behalf of an entity (“you”), and Wenza,
                concerning your access to and use of the Services. You agree that by
                accessing the Services, you have read, understood, and agreed to be
                bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF
                THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
                SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
            </div>

            <Section id="section-1" number="01" title="Our services">
              <p>
                The information provided when using the Services is not intended for
                distribution to or use by any person or entity in any jurisdiction or
                country where such distribution or use would be contrary to law or
                regulation or which would subject us to any registration requirement
                within such jurisdiction or country.
              </p>
            </Section>

            <Section id="section-2" number="02" title="Intellectual property rights">
              <p>
                We are the owner or the licensee of all intellectual property rights
                in our Services, including all source code, databases, functionality,
                software, website designs, audio, video, text, photographs, and
                graphics in the Services (collectively, the “Content”), as well as
                the trademarks, service marks, and logos contained therein (the
                “Marks”).
              </p>
            </Section>

            <Section id="section-6" number="06" title="Purchases and payment">
              <p>We accept the following forms of payment:</p>
              <ul className="my-4 list-disc space-y-1.5 pl-6">
                <li>Mastercard</li>
                <li>Visa</li>
                <li>Paystack</li>
              </ul>
              <p>
                You agree to provide current, complete, and accurate purchase and
                account information for all purchases made via the Services. All
                payments shall be in Nigerian Naira.
              </p>
            </Section>

            <Section id="section-7" number="07" title="Refunds policy">
              <div className="rounded-card border border-primary/20 bg-primary/5 p-6">
                <p className="font-semibold text-text-heading">
                  All sales are final and no refund will be issued.
                </p>
              </div>
            </Section>

            <Section id="section-18" number="18" title="Governing law">
              <p>
                These Legal Terms shall be governed by and defined following the laws
                of Nigeria. Wenza and yourself irrevocably consent that the courts of
                Nigeria shall have exclusive jurisdiction to resolve any dispute
                which may arise in connection with these Legal Terms.
              </p>
            </Section>

            <Section id="section-21" number="21" title="Disclaimer">
              <p className="text-sm italic text-text-muted">
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
                AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE
                FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS
                OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF.
              </p>
            </Section>

            <Section id="section-27" number="27" title="Contact us">
              <p>
                In order to resolve a complaint regarding the Services or to receive
                further information regarding use of the Services, please contact us
                at:
              </p>
              <div className="mt-4 rounded-card border border-border bg-bg-card p-6">
                <p className="font-semibold text-text-heading">Wenza Academy</p>
                <p className="text-text-body">Lagos, Nigeria</p>
                <a
                  href="mailto:admissions@wenza.com"
                  className="mt-2 inline-block text-primary hover:underline"
                >
                  admissions@wenza.com
                </a>
              </div>
            </Section>
          </article>

          {/* Sticky TOC */}
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
