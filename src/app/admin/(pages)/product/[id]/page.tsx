'use client';

import { notFound } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { AdminLayout } from '@/app/admin/components/templates/AdminLayout';
import { getProductById, getProductCategories } from '@/app/(products)/services/products.actions';
import { AdminLoader } from '@/app/admin/components/AdminLoader';
import { CreateUpdateProductForm } from '@/app/(products)/components/forms/CreateUpdateProductForm';
import { ProductGoBack } from '@/app/(products)/components/ProductGoBack';

interface Props {
  params: {
    id: number;
  };
}

export default function AdminProductPage(props: Props) {
  const { id } = props.params;

  const { data: product, isLoading: isLoadingProduct } = useQuery({
    queryKey: ['product', { id }],
    queryFn: () => getProductById(id),
  });

  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getProductCategories(),
  });

  if (!id) {
    return notFound();
  }

  return (
    <AdminLayout pageTitle={`Update Product #${id}`}>
      {isLoadingProduct || isLoadingCategories ? (
        <AdminLoader />
      ) : (
        <div className="container">
          <ProductGoBack />
          <CreateUpdateProductForm product={product} categories={categories ?? []} />
        </div>
      )}
    </AdminLayout>
  );
}
