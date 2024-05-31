import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getProductById, getProducts } from '@/app/(products)/services/products.actions';
import { ProductDetails } from '@/app/(products)/components/ProductDetails';

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const { products } = await getProducts(1, 20); // Let's be considerated with the free API!!

  return products.map((product) => ({ id: String(product.id) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = params;
  const product = await getProductById(Number(id));

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { id } = params;
  const product = await getProductById(Number(id));

  if (!product) {
    return notFound();
  }

  return <ProductDetails product={product} />;
}
