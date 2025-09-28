/**
 * @description ProductInterface card component
 * @author Nhut Tan
 * @since 2025-08-08
 * @modifies 2025-09-25
 * @version 1.0.1
 */

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/Card';
import { ProductInterface } from '@/type/products/product.interface';
import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface ProductCardProps {
	product: ProductInterface;
}

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<Link href={`/products/${product.id}`}>
			<Card
				className={
					'w-72 cursor-pointer hover:shadow-lg transition-shadow'
				}
			>
				{/*Image*/}
				<div
					className={
						'relative w-full h-48 overflow-hidden rounded-t-xl'
					}
				>
					<Image
						src={product.imageUrl}
						alt={product.name}
						width={250}
						height={200}
						className={
							'object-cover ml-auto mr-auto transition-transform duration-500 hover:scale-125 ease-in-out'
						}
					/>
				</div>

				{/*Header*/}
				<CardHeader>
					<CardTitle className={'truncate h-5'}>
						{product.name}
					</CardTitle>
					<CardDescription>{product.category}</CardDescription>
				</CardHeader>

				<CardContent>
					<div className='flex items-center gap-2'>
						<span className='text-lg font-semibold'>
							${product.price}
						</span>
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
						<div className='text-red-500 mt-2 font-medium'>
							Out of stock
						</div>
					)}
				</CardContent>

				{/*Footer*/}
				<CardFooter>
					<Button
						className={'w-full'}
						disabled={!product.inStock}
					>
						{product.inStock ? 'Add to cart' : 'Out of stock'}
					</Button>
				</CardFooter>
			</Card>
		</Link>
	);
}
