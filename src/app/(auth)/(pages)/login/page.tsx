import { AuthCard } from '../../components/AuthCard';
import { LoginForm } from '../../components/forms/LoginForm';

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <AuthCard authFlow="login">
        <LoginForm />
      </AuthCard>
    </div>
  );
}
