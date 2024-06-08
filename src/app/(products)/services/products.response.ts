export interface PaginatedProductsResponse {
  products: ProductResponse[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductResponse {
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
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: AvailabilityStatus;
  reviews: Review[];
  returnPolicy: ReturnPolicy;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export interface ProductCategoryResponse {
  name: string;
  slug: string;
  url: string;
}

enum AvailabilityStatus {
  InStock = 'In Stock',
  LowStock = 'Low Stock',
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Meta {
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
  qrCode: string;
}

enum ReturnPolicy {
  NoReturnPolicy = 'No return policy',
  The30DaysReturnPolicy = '30 days return policy',
  The60DaysReturnPolicy = '60 days return policy',
  The7DaysReturnPolicy = '7 days return policy',
  The90DaysReturnPolicy = '90 days return policy',
}

interface Review {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}
