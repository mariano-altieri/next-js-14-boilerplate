import { cn } from '@/app/commons/libs/utils';
import { MinimalisticProduct } from '../entities/product.entity';
import { ProductCard } from './ProductCard';

interface Props {
  products: MinimalisticProduct[];
  showActions?: boolean;
}

export const ProductsGrid = (props: Props) => {
  const { products, showActions = true } = props;
  const baseClass = cn(
    'grid grid-cols-products gap-3',
    products.length < 4 ? 'few-results flex flex-wrap' : '',
  );

  return (
    <div className={baseClass}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          imagePriority={index < 6}
          showActions={showActions}
        />
      ))}
    </div>
  );
};
