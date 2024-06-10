import { PropsWithChildren } from 'react';

import { MainLayout } from '@/app/commons/components/templates/MainLayout';
import { ShoppingCard } from '@/app/shopping-cart/components/ShoppingCard';

interface Props extends PropsWithChildren {
  showCart?: boolean;
}

export function ProductLayout(props: Props) {
  const { children, showCart = true } = props;

  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row-reverse gap-6 lg:h-full">
        {showCart && (
          <aside className="w-full lg:w-[450px]">
            <ShoppingCard className="lg:fixed lg:right-3 lg:w-[450px]" />
          </aside>
        )}
        <div className="flex-1">{children}</div>
      </div>
    </MainLayout>
  );
}

export default ProductLayout;
