import Banner from '@/components/Banner/Banner';
import { ReactImageGalleryItem } from 'react-image-gallery';
import ProductList from '@/components/ProductList/ProductList';
import { ProductInterface } from '@/type/products/product.interface';
import { JSX } from 'react';

const images: ReactImageGalleryItem[] = [
	{
		original:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dennemeyer.com%2Ffileadmin%2Fa%2Fblog%2FEveryday_IP_Spreading_the_word_about_mobile_phones%2FEveryday-IP_Spreading-the-word-about-mobile-phones_12.jpg&f=1&nofb=1&ipt=39b25002afbbd3512eae0b376db8e0eb135754667ffcafc232f254733f2be2da',
	},
	{
		original:
			'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-BwHo_DB1Fhk%2FUZH2D1I1PqI%2FAAAAAAAAAR4%2F4hTgxkBOF_E%2Fw1200-h630-p-k-no-nu%2FMobile-phone-sale.jpg&f=1&nofb=1&ipt=99bcb32094628ba4707aca363b1dabd42a2a9c875ce36c29599dfc2adfaeeb77',
	},
	{
		original:
			'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.presentation-guru.com%2Fwp-content%2Fuploads%2F2016%2F11%2Fmobile-phones.jpg&f=1&nofb=1&ipt=39eb38e70d4bf42f69bb30fc1ed230bf6a5178534dad9ff4bd888f88a4b9de14',
	},
];

const sampleProductList: ProductInterface[] = [
	{
		id: '1',
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
		id: '2',
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
		id: '3',
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
		id: '4',
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
		id: '5',
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

export default function Home(): JSX.Element {
	return (
		<div>
			{/*Banner*/}
			<Banner
				items={images}
				infinite={true}
				useBrowserFullscreen={false}
				showFullscreenButton={false}
				thumbnailPosition={'bottom'}
				showPlayButton={false}
				showThumbnails={false}
				autoPlay={true}
				showBullets={false}
				showNav={false}
				slideDuration={500}
				slideInterval={3500}
				maxHeightImage={500}
				maxWidthImage={1200}
			/>

			{/*ProductInterface List*/}
			<ProductList productList={sampleProductList} />
		</div>
	);
}
