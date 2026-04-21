import type { Metadata } from 'next';
import { urbanist, dmSans } from '@wenza/ui/fonts';
import { StoreProvider } from '@wenza/store';
import { Toaster } from 'sonner';
import { CookieConsent } from '@wenza/ui';
import './globals.css';

export const metadata: Metadata = { title: 'Wenza Scholarship', description: 'Apply for a Wenza scholarship — up to 90% off your programme fee.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${urbanist.variable} ${dmSans.variable}`}>
      <body className="font-body bg-bg-page text-text-body antialiased">
        <StoreProvider>
          {children}
          <CookieConsent mainSiteUrl={process.env.NEXT_PUBLIC_MAIN_SITE_URL} />
          <Toaster richColors position="top-right" />
        </StoreProvider>
      </body>
    </html>
  );
}
