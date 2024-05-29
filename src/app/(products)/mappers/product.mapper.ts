import { MinimalisticProduct, PaginatedProducts, Product } from '../entities/product.entity';
import { PaginatedProductsResponse, ProductResponse } from '../services/products.response';

export class ProductMapper {
  static apiToMinimalisticProduct(apiProduct: ProductResponse): MinimalisticProduct {
    return {
      id: apiProduct.id,
      title: apiProduct.title,
      price: apiProduct.price,
      thumbnail: apiProduct.thumbnail,
    };
  }

  static apiToPaginatedProducts(productsResponse: PaginatedProductsResponse): PaginatedProducts {
    return {
      products: productsResponse.products.map(ProductMapper.apiToMinimalisticProduct),
      total: productsResponse.total,
      page: productsResponse.skip / productsResponse.limit + 1,
      perPage: productsResponse.limit,
    };
  }

  static apiToProduct(apiProduct: ProductResponse): Product {
    return {
      id: apiProduct.id,
      title: apiProduct.title,
      description: apiProduct.description,
      category: apiProduct.category,
      price: apiProduct.price,
      discountPercentage: apiProduct.discountPercentage,
      rating: apiProduct.rating,
      stock: apiProduct.stock,
      tags: apiProduct.tags,
      brand: apiProduct.brand,
      sku: apiProduct.sku,
      images: apiProduct.images,
      thumbnail: apiProduct.thumbnail,
    };
  }
}
