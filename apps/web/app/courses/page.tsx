'use client';

import { useRequest } from '@wenza/api-client';
import type { Course } from '@wenza/api-client/types';
import { formatNaira } from '@wenza/ui/lib/format';
import Link from 'next/link';

const CATEGORY_LABELS: Record<string, string> = {
  engineering: 'Engineering & Development',
  data: 'Data & Emerging Technologies',
  design: 'Design & Creativity',
  business: 'Management & Business',
  security: 'Security',
};

function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex flex-col rounded-card border border-border bg-bg-card p-5 shadow-card transition-shadow hover:shadow-lg"
    >
      <span className="mb-3 w-fit rounded-pill bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
        {CATEGORY_LABELS[course.category] ?? course.category}
      </span>
      <h2 className="font-heading text-lg font-bold text-text-heading group-hover:text-primary transition-colors">
        {course.title}
      </h2>
      <p className="mt-2 flex-1 line-clamp-3 text-sm text-text-muted">{course.description}</p>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-lg font-bold text-text-heading">{formatNaira(course.price_ngn)}</p>
          {course.scholarship_price_ngn && (
            <p className="text-xs text-success">
              Scholarship: {formatNaira(course.scholarship_price_ngn)}
            </p>
          )}
        </div>
        <span className="text-xs text-text-muted">{course.duration_weeks} wks</span>
      </div>
    </Link>
  );
}

function CourseCardSkeleton() {
  return (
    <div className="animate-pulse rounded-card border border-border bg-bg-card p-5 shadow-card">
      <div className="mb-3 h-5 w-24 rounded-pill bg-border" />
      <div className="h-6 w-3/4 rounded-button bg-border" />
      <div className="mt-2 space-y-2">
        <div className="h-4 rounded bg-border" />
        <div className="h-4 rounded bg-border" />
        <div className="h-4 w-2/3 rounded bg-border" />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="h-6 w-24 rounded bg-border" />
        <div className="h-4 w-12 rounded bg-border" />
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const {
    data: courses,
    isLoading,
    total,
    current_page,
    last_page,
    onLoadMore,
    onLoadPrevious,
    onChangeParams,
  } = useRequest<Course[]>('courses', {
    initialValue: [],
    params: { per_page: 16 },
    keepPreviousData: true,
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:py-16">
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
          All Programmes
        </h1>
        <p className="mt-2 text-text-muted">
          {isLoading ? '...' : `${total ?? 0} programmes available`}
        </p>

        {/* Category filter */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { value: '', label: 'All' },
            { value: 'engineering', label: 'Engineering' },
            { value: 'data', label: 'Data & AI' },
            { value: 'design', label: 'Design' },
            { value: 'business', label: 'Business' },
            { value: 'security', label: 'Security' },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => onChangeParams({ category: cat.value || undefined })}
              className="rounded-pill border border-border px-4 py-1 text-sm text-text-body transition-colors hover:border-primary hover:text-primary"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      {/* Course grid — mobile-first: 1 col → 2 → 3 → 4 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => <CourseCardSkeleton key={i} />)
          : courses?.map((course) => <CourseCard key={course.id} course={course} />)}
      </div>

      {/* Pagination */}
      {!isLoading && ((last_page ?? 1) > 1) && (
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={onLoadPrevious}
            disabled={current_page === 1}
            className="rounded-button border border-border px-5 py-2 text-sm text-text-body transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <span className="flex items-center text-sm text-text-muted">
            Page {current_page} of {last_page}
          </span>
          <button
            onClick={onLoadMore}
            disabled={current_page === last_page}
            className="rounded-button bg-primary px-5 py-2 text-sm text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
