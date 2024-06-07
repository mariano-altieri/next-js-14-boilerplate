'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';

import { Button, ButtonProps } from '@/app/commons/components/ui/button';
import { cn } from '@/app/commons/libs/utils';

interface Props extends ButtonProps {
  children: React.ReactNode;
  onAuthorizedClick: () => void;
  className?: string;
}

const Modal = dynamic(() => import('@/app/(auth)/components/modals/AuthModal'), {
  ssr: false,
});

export const AuthButton = (props: Props) => {
  const { children, onAuthorizedClick, className = '' } = props;
  const [showModal, setShowModal] = useState(false);
  const session = useSession();

  const baseClass = cn('text-sm flex gap-2 items-center', className);

  const handleClick = () => {
    if (session?.data?.user) {
      setShowModal(false);

      return onAuthorizedClick();
    }

    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <Modal open={showModal} onClose={handleClose} />}
      <Button className={baseClass} size="sm" type="button" onClick={handleClick}>
        {children}
      </Button>
    </>
  );
};
