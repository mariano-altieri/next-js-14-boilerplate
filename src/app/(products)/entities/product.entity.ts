export interface MinimalisticProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  images: string[];
  thumbnail: string;
}

export interface PaginatedProducts {
  products: MinimalisticProduct[];
  total: number;
  page: number;
  perPage: number;
}
