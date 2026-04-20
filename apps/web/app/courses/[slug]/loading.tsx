import { Skeleton } from '@wenza/ui';

export default function CourseLoading() {
  return (
    <div className="min-h-screen bg-bg-page">
      {/* Hero Skeleton */}
      <section className="bg-bg-deep-brown py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <Skeleton className="h-6 w-32 rounded-pill bg-white/10" />
            <Skeleton className="h-12 w-full md:w-3/4 bg-white/10" />
            <Skeleton className="h-4 w-full bg-white/5" />
            <Skeleton className="h-4 w-5/6 bg-white/5" />
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-12 w-40 rounded-button bg-white/10" />
              <Skeleton className="h-12 w-40 rounded-button bg-white/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Skeleton */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-32 rounded-card bg-bg-card shadow-card" />
          ))}
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="container mx-auto px-4 py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <Skeleton className="h-8 w-48 bg-gray-200" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full bg-gray-100" />
              <Skeleton className="h-4 w-full bg-gray-100" />
              <Skeleton className="h-4 w-3/4 bg-gray-100" />
            </div>
          </div>
          <div>
            <Skeleton className="h-64 rounded-card bg-gray-100" />
          </div>
        </div>
      </section>
    </div>
  );
}
