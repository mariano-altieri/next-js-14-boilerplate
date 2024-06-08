import { PRODUCTS_API_URL } from '../constants/api';
import { PaginatedProducts, Product } from '../entities/product.entity';
import { ProductMapper } from '../mappers/product.mapper';
import { CreateUpdateProduct } from '../schemas/create-update-product-schema';
import { ProductCategoryResponse } from './products.response';

export async function getProducts(page = 1, limit = 20): Promise<PaginatedProducts> {
  try {
    const skip = (page - 1) * limit;
    const response = await fetch(`${PRODUCTS_API_URL}?limit=${limit}&skip=${skip}`, {
      next: {
        revalidate: 60 * 60 * 24, // 24 hours
      },
    });
    const products = await response.json();

    return ProductMapper.apiToPaginatedProducts(products);
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
}

export async function getProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(`${PRODUCTS_API_URL}/${id}`, {
      next: {
        revalidate: 60 * 60 * 24, // 24 hours
      },
    });
    const product = await response.json();

    return ProductMapper.apiToProduct(product);
  } catch (error) {
    throw new Error(`Failed to fetch product id #${id}`);
  }
}

export async function updateProduct(product: CreateUpdateProduct): Promise<Product> {
  const { id, ...rest } = product;

  if (!id) {
    throw new Error('Product id is required');
  }

  try {
    const response = await fetch(`${PRODUCTS_API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rest),
    });
    const product = await response.json();

    return ProductMapper.apiToProduct(product);
  } catch (error) {
    throw new Error(`Error updating product id #${id}`);
  }
}

export async function getProductCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${PRODUCTS_API_URL}/categories`, {
      next: {
        revalidate: 60 * 60 * 24, // 24 hours
      },
    });
    const categories = await response.json();

    return ProductMapper.apiToProductCategories(categories);
  } catch (error) {
    throw new Error('Failed to fetch product categories');
  }
}
