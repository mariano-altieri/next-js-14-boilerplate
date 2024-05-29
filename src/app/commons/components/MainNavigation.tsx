import { IoBasketOutline } from 'react-icons/io5';

import { AuthLinks } from '@/app/(auth)/components/AuthLinks';
import Link from 'next/link';

export const MainNavigation = () => {
  return (
    <header className="flex items-center justify-between w-full bg-slate-800 text-white p-3">
      <Link href="/" className="flex items-center justify-center gap-2">
        <IoBasketOutline size={30} />
        Mi Logo
      </Link>
      <AuthLinks />
    </header>
  );
};
