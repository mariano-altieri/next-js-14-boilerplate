import { MinimalisticProduct } from '../entities/product.entity';
import { ProductCard } from './ProductCard';

interface Props {
  products: MinimalisticProduct[];
}

export const ProductsGrid = (props: Props) => {
  const { products } = props;

  return (
    <div className="grid grid-cols-products gap-3">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} imagePriority={index < 6} />
      ))}
    </div>
  );
};
