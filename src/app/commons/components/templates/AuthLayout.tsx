import { PropsWithChildren } from 'react';

import { MainLogo } from '../MainLogo';

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="w-full p-3">
        <MainLogo />
      </div>
      {children}
    </>
  );
}
