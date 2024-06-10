import { Paginator } from '@/app/commons/components/Paginator';
import { Heading } from '@/app/commons/components/Heading';

import { ProductsGrid } from '../../components/ProductsGrid';
import { getProducts } from '../../services/products.actions';
import ProductLayout from '../../components/templates/ProductLayout';

export default async function ProductsPage({ searchParams }: { searchParams: { page: string } }) {
  const currentPage = searchParams.page ? Number(searchParams.page) : 1;
  const limit = 12;
  const { products, total, page, perPage } = await getProducts(currentPage, limit);

  return (
    <ProductLayout>
      <Heading>
        Products
        <small className="ml-2">({total} results)</small>
      </Heading>
      <ProductsGrid products={products} />
      <div className="my-4 border-t pt-2">
        <Paginator total={total} page={page} perPage={perPage} baseRoute="/products?page={page}" />
      </div>
    </ProductLayout>
  );
}
