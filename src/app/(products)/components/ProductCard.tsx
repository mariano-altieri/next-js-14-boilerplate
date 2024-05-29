import Image from 'next/image';

import { Card } from '@/app/commons/components/ui/card';

import { MinimalisticProduct } from '../entities/product.entity';
import { ProductAddToCart } from './ProductAddToCart';
import { Button } from '@/app/commons/components/ui/button';
import Link from 'next/link';

interface Props {
  product: MinimalisticProduct;
}

export const ProductCard = (props: Props) => {
  const { product } = props;

  return (
    <Card className="w-full md:max-w-[300px] p-3">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={350}
        height={350}
        className="w-full"
        priority={false}
      />
      <div className="text-lg text-center my-2">{product.title}</div>
      <div className="flex gap-2 items-center">
        <ProductAddToCart product={product} />
        <Button asChild variant="outline" size="sm">
          <Link href={`/product/${product.id}`}>View Details</Link>
        </Button>
      </div>
    </Card>
  );
};
