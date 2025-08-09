import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Product } from '@/type/product/product.dto';
import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <Card className={'w-72'}>
        {/*Image*/}
        <div className={'relative w-full h-48 overflow-hidden rounded-t-xl'}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={250}
            height={200}
            className={'object-cover ml-auto mr-auto'}
          />
        </div>

        {/*Header*/}
        <CardHeader>
          <CardTitle className={'truncate h-5'}>{product.name}</CardTitle>
          <CardDescription>{product.category}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className='flex items-center gap-2'>
            <span className='text-lg font-semibold'>${product.price}</span>
            {product.discountPrice && (
              <span className='text-sm text-muted-foreground line-through'>
                {product.discountPrice}
              </span>
            )}
          </div>
          <div className='text-sm text-muted-foreground mt-2'>
            <Star
              color={'red'}
              size={11}
            />{' '}
            {product.rating} ({product.reviewsCount} reviews)
          </div>
          {!product.inStock && (
            <div className='text-red-500 mt-2 font-medium'>Out of stock</div>
          )}
        </CardContent>

        {/*Footer*/}
        <CardFooter>
          <Button
            className={'w-full'}
            disabled={!product.inStock}>
            {product.inStock ? 'Add to cart' : 'Out of stock'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
