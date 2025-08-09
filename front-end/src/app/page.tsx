import ProductCard from '@/components/product/product-card';
import { Product } from '@/type/product/product.dto';
import Header from '@/components/header/header';

const sampleProduct: Product = {
  id: 'p001',
  name: 'Organic Almond Butter 250g',
  description:
    'Smooth and creamy almond butter made from 100% roasted organic almonds. No added sugar, preservatives, or palm oil.',
  price: 12.99,
  discountPrice: 9.99,
  imageUrl:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.freshop.com%2F00036800140554%2F9ccf7e33988dedd1a6fd36cd4c518f3d_large.png&f=1&nofb=1&ipt=6b8e7e31f8fce492bd0d1999f2f4ab79e43b7384d3c53a24f8ea14ba06f8238b',
  category: 'Nut Butters',
  rating: 4.7,
  reviewsCount: 128,
  inStock: true,
};

export default function Home() {
  return (
    <>
      {/*<ProductCard product={sampleProduct}/>*/}
      <Header />
    </>
  );
}
