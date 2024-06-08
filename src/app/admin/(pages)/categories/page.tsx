'use client';

import { useQuery } from '@tanstack/react-query';

import { AdminLayout } from '@/app/admin/components/templates/AdminLayout';
import { getProductCategories } from '@/app/(products)/services/products.actions';
import { AdminLoader } from '@/app/admin/components/AdminLoader';
import { ProductsCategoriesTable } from '@/app/(products)/components/ProductsCategoriesTable';

export default function AdminNewProductPage() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getProductCategories(),
  });

  return (
    <AdminLayout pageTitle="Product Categories">
      {isLoading ? <AdminLoader /> : <ProductsCategoriesTable categories={categories ?? []} />}
    </AdminLayout>
  );
}
