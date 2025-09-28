/**
 * @description Product info interface
 * @author Nhut Tan
 * @since 2025-09-28
 * @version 1.0.0
 */

import { ProductCardMiniInterface } from '@/type/products/product-card-mini.interface';

/**
 * @property {number} price - Price of product
 * @property {number} oldPrice - Old price of product
 * @property {string} version - Version of product
 * @property {string} color - Color of product
 * @property {ProductCardMiniInterface[]} products - List of products
 */
export interface ProductInfoInterface {
	price: number;
	oldPrice: number;
	version: string;
	color: string;
	products: ProductCardMiniInterface[];
}
