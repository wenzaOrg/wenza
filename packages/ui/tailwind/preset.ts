import type { Config } from 'tailwindcss';

/**
 * Shared Tailwind preset — exposes all Wenza design tokens as utility classes.
 * Every app's tailwind.config.ts extends this preset.
 * Per wenza/README.md §4.2.
 */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
        },
        secondary: 'var(--color-secondary)',
        gold: 'var(--color-gold)',
        'accent-gold': 'var(--color-accent-gold)',
        bg: {
          page: 'var(--color-bg-page)',
          card: 'var(--color-bg-card)',
          dark: 'var(--color-bg-dark)',
          'deep-brown': 'var(--color-bg-deep-brown)',
        },
        text: {
          heading: 'var(--color-text-heading)',
          body: 'var(--color-text-body)',
          muted: 'var(--color-text-muted)',
          'on-dark': 'var(--color-text-on-dark)',
        },
        border: 'var(--color-border)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
        button: 'var(--radius-button)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
    },
  },
} satisfies Partial<Config>;
