'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { Popover, PopoverContent, PopoverTrigger } from '@/app/commons/components/ui/popover';
import { Avatar, AvatarImage } from '@/app/commons/components/ui/avatar';
import { Button } from '@/app/commons/components/ui/button';

import { AuthNavigationUser } from './AuthNavigationUser';

export const AuthNavigation = () => {
  const session = useSession();
  const { data, status } = session;
  const { user } = data ?? {};

  if (status === 'loading') {
    return null;
  }

  if (!user) {
    return (
      <Button asChild variant="secondary" size="sm">
        <Link href="/login">Login</Link>
      </Button>
    );
  }

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

export default AuthNavigation;
