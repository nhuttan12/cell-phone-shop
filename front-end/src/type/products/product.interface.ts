/**
 * @description Product interface
 * @author Nhut Tan
 * @since 2025-09-28
 * @version 1.0.0
 */

/**
 * @property {string} id - Id of product
 * @property {string} name - Name of product
 * @property {string} description - Description of product
 * @property {number} price - Price of product
 * @property {number} discountPrice - Discount price of product
 * @property {string} imageUrl - Image url of product
 * @property {string} category - Category of product
 * @property {number} rating - Rating of product
 * @property {number} reviewsCount - Reviews count of product
 * @property {boolean} inStock - In stock of product
 */
export interface ProductInterface {
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
