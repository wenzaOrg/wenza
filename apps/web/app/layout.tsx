import type { Metadata } from 'next';
import { urbanist, dmSans } from '@wenza/ui/fonts';
import { Navbar, Footer } from '@wenza/ui';
import { StoreProvider } from '@wenza/store';
import { Toaster } from 'sonner';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Wenza — Online Tech Academy',
    template: '%s | Wenza',
  },
  description:
    'Wenza is a distributed online tech academy offering 16 cohort-based programmes across software development, data science, product design, cybersecurity, and more. Scholarships available — up to 90% off.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  openGraph: {
    siteName: 'Wenza',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${urbanist.variable} ${dmSans.variable}`}>
      <body className="font-body bg-bg-page text-text-body antialiased relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-button focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <StoreProvider>
          <Navbar />
          <div className="flex min-h-screen flex-col">
            <main id="main-content" className="flex-1">
              {children}
            </main>
          </div>
          <Footer />
          <Toaster richColors position="top-right" />
        </StoreProvider>
      </body>
    </html>
  );
}
