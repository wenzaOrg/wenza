import { Urbanist, DM_Sans } from 'next/font/google';

/**
 * Heading font — Urbanist Bold.
 * Sets the --font-heading CSS variable used in tokens.css.
 * Per wenza/README.md §5.
 */
export const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

/**
 * Body font — DM Sans.
 * Sets the --font-body CSS variable used in tokens.css.
 * Per wenza/README.md §5.
 */
export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});
