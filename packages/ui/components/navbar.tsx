'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './button';
import { focusRing } from '../lib/classes';
import { cn } from '../lib/utils';

const MAIN_SITE_URL = process.env.NEXT_PUBLIC_MAIN_SITE_URL || '';

const NAV_LINKS = [
  { label: 'Programmes', href: `${MAIN_SITE_URL}/courses` },
  { label: 'Mentors', href: `${MAIN_SITE_URL}/mentors` },
  {
    label: 'Scholarship',
    href:
      process.env.NEXT_PUBLIC_SCHOLARSHIP_URL ||
      'https://scholarship.wenza.com',
  },
  { label: 'About', href: `${MAIN_SITE_URL}/about` },
  { label: 'Contact', href: `${MAIN_SITE_URL}/contact` },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const loginUrl = process.env.NEXT_PUBLIC_APP_URL
    ? `${process.env.NEXT_PUBLIC_APP_URL}/login`
    : '/login';

  return (
    <header
      style={{ '--nav-height': '72px' } as React.CSSProperties}
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-200',
        isScrolled
          ? 'border-b border-border bg-bg-page/95 backdrop-blur-md'
          : 'border-b border-transparent bg-bg-page'
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-20">
        {/* Brand */}
        <Link
          href="/"
          className={cn(
            'font-heading text-2xl font-bold text-text-heading transition-colors hover:text-primary',
            focusRing
          )}
        >
          Wenza<span className="text-primary">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium text-text-body transition-colors hover:text-primary',
                focusRing
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href={loginUrl}>Sign in</Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link href="/apply">Apply now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-button text-text-heading transition-colors hover:bg-bg-card md:hidden',
            focusRing
          )}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 flex flex-col bg-bg-page md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'border-b border-border py-4 text-base font-medium text-text-heading transition-colors hover:text-primary',
                  focusRing
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 border-t border-border bg-bg-card px-6 py-4">
            <Button variant="outline" size="lg" className="w-full" asChild>
              <Link
                href={loginUrl}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </Link>
            </Button>
            <Button variant="primary" size="lg" className="w-full" asChild>
              <Link
                href="/apply"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
