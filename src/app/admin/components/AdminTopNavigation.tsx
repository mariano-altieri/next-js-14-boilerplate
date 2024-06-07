import { Session } from 'next-auth';

import { AuthNavigation } from '@/app/(auth)/components/AuthNavigation';
import Link from 'next/link';
import { Button } from '@/app/commons/components/ui/button';

interface Props {
  pageTitle: string;
  session: Session | null;
}

export const AdminTopNavigation = (props: Props) => {
  const { pageTitle, session } = props;

  return (
    <>
      <h1 className="text-lg font-medium">{pageTitle}</h1>
      <div className="ml-auto flex items-center justify-center gap-3">
        <Button asChild className="text-sm">
          <Link href="/">Go to Public Site</Link>
        </Button>
        <AuthNavigation session={session} />
      </div>
    </>
  );
};
