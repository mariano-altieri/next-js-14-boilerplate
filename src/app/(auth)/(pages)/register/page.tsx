import Link from 'next/link';

import { AuthLayout } from '@/app/commons/components/templates/AuthLayout';

import { AuthCard } from '../../components/AuthCard';
import { RegisterForm } from '../../components/forms/RegisterForm';

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="h-screen w-screen flex flex-col gap-2 items-center justify-center">
        <AuthCard authFlow="register">
          <RegisterForm />
        </AuthCard>
        <Link className="text-sm underline hover:no-underline" href="/login">
          Already have an account?
        </Link>
      </div>
    </AuthLayout>
  );
}
