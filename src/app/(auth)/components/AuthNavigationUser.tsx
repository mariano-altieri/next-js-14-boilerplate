'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';

import { MenubarItem, MenubarSeparator } from '@/app/commons/components/ui/menubar';
import { Button } from '@/app/commons/components/ui/button';
import { Avatar, AvatarImage } from '@/app/commons/components/ui/avatar';

interface Props {
  username: string;
  image: string;
}

export const AuthNavigationUser = (props: Props) => {
  const { username, image } = props;

  return (
    <>
      <MenubarItem asChild>
        <>
          <div className="flex items-center justify-center">
            <Avatar>
              <AvatarImage src={image} alt={username} />
            </Avatar>
          </div>

          <p className="border-b pb-3 mb-3 font-medium text-md text-center capitalize">
            Welcome {username}
          </p>
        </>
      </MenubarItem>
      <MenubarItem asChild>
        <Link href="/admin/dashboard">Admin</Link>
      </MenubarItem>
      <MenubarItem asChild>
        <Link href="/admin/profile">Profile</Link>
      </MenubarItem>
      <MenubarItem asChild>
        <Link href="/admin/some-other-link">Another section</Link>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem asChild>
        <Button className="w-full" variant="destructive" size="sm" onClick={() => signOut()}>
          Log Out
        </Button>
      </MenubarItem>
    </>
  );
};
