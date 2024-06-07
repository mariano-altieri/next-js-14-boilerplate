'use client';

import { useQuery } from '@tanstack/react-query';

import { ProductsTable } from '@/app/(products)/components/ProductsTable';
import { getProducts } from '@/app/(products)/services/products.actions';
import { Paginator } from '@/app/commons/components/Paginator';

import { AdminLayout } from '../../components/templates/AdminLayout';
import { AdminLoader } from '../../components/AdminLoader';

interface Props {
  searchParams: {
    page?: string;
    limit?: string;
  };
}

export default function AdminProductsPage(props: Props) {
  const search = props.searchParams;
  const page = Number(search?.page || 1);
  const limit = Number(search?.limit || 20);

  const { data, isLoading } = useQuery({
    queryKey: ['products', { page, limit }],
    queryFn: () => getProducts(page, limit),
  });

  return (
    <AdminLayout pageTitle="Products">
      {isLoading ? (
        <AdminLoader />
      ) : (
        <>
          <ProductsTable products={data?.products || []} />
          <Paginator
            total={data?.total || 0}
            page={page}
            perPage={limit}
            baseRoute="/admin/products?page={page}"
          />
        </>
      )}
    </AdminLayout>
  );
}
