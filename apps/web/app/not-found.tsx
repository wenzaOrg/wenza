import Link from 'next/link';
import { ContentPageLayout } from '../components/content-page-layout';
import { Button } from '@wenza/ui';
import { Home, BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <ContentPageLayout title="This page has gone off to learn something new.">
      <div className="space-y-8">
        <p className="text-xl text-text-body font-medium leading-relaxed">
          The page you’re looking for doesn’t exist, or it’s moved to a different URL. Don’t worry — you haven’t lost your progress.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row pt-4">
          <Link href="/" passHref>
            <Button variant="primary" className="h-14 px-8 w-full sm:w-auto font-bold gap-2">
              <Home size={20} />
              Back to home
            </Button>
          </Link>
          <Link href="/courses" passHref>
            <Button variant="secondary" className="h-14 px-8 w-full sm:w-auto font-bold gap-2">
              <BookOpen size={20} />
              Browse programmes
            </Button>
          </Link>
        </div>
      </div>
    </ContentPageLayout>
  );
}
