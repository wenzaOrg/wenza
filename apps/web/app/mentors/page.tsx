import type { Metadata } from 'next';
import Link from 'next/link';
import { MentorCard, Button, cn } from '@wenza/ui';
import { ChevronRight } from 'lucide-react';
import { displayMentorName, displayMentorCompany } from '../../lib/mentor-display';

export const metadata: Metadata = {
  title: 'Meet our mentors | Wenza',
  description:
    "Learn from engineers, designers, and product leaders building Africa's technology future.",
};

interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  bio: string | null;
  avatar_url: string | null;
  linkedin_url: string | null;
  category: string;
  courses: { title: string; slug: string }[];
}

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Engineering', value: 'engineering' },
  { label: 'Data', value: 'data' },
  { label: 'Design', value: 'design' },
  { label: 'Business', value: 'business' },
  { label: 'Security', value: 'security' },
];

async function getMentors(category?: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000/api/v1';
  let url = `${apiUrl}/mentors?per_page=100`;
  if (category && category !== 'all') {
    url += `&category=${category}`;
  }
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return [];
    const json = await res.json();
    return (json.data?.records ?? []) as Mentor[];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch mentors:', error);
    return [];
  }
}

export default async function MentorsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const currentCategory = searchParams.category || 'all';
  const mentors = await getMentors(currentCategory);

  return (
    <div className="flex flex-col">
      {/* 1. HERO — light banner with breadcrumb (Figma: TEACHER hero) */}
      <section className="relative bg-bg-card border-b border-border py-20 md:py-24 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[10%] -left-[8%] w-[35%] h-[60%] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute top-[10%] right-[-5%] w-[28%] h-[50%] bg-gold/15 blur-[100px] rounded-full" />
        </div>
        <div className="container mx-auto relative text-center">
          <div className="text-sm font-medium text-text-muted mb-4">
            <span>Home</span>{' '}
            <span className="mx-2 text-primary">//</span>{' '}
            <span className="text-primary">Mentors</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-heading mb-5 leading-[1.1]">
            Meet our <span className="text-primary">Mentors</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-body leading-relaxed">
            Every Wenza programme is taught by people who ship production code
            at the companies our graduates want to work for.
          </p>
        </div>
      </section>

      {/* 2. FILTER BAR — pill row (Figma's category pill row) */}
      <section className="bg-bg-page py-8 sticky top-[72px] z-30 border-b border-border">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.value}
                href={cat.value === 'all' ? '/mentors' : `/mentors?category=${cat.value}`}
                className={cn(
                  'whitespace-nowrap px-6 py-2 rounded-pill text-sm font-bold transition-all border-2',
                  currentCategory === cat.value
                    ? 'bg-primary border-primary text-white'
                    : 'bg-bg-card border-border text-text-muted hover:border-primary/30 hover:text-primary'
                )}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MENTOR GRID — eyebrow + title + 4-up grid */}
      <section className="bg-bg-page py-16 md:py-24 px-6 md:px-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Teacher
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-heading">
              Meet Our Instructor
            </h2>
          </div>

          {mentors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mentors.map((mentor) => {
                const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=B05010&color=fff&size=400`;
                return (
                  <MentorCard
                    key={mentor.id}
                    name={displayMentorName(mentor.name)}
                    title={mentor.title}
                    company={displayMentorCompany(mentor.company)}
                    avatar_url={avatarUrl}
                    bio={mentor.bio}
                    linkedin_url={mentor.linkedin_url}
                    courses={mentor.courses}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-24 bg-bg-card rounded-card border-2 border-dashed border-border max-w-2xl mx-auto px-6">
              <p className="text-lg font-bold text-text-heading mb-2">
                No mentors found in this category.
              </p>
              <p className="text-text-muted mb-8">
                Try a different filter to see other members of our mentor network.
              </p>
              <Button variant="outline" asChild>
                <Link href="/mentors">Clear all filters</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="bg-bg-deep-brown py-16 md:py-24 px-6 md:px-20 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to learn from the best?
          </h2>
          <p className="mb-10 text-lg text-text-on-dark/80">
            Browse the catalogue and find a mentor matched to your goals.
          </p>
          <Button variant="primary" size="lg" asChild className="h-14 px-8 text-lg">
            <Link href="/courses">
              Browse programmes <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
