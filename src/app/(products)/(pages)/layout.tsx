import { PropsWithChildren } from 'react';

import { ShoppingCard } from '@/app/shopping-cart/components/ShoppingCard';
import { MainLayout } from '@/app/commons/components/templates/MainLayout';

export default function ProductsLayout({ children }: PropsWithChildren) {
  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-2">
        <aside className="w-full lg:w-[450px]">
          <ShoppingCard className="lg:fixed lg:right-3 lg:w-[450px]" />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </MainLayout>
  );
}
