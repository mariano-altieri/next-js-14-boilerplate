import React from 'react';
import { IoBasketOutline } from 'react-icons/io5';
import Link from 'next/link';

export const MainLogo = () => {
  return (
    <Link href="/" className="flex items-center justify-center gap-2">
      <IoBasketOutline size={30} />
      Next JS 14 Boilerplate
    </Link>
  );
};
