import React from 'react';
import { cn } from '@wenza/ui';

interface ContentPageLayoutProps {
  title?: string;
  children: React.ReactNode;
  containerClassName?: string;
  headingClassName?: string;
}

/**
 * Shared layout primitive for content-style pages (About, Legal, etc.).
 * Centred container with title and semantic structure.
 */
export function ContentPageLayout({ 
  title, 
  children, 
  containerClassName,
  headingClassName
}: ContentPageLayoutProps) {
  return (
    <div className={cn("flex min-h-screen flex-col", containerClassName)}>
      <main className="flex-1">
        <div className="mx-auto max-w-[768px] px-4 py-16 md:py-24">
          {title && (
            <h1 className={cn(
              "mb-12 font-heading text-4xl font-bold md:text-5xl",
              headingClassName || "text-text-heading"
            )}>
              {title}
            </h1>
          )}
          <div className="prose prose-stone max-w-none text-text-body">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
