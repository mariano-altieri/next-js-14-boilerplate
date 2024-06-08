'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';

import { Button } from '@/app/commons/components/ui/button';

interface Props {
  username: string;
}

export const AuthNavigationUser = (props: Props) => {
  const { username } = props;

  return (
    <>
      <p className="font-medium text-md text-center capitalize">Welcome {username}</p>
      <div className="flex flex-col gap-2 p-3 my-3 border-t border-b">
        <Link href="/admin/dashboard">Admin</Link>
        <Link href="#" className="text-gray-400 cursor-default">
          My Profile
        </Link>
        <Link href="#" className="text-gray-400 cursor-default">
          My Shopping Cart
        </Link>
      </div>
      <Button className="w-full" variant="destructive" size="sm" onClick={() => signOut()}>
        Log Out
      </Button>
    </>
  );
};
