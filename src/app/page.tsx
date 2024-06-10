import { ProductsGrid } from '@/app/(products)/components/ProductsGrid';
import { getProducts } from '@/app/(products)/services/products.actions';
import { MainLayout } from '@/app/commons/components/templates/MainLayout';
import { Heading } from '@/app/commons/components/Heading';
import { Button } from '@/app/commons/components/ui/button';
import Link from 'next/link';

export default async function HomePage() {
  const { products } = await getProducts(1, 4);

  return (
    <MainLayout>
      <div className="container my-3">
        <Heading>Featured Products</Heading>
        <ProductsGrid products={products} showActions={false} />
        <div className="my-6 text-center">
          <Button asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
