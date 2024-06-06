'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Form } from '@/app/commons/components/ui/form';
import { CustomRHFInput } from '@/app/commons/components/form/CustomRHFInput';
import { SubmitButton } from '@/app/commons/components/form/SubmitButton';
import { FormError } from '@/app/commons/components/form/FormError';
import { DEFAULT_LANDING_PAGE } from '@/app/commons/constants/routes';

import { signInSchema, type SignIn } from '../../schemas/auth.schemas';
import { login } from '../../services/auth.actions';

interface Props {
  redirectTo?: string;
}

export function LoginForm(props: Props) {
  const redirectTo = props.redirectTo || DEFAULT_LANDING_PAGE;
  const form = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(values: SignIn): Promise<void> {
    setIsSubmitting(true);
    setError(null);

    const response = await login(values.username, values.password);
    setIsSubmitting(false);

    if (!response.ok && response.message) {
      return setError(response.message);
    }

    return router.replace(redirectTo);
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        {error && <FormError errorMessage={error} />}

        <CustomRHFInput
          label="Username"
          name="username"
          type="text"
          autoComplete="on"
          description="Valid username: emilys"
        />
        <CustomRHFInput
          label="Password"
          name="password"
          type="password"
          autoComplete="on"
          description="Valid password: emilyspass"
        />

        <div className="pt-2">
          <SubmitButton label="Log In" onSubmitLabel="Logging In..." submitting={isSubmitting} />
        </div>
      </form>
    </Form>
  );
}
