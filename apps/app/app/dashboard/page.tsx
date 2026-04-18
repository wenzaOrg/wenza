'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useRequest } from '@wenza/api-client';
import type { RootState } from '@wenza/store';
import type { User } from '@wenza/api-client/types';

export default function DashboardPage() {
  const isAuthenticated = useSelector((s: RootState) => s.auth.isAuthenticated);
  const router = useRouter();

  // Client-side auth guard
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const { data: user, isLoading } = useRequest<User>('auth/me', {
    initialValue: undefined as unknown as User,
  });

  if (!isAuthenticated || isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-8">
        <p className="text-sm text-text-muted">Welcome back</p>
        <h1 className="font-heading mt-1 text-3xl font-bold text-text-heading">
          {user?.full_name ?? user?.first_name ?? 'Student'}
        </h1>
        <p className="mt-1 text-text-muted">{user?.email}</p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-card border border-border bg-bg-card p-6 shadow-card">
          <p className="text-sm text-text-muted">Enrolled programmes</p>
          <p className="mt-1 font-heading text-2xl font-bold text-text-heading">0</p>
        </div>
        <div className="rounded-card border border-border bg-bg-card p-6 shadow-card">
          <p className="text-sm text-text-muted">Lessons completed</p>
          <p className="mt-1 font-heading text-2xl font-bold text-text-heading">0</p>
        </div>
        <div className="rounded-card border border-border bg-bg-card p-6 shadow-card">
          <p className="text-sm text-text-muted">Certificates earned</p>
          <p className="mt-1 font-heading text-2xl font-bold text-text-heading">0</p>
        </div>
      </div>

      <div className="mt-8 rounded-card border border-border bg-bg-card p-6 shadow-card">
        <h2 className="font-heading text-lg font-bold text-text-heading">
          Your enrolled programmes
        </h2>
        <p className="mt-4 text-text-muted">
          You are not enrolled in any programmes yet.{' '}
          <a
            href={process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}
            className="font-medium text-primary hover:underline"
          >
            Browse all 16 programmes →
          </a>
        </p>
      </div>
    </main>
  );
}
