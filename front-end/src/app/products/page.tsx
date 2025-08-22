'use client'

import ProductList from '@/components/ProductList/ProductList';
import { Product } from '@/type/products/product';

const sampleProductList: Product[] = [
  {
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
  },
  {
    id: 'p002',
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
  },
  {
    id: 'p003',
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
  },
  {
    id: 'p004',
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
  },
  {
    id: 'p005',
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
  },
];


export default function Products() {
  return (
    <ProductList productList={sampleProductList}/>
  )
}
