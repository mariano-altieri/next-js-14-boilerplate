'use client';

import { useMemo } from 'react';
import { IoTrashOutline } from 'react-icons/io5';

import { Button } from '@/app/commons/components/ui/button';
import { formatCurrency } from '@/app/commons/libs/currency';

import { type ShoppingCardItem, useShoppingCardStore } from '../store/shopping-cart.store';

export const ShoppinCardListItem = (props: ShoppingCardItem) => {
  const { id, name, price, quantity } = props;
  const { addQuantity, removeQuantity, removeItem } = useShoppingCardStore();

  const subTotal = useMemo(() => price * quantity, [price, quantity]);

  return (
    <div className="py-2 border-b flex items-center justify-between">
      <strong className="line-clamp-1">{name}</strong>
      <div className="flex items-center justify-center gap-2">
        {formatCurrency(subTotal)}
        <Button variant="outline" onClick={() => removeQuantity(id)} size="sm">
          -
        </Button>
        <div className="border rounded-sm px-3 h-9 flex items-center bg-slate-100">{quantity}</div>
        <Button variant="outline" onClick={() => addQuantity(id)} size="sm">
          +
        </Button>
        <Button variant="destructive" onClick={() => removeItem(id)} size="sm">
          <IoTrashOutline size={18} />
        </Button>
      </div>
    </div>
  );
};
