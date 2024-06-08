'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/app/commons/components/ui/form';
import { CustomRHFInput } from '@/app/commons/components/form/CustomRHFInput';
import { SubmitButton } from '@/app/commons/components/form/SubmitButton';

import { registerSchema, type Register } from '../../schemas/auth.schema';
import { FormError } from '../../../commons/components/form/FormError';
import { register } from '../../services/auth.actions';

interface Props {
  redirectTo?: string;
}

export function RegisterForm(props: Props) {
  const { redirectTo } = props;
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

    const response = await register(values.username, values.email, values.password);
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
          label="Email"
          name="email"
          type="email"
          autoComplete="on"
          description="Valid email: emilys@test.com"
        />
        <CustomRHFInput
          label="Password"
          name="password"
          type="password"
          autoComplete="on"
          description="Valid password: emilyspass"
        />

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
