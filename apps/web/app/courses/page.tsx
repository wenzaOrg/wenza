'use client';

import * as React from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useRequest } from '@wenza/api-client';
import type { Course } from '@wenza/api-client/types';
import {
  CourseCard,
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
} from '@wenza/ui';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';

const CATEGORIES = [
  { value: 'all', label: 'All Fields' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'data', label: 'Data & AI' },
  { value: 'design', label: 'Design' },
  { value: 'business', label: 'Business' },
  { value: 'security', label: 'Security' },
];

const SORT_OPTIONS = [
  { value: 'title_asc', label: 'A-Z' },
  { value: 'newest', label: 'Newest' },
  { value: 'price_low', label: 'Price: Low to High' },
  { value: 'price_high', label: 'Price: High to Low' },
];

export default function CoursesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get('category') || 'all';
  const query = searchParams.get('q') || '';
  const sort = searchParams.get('sort') || 'title_asc';
  const page = Number(searchParams.get('page')) || 1;

  const [searchInput, setSearchInput] = React.useState(query);

  const {
    data: courses,
    isLoading,
    total,
    last_page,
  } = useRequest<Course[]>('courses', {
    initialValue: [],
    params: {
      per_page: 12,
      page,
      category: category === 'all' ? undefined : category,
      q: query || undefined,
      sort,
    },
    keepPreviousData: true,
  });

  const updateFilters = (updates: Record<string, string | number | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value === undefined || value === 'all' || value === '') {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    if (!updates.page) {
      params.delete('page');
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ q: searchInput });
  };

  const clearFilters = () => {
    setSearchInput('');
    router.push(pathname);
  };

  const isFiltered = category !== 'all' || query !== '' || sort !== 'title_asc';

  return (
    <main className="min-h-screen bg-bg-page pb-24">
      {/* Hero — light, generous breadcrumb-style header (Figma's Course banner) */}
      <section className="relative bg-bg-card border-b border-border py-16 md:py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[8%] w-[40%] h-[60%] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute top-[30%] right-[-5%] w-[28%] h-[40%] bg-gold/15 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 md:px-20 relative">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-text-muted mb-3">
              <span>Home</span> <span className="mx-2 text-primary">{"//"}</span>{' '}
              <span className="text-primary">Courses</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-heading mb-6 tracking-tight leading-[1.1]">
              Master the Craft of{' '}
              <span className="text-primary">Next-Gen Tech</span>
            </h1>
            <p className="text-lg text-text-body/80 leading-relaxed max-w-2xl">
              Explore our curated catalogue of professional tracks. Whether
              you&rsquo;re breaking into tech or scaling your expertise, Wenza
              provides the tools, mentors, and network to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar — overlap into hero like Figma's floating cards */}
      <div className="container mx-auto px-6 md:px-20 -mt-8 relative z-10">
        <div className="bg-bg-card border border-border rounded-card p-4 shadow-card">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
              <Input
                placeholder="Search programmes, skills, or tools..."
                className="pl-12 bg-bg-page border-border h-12 text-text-body placeholder:text-text-muted/70"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchInput('');
                    updateFilters({ q: '' });
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-heading"
                >
                  <X size={16} />
                </button>
              )}
            </form>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex-1 min-w-[160px]">
                <Select
                  value={category}
                  onValueChange={(val) => updateFilters({ category: val })}
                >
                  <SelectTrigger className="h-12 bg-bg-page border-border text-text-body">
                    <div className="flex items-center gap-2">
                      <Filter size={16} className="text-primary" />
                      <SelectValue placeholder="Category" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 min-w-[160px]">
                <Select
                  value={sort}
                  onValueChange={(val) => updateFilters({ sort: val })}
                >
                  <SelectTrigger className="h-12 bg-bg-page border-border text-text-body">
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal size={16} className="text-primary" />
                      <SelectValue placeholder="Sort" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {SORT_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {isFiltered && (
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="text-text-muted hover:text-primary h-12"
                >
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Category pill row (Figma's "Choice favourite course from top category") */}
          <div className="mt-4 flex flex-wrap gap-2 px-1">
            {CATEGORIES.map((cat) => {
              const active = category === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => updateFilters({ category: cat.value })}
                  className={`rounded-pill border-2 px-4 py-1.5 text-xs font-bold transition-all ${
                    active
                      ? 'bg-primary border-primary text-white'
                      : 'bg-bg-page border-border text-text-muted hover:border-primary/30 hover:text-primary'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <section className="container mx-auto px-6 md:px-20 mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-text-heading">
            {isLoading ? (
              <span className="opacity-0">Loading...</span>
            ) : (
              <span>Showing {total || 0} programmes</span>
            )}
          </h2>
        </div>

        {!isLoading && courses?.length === 0 && (
          <div className="py-24 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-bg-card border border-border flex items-center justify-center mb-6">
              <Search className="text-text-muted" size={28} />
            </div>
            <h3 className="text-xl font-bold text-text-heading mb-2">
              No programmes found
            </h3>
            <p className="text-text-muted mb-8 max-w-sm mx-auto">
              We couldn&rsquo;t find any courses matching your current filters.
              Try adjusting your search terms or category.
            </p>
            <Button variant="primary" onClick={clearFilters}>
              Clear all filters
            </Button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full rounded-card" />
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))
            : courses?.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
        </div>

        {!isLoading && (last_page ?? 1) > 1 && (
          <div className="mt-20 flex items-center justify-center gap-2">
            <Button
              variant="secondary"
              disabled={page === 1}
              onClick={() => updateFilters({ page: page - 1 })}
              className="px-6"
            >
              Previous
            </Button>
            <div className="flex gap-1">
              {Array.from({ length: last_page ?? 1 }).map((_, i) => {
                const p = i + 1;
                return (
                  <Button
                    key={p}
                    variant={page === p ? 'primary' : 'ghost'}
                    onClick={() => updateFilters({ page: p })}
                    className="w-10 h-10 p-0"
                  >
                    {p}
                  </Button>
                );
              })}
            </div>
            <Button
              variant="secondary"
              disabled={page === last_page}
              onClick={() => updateFilters({ page: page + 1 })}
              className="px-6"
            >
              Next
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}
