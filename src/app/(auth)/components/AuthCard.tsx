import { PropsWithChildren } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/commons/components/ui/card';

import { AuthSocialLinks } from './AuthSocialLinks';

interface Props extends PropsWithChildren {
  authFlow?: 'login' | 'register';
  callbackUrl?: string;
  showSocialLogin?: boolean;
  bottomContent?: JSX.Element;
}

export const AuthCard = (props: Props) => {
  const {
    authFlow = 'login',
    callbackUrl,
    children,
    bottomContent,
    showSocialLogin = true,
  } = props;
  const title = authFlow === 'login' ? 'Login' : 'Register';
  const subTitle = authFlow === 'login' ? 'Login to your account' : 'Create an account';

  return (
    <Card className="w-full max-w-96">
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">{children}</CardContent>
      <CardFooter>
        {showSocialLogin && <AuthSocialLinks />}
        <div className="border-t">{bottomContent}</div>
      </CardFooter>
    </Card>
  );
};
