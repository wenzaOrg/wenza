import * as React from 'react';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

const MAIN_SITE_URL = process.env.NEXT_PUBLIC_MAIN_SITE_URL || '';
const SCHOLARSHIP_URL =
  process.env.NEXT_PUBLIC_SCHOLARSHIP_URL || '/scholarship';

const FOOTER_LINKS = {
  programmes: [
    { label: 'Software Development', href: `${MAIN_SITE_URL}/courses/software-development` },
    { label: 'Data Science', href: `${MAIN_SITE_URL}/courses/data-science` },
    { label: 'Cybersecurity', href: `${MAIN_SITE_URL}/courses/cybersecurity` },
    { label: 'Cloud Engineering', href: `${MAIN_SITE_URL}/courses/cloud-engineering` },
    { label: 'Browse all', href: `${MAIN_SITE_URL}/courses` },
  ],
  company: [
    { label: 'About', href: `${MAIN_SITE_URL}/about` },
    { label: 'Mentors', href: `${MAIN_SITE_URL}/mentors` },
    { label: 'Testimonials', href: `${MAIN_SITE_URL}/testimonials` },
    { label: 'Contact', href: `${MAIN_SITE_URL}/contact` },
  ],
  apply: [
    { label: 'Apply for a programme', href: `${MAIN_SITE_URL}/apply` },
    { label: 'Apply for a scholarship', href: SCHOLARSHIP_URL },
  ],
  legal: [
    { label: 'Terms of Service', href: `${MAIN_SITE_URL}/terms` },
    { label: 'Privacy Policy', href: `${MAIN_SITE_URL}/privacy` },
    { label: 'Cookie Policy', href: `${MAIN_SITE_URL}/cookies` },
  ],
};

export function Footer() {
  return (
    <footer className="bg-bg-deep-brown text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-20 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          {/* Brand block */}
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-block font-heading text-2xl font-bold text-white outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Wenza<span className="text-gold">.</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Outcome-driven tech education for Africa{'\u2019'}s next
              generation of builders.
            </p>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href="mailto:admissions@wenza.com"
                  className="transition-colors hover:text-white"
                >
                  admissions@wenza.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <FooterColumn title="Programmes" links={FOOTER_LINKS.programmes} />
            <FooterColumn title="Company" links={FOOTER_LINKS.company} />
            <FooterColumn title="Apply" links={FOOTER_LINKS.apply} />
            <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Wenza Org. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <SocialLink
              href="https://twitter.com/wenza"
              label="Twitter"
              path="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
            />
            <SocialLink
              href="https://linkedin.com/company/wenza"
              label="LinkedIn"
              custom={
                <>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </>
              }
            />
            <SocialLink
              href="https://instagram.com/wenza"
              label="Instagram"
              custom={
                <>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </>
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  path,
  custom,
}: {
  href: string;
  label: string;
  path?: string;
  custom?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-gold/50 hover:bg-white/5 hover:text-gold outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {custom ?? (path ? <path d={path} /> : null)}
      </svg>
    </a>
  );
}
