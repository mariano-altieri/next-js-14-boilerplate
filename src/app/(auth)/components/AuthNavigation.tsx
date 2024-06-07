'use client';

import Link from 'next/link';
import type { Session } from 'next-auth';

import { Popover, PopoverContent, PopoverTrigger } from '@/app/commons/components/ui/popover';
import { Avatar, AvatarImage } from '@/app/commons/components/ui/avatar';

import { AuthNavigationUser } from './AuthNavigationUser';
import { Button } from '@/app/commons/components/ui/button';

interface Props {
  session: Session | null;
}

export const AuthNavigation = (props: Props) => {
  if (!props.session?.user) {
    return (
      <Button asChild variant="secondary" size="sm">
        <Link href="/login">Login</Link>
      </Button>
    );
  }

  const { user } = props.session;

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src={user.image} alt={user.username} />
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <AuthNavigationUser username={user.username} />
      </PopoverContent>
    </Popover>
  );
};
