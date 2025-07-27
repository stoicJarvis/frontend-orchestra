export interface IProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  images: string[];
  thumbnail: string;
  availabilityStatus: string;
  minimumOrderQuantity: number;
  returnPolicy: string;
  shippingInformation: string;
  sku: string;
  warrantyInformation: string;
  weight: number;
  dimensions: IDimensions;
  meta: IMeta;
  reviews: IReview[];
}

interface IDimensions {
  width: number;
  height: number;
  depth: number;
}

interface IMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

interface IReview {
  reviewerName: string;
  reviewerEmail: string;
  rating: number;
  comment: string;
  date: string;
}
