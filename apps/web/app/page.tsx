import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wenza — Online Tech Academy',
  description:
    '16 cohort-based tech programmes with real mentors, accountability check-ins, and verifiable credentials. Scholarships available — up to 90% off.',
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <span className="mb-4 inline-block rounded-pill bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          16 programmes · Cohort-based · Verifiable credentials
        </span>
        <h1 className="font-heading mt-4 text-4xl font-bold text-text-heading md:text-6xl">
          Build a tech career that lasts
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Wenza is a distributed online tech academy. Beginners enrol in cohort-based programmes,
          learn through live classes and practical projects, and graduate with credentials
          employers can verify in under a second.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/courses"
            className="rounded-button bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Browse all programmes
          </Link>
          <Link
            href="/apply"
            className="rounded-button border border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary/5"
          >
            Apply now
          </Link>
        </div>
      </div>
    </main>
  );
}
