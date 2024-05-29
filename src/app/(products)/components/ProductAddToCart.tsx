'use client';

import { Button } from '@/app/commons/components/ui/button';
import { useShoppingCardStore } from '@/app/shopping-cart/store/shopping-cart.store';

import { MinimalisticProduct } from '../entities/product.entity';
import { cn } from '@/app/commons/libs/utils';
import { IoCart } from 'react-icons/io5';

interface Props {
  product: MinimalisticProduct;
  className?: string;
}

export const ProductAddToCart = (props: Props) => {
  const { product, className = '' } = props;
  const { addItem } = useShoppingCardStore();

  const baseClass = cn('text-sm flex gap-2 items-center', className);

  return (
    <Button
      className={baseClass}
      size="sm"
      onClick={() =>
        addItem({
          id: product.id,
          name: product.title,
          price: product.price,
          quantity: 1,
        })
      }
    >
      <IoCart size={20} /> Add to Cart
    </Button>
  );
};
