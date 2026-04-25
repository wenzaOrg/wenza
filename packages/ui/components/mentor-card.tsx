import * as React from 'react';
import { Card } from './card';
import { Pill } from './pill';
import Link from 'next/link';
import { cn } from '../lib/utils';
import { Linkedin } from 'lucide-react';

interface MentorCardProps {
  name: string;
  title: string;
  company: string;
  avatar_url?: string | null;
  bio?: string | null;
  linkedin_url?: string | null;
  courses?: { title: string; slug: string }[];
  className?: string;
}

export const MentorCard: React.FC<MentorCardProps> = ({
  name,
  title,
  company,
  avatar_url,
  bio,
  linkedin_url,
  courses,
  className,
}) => {
  return (
    <Card className={cn('p-6 flex flex-col items-center text-center space-y-4 h-full bg-bg-card border-border shadow-card', className)}>
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 bg-bg-page">
          {avatar_url ? (
            /* eslint-disable-next-line @next/next/no-img-element -- External avatar URL from ui-avatars.com or external source */
            <img
              src={avatar_url}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="/assets/images/placeholders/default-avatar.png"
              alt="Default avatar"
              className="w-full h-full object-cover opacity-50"
            />
          )}
        </div>
        {linkedin_url && (
          <a
            href={linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-1 -right-1 bg-white rounded-full p-1.5 shadow-sm hover:scale-110 transition-transform"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
          </a>
        )}
      </div>

      <div className="space-y-1">
        <h4 className="text-lg font-bold text-text-heading">{name}</h4>
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium text-primary uppercase tracking-wider leading-tight">
            {title}
          </p>
          <p className="text-xs text-text-muted mt-1">
            {company}
          </p>
        </div>
      </div>

      {bio && (
        <p className="text-sm text-text-body leading-relaxed line-clamp-3">
          {bio}
        </p>
      )}

      {courses && courses.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-auto pt-4 border-t border-border w-full">
          {courses.map((course) => (
            <Link key={course.slug} href={`/courses/${course.slug}`}>
              <Pill variant="muted" className="hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                {course.title}
              </Pill>
            </Link>
          ))}
        </div>
      )}
    </Card>
  );
};
