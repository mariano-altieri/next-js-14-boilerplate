import Link from 'next/link';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/app/commons/components/ui/menubar';

import { AuthNavigation } from '@/app/(auth)/components/AuthNavigation';
import { MainLogo } from './MainLogo';

export const MainNavigation = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between w-full bg-slate-800 text-white p-3 gap-2">
      <MainLogo />
      <Menubar className="bg-transparent">
        <MenubarMenu>
          <MenubarTrigger asChild className="cursor-pointer">
            <Link href="/about">About</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger asChild className="cursor-pointer">
            <Link href="/contact">Contact</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Products</MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link href="/products">View all</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="/products">Featured</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="/products">Discounts</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <AuthNavigation />
      </Menubar>
    </header>
  );
};
