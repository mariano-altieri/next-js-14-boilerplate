import React from 'react';
import Link from 'next/link';
import { RiNextjsFill } from 'react-icons/ri';

export const MainLogo = () => {
  return (
    <Link href="/" className="flex items-center justify-center gap-2">
      <RiNextjsFill size={30} />
      Next JS 14 Boilerplate
    </Link>
  );
};
