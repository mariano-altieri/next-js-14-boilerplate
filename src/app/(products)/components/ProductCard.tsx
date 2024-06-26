import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/app/commons/components/ui/card';
import { Button } from '@/app/commons/components/ui/button';

import { MinimalisticProduct } from '../entities/product.entity';
import { ProductAddToCart } from './ProductAddToCart';

interface Props {
  product: MinimalisticProduct;
  imagePriority?: boolean;
  showActions?: boolean;
}

export const ProductCard = async (props: Props) => {
  const { product, imagePriority = false, showActions = true } = props;

  return (
    <Card className="w-full p-3 product-card">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={350}
          height={350}
          className="w-full"
          priority={imagePriority}
        />
      </Link>
      <div className="text-lg text-center my-4 line-clamp-2 leading-6 min-h-12">
        {product.title}
      </div>
      {showActions && (
        <div className="flex gap-2 items-center">
          <ProductAddToCart product={product} />
          <Button asChild variant="outline" size="sm">
            <Link href={`/product/${product.id}`}>View Details</Link>
          </Button>
        </div>
      )}
    </Card>
  );
};
