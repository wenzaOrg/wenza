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
  Skeleton
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

  // URL State
  const category = searchParams.get('category') || 'all';
  const query = searchParams.get('q') || '';
  const sort = searchParams.get('sort') || 'title_asc';
  const page = Number(searchParams.get('page')) || 1;

  // Search input local state for debouncing if needed, or immediate
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

    // Reset pagination on filter change unless explicitly setting page
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
    <main className="min-h-screen bg-bg-dark pb-24">
      {/* Hero Header */}
      <section className="relative border-b border-white/5 bg-white/[0.02] py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[24%] -left-[10%] w-[40%] h-[60%] bg-brand-primary/10 blur-[120px] rounded-full rotate-12" />
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Master the Craft of <span className="text-brand-primary">Next-Gen Tech</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Explore our curated catalogue of professional tracks. Whether you’re breaking into tech 
              or scaling your expertise, Wenza provides the tools, mentors, and network to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="container -mt-8 relative z-10">
        <div className="bg-[#0A0A0B] border border-white/10 rounded-2xl p-4 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
              <Input
                placeholder="Search programmes, skills, or tools..."
                className="pl-12 bg-white/5 border-white/10 h-12 text-white placeholder:text-white/20"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              {searchInput && (
                <button 
                  type="button"
                  onClick={() => { setSearchInput(''); updateFilters({ q: '' }); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </form>

            <div className="flex flex-wrap items-center gap-3">
              {/* Category */}
              <div className="flex-1 min-w-[160px]">
                <Select
                  value={category}
                  onValueChange={(val) => updateFilters({ category: val })}
                >
                  <SelectTrigger className="h-12 bg-white/5 border-white/10 text-white">
                    <div className="flex items-center gap-2">
                      <Filter size={16} className="text-brand-primary" />
                      <SelectValue placeholder="Category" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-[#0A0A0B] border-white/10 text-white">
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort */}
              <div className="flex-1 min-w-[160px]">
                <Select
                  value={sort}
                  onValueChange={(val) => updateFilters({ sort: val })}
                >
                  <SelectTrigger className="h-12 bg-white/5 border-white/10 text-white">
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal size={16} className="text-brand-primary" />
                      <SelectValue placeholder="Sort weight" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-[#0A0A0B] border-white/10 text-white">
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
                  className="text-white/40 hover:text-brand-primary h-12"
                >
                  Clear
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <section className="container mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-white">
            {isLoading ? (
              <span className="opacity-0">Loading...</span>
            ) : (
              <span>Showing {total || 0} programmes</span>
            )}
          </h2>
        </div>

        {/* Empty State */}
        {!isLoading && (courses?.length === 0) && (
          <div className="py-24 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <Search className="text-white/20" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No programmes found</h3>
            <p className="text-white/50 mb-8 max-w-sm mx-auto">
              We couldn’t find any courses matching your current filters. 
              Try adjusting your search terms or category.
            </p>
            <Button variant="primary" onClick={clearFilters}>
              Clear all filters
            </Button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-2xl" />
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-20 w-full" />
              </div>
            ))
          ) : (
            courses?.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          )}
        </div>

        {/* Pagination */}
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
