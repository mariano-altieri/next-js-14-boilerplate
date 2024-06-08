'use client';

import { useQuery } from '@tanstack/react-query';

import { AdminLayout } from '@/app/admin/components/templates/AdminLayout';
import { getProductCategories } from '@/app/(products)/services/products.actions';
import { AdminLoader } from '@/app/admin/components/AdminLoader';
import { CreateUpdateProductForm } from '@/app/(products)/components/forms/CreateUpdateProductForm';
import { ProductGoBack } from '@/app/(products)/components/ProductGoBack';

export default function AdminNewProductPage() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getProductCategories(),
  });

  return (
    <AdminLayout pageTitle={`Add a new Product`}>
      {isLoading ? (
        <AdminLoader />
      ) : (
        <div className="container">
          <ProductGoBack />
          <CreateUpdateProductForm categories={categories ?? []} />
        </div>
      )}
    </AdminLayout>
  );
}
