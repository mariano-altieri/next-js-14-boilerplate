import Link from 'next/link';

import { AuthNavigation } from '@/app/(auth)/components/AuthNavigation';
import { auth } from '@/app/(auth)/config/auth';

import { MainLogo } from './MainLogo';

export const MainNavigation = async () => {
  const session = await auth();

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between w-full bg-slate-800 text-white p-3 gap-2">
      <MainLogo />
      <nav className="flex items-center gap-4">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/products">Products</Link>
        <AuthNavigation session={session} />
      </nav>
    </header>
  );
};
