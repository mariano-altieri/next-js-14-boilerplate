import Link from 'next/link';

import { AuthLayout } from '@/app/commons/components/templates/AuthLayout';

import { AuthCard } from '../../components/AuthCard';
import { LoginForm } from '../../components/forms/LoginForm';
import { DEFAULT_LANDING_PAGE } from '@/app/commons/constants/routes';

export default function LoginPage({
  searchParams,
}: {
  searchParams?: {
    redirectTo?: string;
  };
}) {
  return (
    <AuthLayout>
      <div className="h-screen w-screen flex flex-col gap-2 items-center justify-center">
        <AuthCard authFlow="login">
          <LoginForm redirectTo={searchParams?.redirectTo || DEFAULT_LANDING_PAGE} />
        </AuthCard>
        <Link className="text-sm underline hover:no-underline" href="/register">
          Create a new account
        </Link>
      </div>
    </AuthLayout>
  );
}
