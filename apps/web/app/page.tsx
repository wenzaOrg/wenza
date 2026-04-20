import type { Metadata } from 'next';
import { HomePageClient } from '../components/home-page-client';

export const metadata: Metadata = {
  title: 'Wenza — Online Tech Academy',
  description:
    '16 cohort-based tech programmes with real mentors, accountability check-ins, and verifiable credentials. Scholarships available — up to 90% off.',
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomePageClient />
    </main>
  );
}
