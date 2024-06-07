'use client';

import { IoCart } from 'react-icons/io5';

import { useShoppingCardStore } from '@/app/shopping-cart/store/shopping-cart.store';

import { MinimalisticProduct } from '../entities/product.entity';
import { AuthButton } from '@/app/(auth)/components/AuthButton';

interface Props {
  product: MinimalisticProduct;
}

export const ProductAddToCart = (props: Props) => {
  const { product } = props;
  const { addItem } = useShoppingCardStore();

  const handleClick = () => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <AuthButton onAuthorizedClick={handleClick}>
      <IoCart size={20} /> Add to Cart
    </AuthButton>
  );
};
