/**
 * @description Product info component
 * @author Nhut Tan
 * @since 2025-09-28
 * @version 1.0.0
 */

import { JSX } from 'react';
import { ProductInfoInterface } from '@/type/products/product-info.interface';
import { ProductCardMiniInterface } from '@/type/products/product-card-mini.interface';

/**
 * @description Product cart mini list
 */
const products: ProductCardMiniInterface[] = [
	{
		name: 'Titan Đen',
		price: '42.690.000',
		imageUrl:
			'https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max-titan-den_2.png',
	},
	{
		name: 'Titan Trắng',
		price: '42.690.000',
		imageUrl:
			'https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max-titan-trang_2.png',
	},
	{
		name: 'Titan Tự Nhiên',
		price: '42.690.000',
		imageUrl:
			'https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max-titan-tu-nhien_2.png',
	},
	{
		name: 'Titan Sa Mạc',
		price: '42.690.000',
		imageUrl:
			'https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max-titan-sa-mac_2.png',
	},
];

/**
 * @description Dumb data product info price
 */
const productInfo: ProductInfoInterface = {
	price: 1000000,
	oldPrice: 1200000,
	version: 'A',
	color: 'Black',
	products: products,
};

export default function ProductInfo(): JSX.Element {
	return (
		<div>
			<h1>Giá sản phẩm</h1>
		</div>
	);
}
