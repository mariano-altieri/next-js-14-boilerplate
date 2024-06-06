'use client';

import Link from 'next/link';
import type { Session } from 'next-auth';

import { Popover, PopoverContent, PopoverTrigger } from '@/app/commons/components/ui/popover';
import { Avatar, AvatarImage } from '@/app/commons/components/ui/avatar';

import { AuthNavigationUser } from './AuthNavigationUser';

interface Props {
  session: Session | null;
}

export const AuthNavigation = (props: Props) => {
  if (!props.session?.user) {
    return (
      <>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </>
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
