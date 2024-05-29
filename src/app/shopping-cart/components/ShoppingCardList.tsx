'use client';

import { useMemo } from 'react';
import { useShoppingCardStore } from '../store/shopping-cart.store';
import { ShoppinCardListItem } from './ShoppinCardListItem';
import { formatCurrency } from '@/app/commons/libs/currency';

export const ShoppingCardList = () => {
  const { items } = useShoppingCardStore();

  const totalPrice = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items],
  );

  if (items.length === 0) {
    return <div className="w-full text-center">Your cart is empty</div>;
  }

  return (
    <>
      {items.map((item) => (
        <ShoppinCardListItem key={item.id} {...item} />
      ))}
      <div className="pt-2 flex items-center justify-between text-lg">
        <strong>Total</strong>
        <div>{formatCurrency(totalPrice)}</div>
      </div>
    </>
  );
};
