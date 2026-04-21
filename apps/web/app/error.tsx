'use client';

import * as React from 'react';
import Link from 'next/link';
import { ContentPageLayout } from '../components/content-page-layout';
import { Button } from '@wenza/ui';
import { RefreshCcw, Home } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service if needed
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <ContentPageLayout title="Something went wrong on our end.">
      <div className="space-y-8">
        <p className="text-xl text-text-body font-medium leading-relaxed">
          We’ve been notified and our team is investigating. Please try again in a few minutes, or contact admissions@wenza.com if the problem continues.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row pt-4">
          <Button 
            variant="primary" 
            className="h-14 px-8 w-full sm:w-auto font-bold gap-2"
            onClick={() => reset()}
          >
            <RefreshCcw size={20} />
            Try again
          </Button>
          <Link href="/" passHref>
            <Button variant="secondary" className="h-14 px-8 w-full sm:w-auto font-bold gap-2">
              <Home size={20} />
              Back to home
            </Button>
          </Link>
        </div>
      </div>
    </ContentPageLayout>
  );
}
