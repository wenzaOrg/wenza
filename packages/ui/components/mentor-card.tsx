import { Card } from './card';
import { cn } from '../lib/utils';
import { Linkedin } from 'lucide-react';

interface MentorCardProps {
  name: string;
  title: string;
  avatar_url?: string | null;
  bio?: string | null;
  linkedin_url?: string | null;
  className?: string;
}

export const MentorCard: React.FC<MentorCardProps> = ({
  name,
  title,
  avatar_url,
  bio,
  linkedin_url,
  className,
}) => {
  return (
    <Card className={cn('p-6 flex flex-col items-center text-center space-y-4 h-full', className)}>
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 bg-white/5">
          {avatar_url ? (
            <img
              src={avatar_url}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-primary text-2xl font-bold">
              {name.charAt(0)}
            </div>
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
        <p className="text-sm font-medium text-primary uppercase tracking-wider leading-tight">
          {title}
        </p>
      </div>

      {bio && (
        <p className="text-sm text-text-body/80 leading-relaxed line-clamp-3">
          {bio}
        </p>
      )}
    </Card>
  );
};
