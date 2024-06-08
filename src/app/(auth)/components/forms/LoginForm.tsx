'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form } from '@/app/commons/components/ui/form';
import { CustomRHFInput } from '@/app/commons/components/form/CustomRHFInput';
import { SubmitButton } from '@/app/commons/components/form/SubmitButton';
import { FormError } from '@/app/commons/components/form/FormError';

import { signInSchema, type SignIn } from '../../schemas/auth.schema';
import { login } from '../../services/auth.actions';

interface Props {
  redirectTo?: string;
}

export function LoginForm(props: Props) {
  const { redirectTo } = props;
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

    const response = await login(values.username, values.password);
    setIsSubmitting(false);

    if (!response.ok && response.message) {
      return setError(response.message);
    }

    // TODO: this should be handled by the auth store but it's the only way currently to ensure server and client sessions are synced
    if (redirectTo) {
      window.location.replace(redirectTo);
    } else {
      window.location.reload();
    }
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
