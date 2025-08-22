'use client';

import { Product } from '@/type/products/product';
import ProductCard from '@/components/Product/ProductCard';

interface ProductListProps {
  productList: Product[];
}

export default function ProductList({ productList }: ProductListProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 pb-8'>
      {productList.map((product: Product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
