'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './button';
import { focusRing } from '../lib/classes';
import { cn } from '../lib/utils';

const getSiteUrl = () => {
  if (typeof window === 'undefined') return process.env.NEXT_PUBLIC_MAIN_SITE_URL || '';
  return process.env.NEXT_PUBLIC_MAIN_SITE_URL || '';
};

const MAIN_SITE_URL = getSiteUrl();

const NAV_LINKS = [
  { label: 'Programmes', href: `${MAIN_SITE_URL}/courses` },
  { label: 'Mentors', href: `${MAIN_SITE_URL}/mentors` },
  { label: 'Scholarship', href: process.env.NEXT_PUBLIC_SCHOLARSHIP_URL || 'https://scholarship.wenza.com' },
  { label: 'About', href: `${MAIN_SITE_URL}/about` },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loginUrl = process.env.NEXT_PUBLIC_APP_URL ? `${process.env.NEXT_PUBLIC_APP_URL}/login` : '/login';

  return (
    <header
      style={{ '--nav-height': '72px' } as React.CSSProperties}
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-bg-card shadow-card' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className={cn(
            'font-heading text-2xl font-bold transition-colors',
            focusRing,
            isScrolled ? 'text-text-heading' : 'text-white'
          )}
        >
          Wenza.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                focusRing,
                isScrolled
                  ? 'text-text-body hover:text-primary'
                  : 'text-white/90 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" asChild>
            <Link href={loginUrl}>
              Sign in
            </Link>
          </Button>
          <Button variant="primary" asChild>
            <Link href="/apply">
              Apply Now
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            'transition-colors md:hidden',
            focusRing,
            isScrolled ? 'text-text-heading' : 'text-white'
          )}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[var(--nav-height)] z-40 bg-bg-card px-4 py-6 shadow-xl md:hidden">
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'text-lg font-medium text-text-body transition-colors hover:text-primary',
                  focusRing
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-4 border-t border-border pt-6">
              <Button variant="ghost" className="w-full text-lg" asChild>
                <Link href={loginUrl} onClick={() => setIsMobileMenuOpen(false)}>
                  Sign in
                </Link>
              </Button>
              <Button variant="primary" size="lg" className="w-full text-lg" asChild>
                <Link href="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
