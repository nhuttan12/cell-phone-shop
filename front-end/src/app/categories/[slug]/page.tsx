import { ProductInterface } from '@/type/products/product.interface';
import ProductList from '@/components/ProductList/ProductList';
import FilterDialog from '@/components/FIlterDialog/FilterDialog';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/Select';

interface CategoryPageProps {
	params: { slug: string };
}

export async function generateMetadata({ params }: CategoryPageProps) {
	const { slug } = await params;

	return {
		title: `Danh mục ${slug}`,
		description: `Danh mục ${slug}`,
	};
}

const sampleProductList: ProductInterface[] = [
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

export default async function CategoriesSlugPage({
	params,
}: CategoryPageProps) {
	const { slug } = await params;

	return (
		<div>
			<h1>Category: {slug}</h1>

			<div className='flex flex-row place-content-between'>
				{/*Filter diablog*/}
				<FilterDialog />

				{/*Sort*/}
				<Select>
					<SelectTrigger className='w-[180px]'>
						<SelectValue
							placeholder='Sắp xếp'
							className='select-none'
						/>
					</SelectTrigger>
					<SelectContent>
						<SelectGroup className='select-none'>
							<SelectLabel></SelectLabel>
							<SelectItem value='a-z'>A-z</SelectItem>
							<SelectItem value='z-a'>Z-a</SelectItem>
							<SelectItem value='date-descend'>
								Ngày giảm dần
							</SelectItem>
							<SelectItem value='date-ascend'>
								Ngày tăng dần
							</SelectItem>
							<SelectItem value='price-descend'>
								Giá giảm dần
							</SelectItem>
							<SelectItem value='price-ascend'>
								Giá tăng dần
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>

			{/* Fetch and show products for this category */}
			<ProductList productList={sampleProductList} />
		</div>
	);
}
