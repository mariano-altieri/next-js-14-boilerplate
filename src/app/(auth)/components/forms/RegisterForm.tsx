'use client';

import { useState } from 'react';
// import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/app/commons/components/ui/button';
import { Form } from '@/app/commons/components/ui/form';
import { CustomRHFInput } from '@/app/commons/components/form/CustomRHFInput';
import { SubmitButton } from '@/app/commons/components/form/SubmitButton';

import { registerSchema, type Register } from '../../schemas/auth.schemas';
import { FormError } from './FormError';

export function RegisterForm() {
  const form = useForm<Register>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(values: Register): Promise<void> {
    setIsSubmitting(true);
    setError(null);

    // const response = await signIn('credentials', {
    //     redirect: false,
    //     email: values.email,
    //     password: hashedPassword,
    // });

    // if (response?.ok) {
    //     // @TODO - improve if possible without reloading the page. This is currently needed
    //     // to refresh server-side components.
    //     if (redirectTo) {
    //         window.location.href = redirectTo;
    //     } else {
    //         window.location.reload();
    //     }
    // }

    // if (response?.error) {
    //     setIsSubmitting(false);
    //     setError('Invalid Credentials');
    // }
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        {error && <FormError errorMessage={error} />}

        <CustomRHFInput label="Username" name="username" type="text" autoComplete="on" />
        <CustomRHFInput label="Email" name="email" type="email" autoComplete="on" />
        <CustomRHFInput label="Password" name="password" type="password" autoComplete="on" />

        <div className="pt-2">
          <SubmitButton
            label="Create Account"
            onSubmitLabel="Creating Account..."
            submitting={isSubmitting}
          />
        </div>
      </form>
    </Form>
  );
}