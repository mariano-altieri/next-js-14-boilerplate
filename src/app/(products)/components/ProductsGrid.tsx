import { MinimalisticProduct } from '../entities/product.entity';
import { ProductCard } from './ProductCard';

interface Props {
  products: MinimalisticProduct[];
}

export const ProductsGrid = (props: Props) => {
  const { products } = props;

  return (
    <div className="flex gap-3 justify-start flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
