"use client";

import React, { Suspense } from 'react';
import LoggedOutView from '@/components/page/Courses/LoggedOutView';

export default function CoursesPage() {
  return (
    <main className="min-h-screen flex flex-col pt-[64px]">
      <div className="flex-1 w-full flex flex-col">
        <Suspense fallback={<div className="p-20 text-center">Loading courses...</div>}>
            <LoggedOutView />
        </Suspense>
      </div>
    </main>
  );
}
