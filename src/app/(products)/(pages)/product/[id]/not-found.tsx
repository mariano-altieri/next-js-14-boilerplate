import ProductLayout from '@/app/(products)/components/templates/ProductLayout';
import NotFound from '@/app/commons/components/NotFound';

export default function NotFoundProductPage() {
  return (
    <ProductLayout showCart={false}>
      <NotFound
        title="Product Not Found"
        description="The product you're looking for doesn't exist."
        goBackLabel="Return to Products Page"
        goBackUrl="/products"
      />
    </ProductLayout>
  );
}
