'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form } from '@/app/commons/components/ui/form';
import { CustomRHFInput } from '@/app/commons/components/form/CustomRHFInput';
import { SubmitButton } from '@/app/commons/components/form/SubmitButton';

import { signInSchema, type SignIn } from '../../schemas/auth.schemas';
import { FormError } from './FormError';
import { login } from '../../services/auth.actions';

export function LoginForm() {
  const form = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(values: SignIn): Promise<void> {
    setIsSubmitting(true);
    setError(null);

    await login(values.username, values.password);

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
        <CustomRHFInput label="Password" name="password" type="password" autoComplete="on" />

        <div className="pt-2">
          <SubmitButton label="Log In" onSubmitLabel="Logging In..." submitting={isSubmitting} />
        </div>
      </form>
    </Form>
  );
}
