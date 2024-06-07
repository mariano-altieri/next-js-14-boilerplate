'use client';

import { useState } from 'react';

import { Dialog, DialogContent } from '@/app/commons/components/ui/dialog';
import { DialogTitle } from '@/app/commons/components/ui/dialog';
import { LoginForm } from '@/app/(auth)/components/forms/LoginForm';
import { RegisterForm } from '@/app/(auth)/components/forms/RegisterForm';
import { Button } from '@/app/commons/components/ui/button';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal = (props: Props) => {
  const { open, onClose } = props;
  const [mode, setMode] = useState<'login' | 'register'>('login');

  const onOpenChange = (value: boolean) => {
    !value && onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>Authentication required!</DialogTitle>
        {mode === 'login' ? (
          <>
            <LoginForm />
            <Button
              variant="link"
              className="text-sm underline hover:no-underline -mt-2"
              onClick={() => setMode('register')}
            >
              Create a new account
            </Button>
          </>
        ) : (
          <>
            <RegisterForm />
            <Button
              variant="link"
              className="text-sm underline hover:no-underline -mt-2"
              onClick={() => setMode('login')}
            >
              Already have an account?
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
