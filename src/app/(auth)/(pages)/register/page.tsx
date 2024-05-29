import { AuthCard } from '../../components/AuthCard';
import { RegisterForm } from '../../components/forms/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <AuthCard authFlow="register">
        <RegisterForm />
      </AuthCard>
    </div>
  );
}
