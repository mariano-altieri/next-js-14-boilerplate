'use client';

import { IoArrowBack } from 'react-icons/io5';

import { Button } from '@/app/commons/components/ui/button';
import { useRouter } from 'next/navigation';

export const ProductGoBack = () => {
  const router = useRouter();

  return (
    <Button variant="link" onClick={router.back} className="text-base pl-0">
      <IoArrowBack className="mr-2" /> Go back
    </Button>
  );
};
