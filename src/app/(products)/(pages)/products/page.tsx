import { Paginator } from '@/app/commons/components/Paginator';
import { Heading } from '@/app/commons/components/Heading';

import { ProductsGrid } from '../../components/ProductsGrid';
import { getProducts, searchProducts } from '../../services/products.actions';
import { ProductLayout } from '../../components/templates/ProductLayout';
import { ProductSearch } from '../../components/ProductSearch';

interface Props {
  searchParams: { page: string; query?: string };
}

export default async function ProductsPage({ searchParams }: Props) {
  const { page: urlPage, query = '' } = searchParams;
  const currentPage = urlPage ? Number(urlPage) : 1;
  const limit = 12;

  const { products, total, page, perPage } = query
    ? await searchProducts(query)
    : await getProducts(currentPage, limit);

  return (
    <ProductLayout>
      <Heading>
        Products
        <small className="ml-2">({total} results)</small>
      </Heading>
      <ProductSearch />
      <ProductsGrid products={products} />
      <div className="my-4 border-t pt-2">
        <Paginator total={total} page={page} perPage={perPage} baseRoute="/products?page={page}" />
      </div>
    </ProductLayout>
  );
}
