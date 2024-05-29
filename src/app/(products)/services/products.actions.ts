import { PRODUCTS_API_URL } from '../constants/api';
import { PaginatedProducts, Product } from '../entities/product.entity';
import { ProductMapper } from '../mappers/product.mapper';

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
