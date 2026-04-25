import * as React from 'react';
import Link from 'next/link';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './card';
import { Pill } from './pill';

export interface CourseCardProps {
  course: {
    id: string | number;
    slug: string;
    title: string;
    category: string;
    description: string;
    duration_weeks: number;
    format: string;
    price_ngn: number;
    thumbnail_url?: string | null;
  };
}

export function CourseCard({ course }: CourseCardProps) {
  // Map raw categories to formatted labels
  const categoryLabels: Record<string, string> = {
    engineering: 'Engineering',
    data: 'Data',
    design: 'Design',
    business: 'Business',
    security: 'Security',
  };

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-card"
    >
      <Card variant="elevated" className="h-full flex flex-col group-hover:-translate-y-1 transition-transform duration-300">
        {/* Top Banner Accent */}
        <div className="h-32 relative overflow-hidden shrink-0">
          <img
            src={course.thumbnail_url || `/assets/images/courses/${course.category}.png`}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-transparent" />
        </div>
        
        <CardContent className="flex flex-1 flex-col pt-6">
          <div className="mb-4">
            <Pill variant="primary">
              {categoryLabels[course.category] || course.category}
            </Pill>
          </div>
          
          <h3 className="font-heading mb-2 text-xl font-bold text-text-heading group-hover:text-primary transition-colors line-clamp-2">
            {course.title}
          </h3>
          
          <p className="mb-6 flex-1 text-sm text-text-muted line-clamp-3">
            {course.description}
          </p>
          
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <div className="flex items-center gap-1.5">
              <Clock size={16} className="text-primary/70" />
              <span>{course.duration_weeks} weeks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen size={16} className="text-primary/70" />
              <span className="capitalize">{course.format.replace('_', ' ')}</span>
            </div>
          </div>
          
          <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
            <div className="font-medium text-text-body">
              ₦{course.price_ngn.toLocaleString()}
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:translate-x-1 group-hover:bg-primary group-hover:text-white">
              <ArrowRight size={16} />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
