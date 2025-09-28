/**
 * @description ProductInterface detail page
 * @author Nhut Tan
 * @since 2025-09-25
 * @modifies
 * @version 1.0.1
 */

'use server';

import { JSX } from 'react';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import { ImageInterface } from '@/type/products/image.interface';

/**
 * @description Props of ProductDetailPage
 */
type ProductPageParams = {
	id: string;
};

const images: ImageInterface[] = [
	{
		id: 1,
		url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dennemeyer.com%2Ffileadmin%2Fa%2Fblog%2FEveryday_IP_Spreading_the_word_about_mobile_phones%2FEveryday-IP_Spreading-the-word-about-mobile-phones_12.jpg&f=1&nofb=1&ipt=39b25002afbbd3512eae0b376db8e0eb135754667ffcafc232f254733f2be2da',
	},
	{
		id: 2,
		url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-BwHo_DB1Fhk%2FUZH2D1I1PqI%2FAAAAAAAAAR4%2F4hTgxkBOF_E%2Fw1200-h630-p-k-no-nu%2FMobile-phone-sale.jpg&f=1&nofb=1&ipt=99bcb32094628ba4707aca363b1dabd42a2a9c875ce36c29599dfc2adfaeeb77',
	},
	{
		id: 3,
		url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.presentation-guru.com%2Fwp-content%2Fuploads%2F2016%2F11%2Fmobile-phones.jpg&f=1&nofb=1&ipt=39eb38e70d4bf42f69bb30fc1ed230bf6a5178534dad9ff4bd888f88a4b9de14',
	},
];

export default async function ProductDetailPage({
	params,
}: {
	params: ProductPageParams;
}): Promise<JSX.Element> {
	const { id } = await params;

	return (
		<div>
			<h1>Product detail: {id}</h1>
			<ImageGallery
				images={images}
				imageWidth={320}
				imageHeight={50}
				mainSwiperHeight={230}
				mainSwiperWidth={500}
			/>
		</div>
	);
}
