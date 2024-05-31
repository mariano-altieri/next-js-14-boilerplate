'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { MenubarContent, MenubarMenu, MenubarTrigger } from '@/app/commons/components/ui/menubar';

import { AuthNavigationUser } from './AuthNavigationUser';

export const AuthNavigation = () => {
  const session = useSession();

  if (session.status === 'loading') {
    return <span className="text-sm px-3">Loading...</span>;
  }

  const { data } = session;
  const user = data?.user;

  if (!user) {
    return (
      <>
        <MenubarMenu>
          <MenubarTrigger asChild className="cursor-pointer">
            <Link href="/login" className="text-white">
              Login
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger asChild className="cursor-pointer">
            <Link href="/register" className="text-white">
              Register
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      </>
    );
  }

  return (
    <MenubarMenu>
      <MenubarTrigger>My Profile</MenubarTrigger>
      <MenubarContent>
        <AuthNavigationUser username={user.username} image={user.image} />
      </MenubarContent>
    </MenubarMenu>
  );
};
