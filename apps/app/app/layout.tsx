import type { Metadata } from 'next';
import { urbanist, dmSans } from '@wenza/ui/fonts';
import { StoreProvider } from '@wenza/store';
import { Toaster } from 'sonner';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Wenza App — Student Dashboard',
    template: '%s | Wenza',
  },
  description: 'Your Wenza learning dashboard.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${urbanist.variable} ${dmSans.variable}`}>
      <body className="font-body bg-bg-page text-text-body antialiased">
        <StoreProvider>
          {children}
          <Toaster richColors position="top-right" />
        </StoreProvider>
      </body>
    </html>
  );
}
