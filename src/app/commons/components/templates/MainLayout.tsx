import { PropsWithChildren } from 'react';

import { MainNavigation } from '../MainNavigation';
import { MainFooter } from '../MainFooter';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <MainNavigation />
      <main className="p-3 flex-1">{children}</main>
      <MainFooter />
    </>
  );
}
