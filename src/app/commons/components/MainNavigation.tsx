import Link from 'next/link';
import dynamic from 'next/dynamic';

import { MainLogo } from './MainLogo';

const AuthNavigation = dynamic(() => import('@/app/(auth)/components/AuthNavigation'), {
  ssr: false,
});

export const MainNavigation = async () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between w-full bg-slate-800 text-white p-3 gap-2">
      <MainLogo />
      <nav className="flex items-center gap-4">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/products">Products</Link>
        <div className="min-h-10 min-w-10 flex items-center justify-center">
          <AuthNavigation />
        </div>
      </nav>
    </header>
  );
};
