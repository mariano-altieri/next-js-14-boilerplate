'use client';

import { useEffect } from 'react';

import { CustomError } from '@/app/commons/components/CustomError';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    // Persist error to 3rd party service or DB
    // Sentry.captureException(error);
  }, [error]);

  return <CustomError />;
}
