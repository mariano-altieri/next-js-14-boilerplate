import Image from 'next/image';
import { Product } from '../entities/product.entity';
import { ProductAddToCart } from './ProductAddToCart';
import { Button } from '@/app/commons/components/ui/button';
import { formatCurrency } from '@/app/commons/libs/currency';
import { IoStar } from 'react-icons/io5';
import { ProductGoBack } from './ProductGoBack';

interface Props {
  product: Product;
}

export const ProductDetails = (props: Props) => {
  const { product } = props;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <ProductGoBack />
      </div>
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
            <Image
              className="w-full h-auto object-cover"
              src={product.images[0]}
              alt={product.title}
              width={460}
              height={460}
              priority
            />
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <ProductAddToCart product={product} />
            <Button size="sm" variant="outline">
              Add to Whishlist
            </Button>
          </div>
        </div>
        <div className="md:flex-1 px-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {product.title} {product.brand && `(${product.brand})`}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
          <div className="flex mb-4">
            <div className="mr-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
              <span className="text-gray-600 dark:text-gray-300">
                {formatCurrency(product.price)}{' '}
                <span className="italic">
                  {product.discountPercentage > 0 &&
                    `(${Math.round(product.discountPercentage)}% Off)`}
                </span>
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">In Stock: </span>
              <span className="text-gray-600 dark:text-gray-300">{product.stock}</span>
            </div>
          </div>
          <div className="mb-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">Rating:</span>
            <div className="flex items-center gap-1 mt-2">
              {Array.from({ length: Math.floor(product.rating) }).map((_, idx) => (
                <IoStar key={idx} className="w-6 h-6 fill-yellow-500" />
              ))}
            </div>
          </div>
          {product.tags.length > 0 && (
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Tags:</span>
              <div className="flex items-center mt-2 gap-2">
                {product.tags.map((tag, idx) => (
                  <Button variant="secondary" key={`${tag}-${idx}`}>
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
