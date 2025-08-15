export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
}
