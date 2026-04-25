import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Cookie, Settings2, RefreshCw, Mail, LucideIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How Wenza uses cookies and similar technologies on our website.',
};

const BROWSERS = ['Chrome', 'Internet Explorer', 'Firefox', 'Safari', 'Edge', 'Opera'];

export default function CookiesPage() {
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
            <span className="text-text-heading">Cookie Policy</span>
          </nav>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Legal
          </p>
          <h1 className="mb-4 font-heading text-4xl font-bold leading-tight text-text-heading md:text-5xl">
            Cookie Policy
          </h1>
          <p className="text-base text-text-muted">Last updated 20 April 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-[768px] px-6 py-16 md:px-20 md:py-20">
        <article className="space-y-12 text-text-body">
          <div className="space-y-4">
            <p>
              This Cookie Policy explains how Wenza (“Company,” “we,” “us,” and
              “our”) uses cookies and similar technologies to recognise you when you
              visit our website at https://wenza.com (“Website”). It explains what
              these technologies are and why we use them, as well as your rights to
              control our use of them.
            </p>
            <p>
              In some cases we may use cookies to collect personal information, or
              that becomes personal information if we combine it with other
              information.
            </p>
          </div>

          <Section id="what-are-cookies" icon={Cookie} title="What are cookies?">
            <p>
              Cookies are small data files that are placed on your computer or mobile
              device when you visit a website. Cookies are widely used by website
              owners in order to make their websites work, or to work more
              efficiently, as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, Wenza) are called
              “first-party cookies.” Cookies set by parties other than the website
              owner are called “third-party cookies.” Third-party cookies enable
              third-party features or functionality to be provided on or through the
              website (e.g., advertising, interactive content, and analytics).
            </p>
          </Section>

          <Section id="why-cookies" icon={Settings2} title="Why do we use cookies?">
            <p>
              We use first- and third-party cookies for several reasons. Some cookies
              are required for technical reasons in order for our Website to operate,
              and we refer to these as “essential” or “strictly necessary” cookies.
              Other cookies also enable us to track and target the interests of our
              users to enhance the experience on our Online Properties.
            </p>
          </Section>

          <Section
            id="control-browser"
            icon={Settings2}
            title="How can I control cookies on my browser?"
          >
            <p>
              The means by which you can refuse cookies through your web browser
              controls vary from browser to browser. You should visit your browser’s
              help menu for more information. The following lists popular browsers:
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {BROWSERS.map((b) => (
                <li
                  key={b}
                  className="rounded-button border border-border bg-bg-card px-4 py-2.5 text-sm font-medium text-text-heading"
                >
                  {b}
                </li>
              ))}
            </ul>
          </Section>

          <Section
            id="update"
            icon={RefreshCw}
            title="How often will you update this Cookie Policy?"
          >
            <p>
              We may update this Cookie Policy from time to time in order to reflect,
              for example, changes to the cookies we use or for other operational,
              legal, or regulatory reasons. Please therefore revisit this Cookie
              Policy regularly to stay informed about our use of cookies and related
              technologies.
            </p>
          </Section>

          <Section id="contact" icon={Mail} title="Where can I get further information?">
            <p>
              If you have any questions about our use of cookies or other
              technologies, please contact us at:
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
      </section>
    </main>
  );
}

function Section({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="space-y-4 scroll-mt-24">
      <div className="flex items-center gap-3 border-b border-border pb-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon size={18} />
        </span>
        <h2 className="font-heading text-2xl font-bold text-text-heading">{title}</h2>
      </div>
      <div className="space-y-3 text-text-body">{children}</div>
    </section>
  );
}
