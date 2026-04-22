import * as React from 'react';
import Link from 'next/link';

const MAIN_SITE_URL = process.env.NEXT_PUBLIC_MAIN_SITE_URL || '';

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
    { label: 'Contact', href: `${MAIN_SITE_URL}/contact` },
    { label: 'Testimonials', href: `${MAIN_SITE_URL}/testimonials` },
  ],
  apply: [
    { label: 'Apply for a programme', href: `${MAIN_SITE_URL}/apply` },
    { label: 'Apply for a scholarship', href: process.env.NEXT_PUBLIC_SCHOLARSHIP_URL || '/scholarship' },
  ],
  legal: [
    { label: 'Terms', href: `${MAIN_SITE_URL}/terms` },
    { label: 'Privacy', href: `${MAIN_SITE_URL}/privacy` },
    { label: 'Cookies', href: `${MAIN_SITE_URL}/cookies` },
  ],
};

export function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-heading text-2xl font-bold text-white outline-none focus-visible:ring-2 focus-visible:ring-gold">
              Wenza.
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Outcome-driven tech education for Africa{'\u2019'}s next generation of builders.
            </p>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            <div>
              <h3 className="font-heading font-semibold text-white">Programmes</h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.programmes.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-gold outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-gold outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-white">Apply</h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.apply.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-gold outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-gold outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Wenza Org. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 sm:mt-0">
            <a
              href="https://twitter.com/wenza"
              target="_blank"
              rel="noreferrer"
              className="text-white/50 transition-colors hover:text-gold outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Twitter"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a
              href="https://linkedin.com/company/wenza"
              target="_blank"
              rel="noreferrer"
              className="text-white/50 transition-colors hover:text-gold outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
