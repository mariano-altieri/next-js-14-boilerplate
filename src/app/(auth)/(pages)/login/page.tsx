import { AuthLayout } from '@/app/commons/components/templates/AuthLayout';

import { AuthCard } from '../../components/AuthCard';
import { LoginForm } from '../../components/forms/LoginForm';

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="h-screen w-screen flex items-center justify-center">
        <AuthCard authFlow="login">
          <LoginForm />
        </AuthCard>
      </div>
    </AuthLayout>
  );
}