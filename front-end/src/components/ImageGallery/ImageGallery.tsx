/**
 * @description Image gallery component
 * @author Nhut Tan
 * @since 2025-09-26
 * @version 1.0.0
 */

'use client';

import { JSX, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import Image from 'next/image';
import { ImageInterface } from '@/type/products/image.interface';
import {
	FreeMode,
	Mousewheel,
	Navigation,
	Pagination,
	Scrollbar,
	Thumbs,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css';
import 'swiper/css/pagination';

/**
 * @description Props for the image gallery component.
 *
 * @property {ImageInterface[]} images - List of images to display in the gallery.
 * @property {number} [mainSwiperWidth] - Width of the main swiper container (e.g., "600px" or "100%").
 * @property {number} [mainSwiperHeight] - Height of the main swiper container (e.g., "400px").
 * @property {number} [thumbsSwiperWidth] - Width of the thumbs swiper container (e.g., "600px" or "100%").
 * @property {number} [thumbsSwiperHeight] - Height of the thumbs swiper container (e.g., "400px").
 * @property {number} [imageWidth] - Fixed width for each image inside the swiper.
 * @property {number} [imageHeight] - Fixed height for each image inside the swiper.
 * @property {number} [thumbnailQuantity] - Number of thumbnails to display in the thumbnail swiper.
 */
type imageGalleryProps = {
	images: ImageInterface[];
	mainSwiperWidth?: number;
	mainSwiperHeight?: number;
	thumbsSwiperWidth?: number;
	thumbsSwiperHeight?: number;
	imageWidth?: number;
	imageHeight?: number;
	thumbnailQuantity?: number;
    spaceBetween?: number;
};

export default function ImageGallery({
	images,
	mainSwiperWidth = 1000,
	mainSwiperHeight = 200,
	thumbsSwiperWidth = 100,
	thumbsSwiperHeight = 100,
	imageWidth = 500,
	imageHeight = 500,
	thumbnailQuantity = 10,
    spaceBetween = 0,
}: imageGalleryProps): JSX.Element {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

	return (
		<>
			{/* Main image swiper */}
			<div
				style={{
					width: `${mainSwiperWidth}px`,
					height: `${mainSwiperHeight}px`,
				}}
			>
				<Swiper
					slidesPerView={1}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[FreeMode, Thumbs, Scrollbar, Mousewheel]}
					scrollbar={{ draggable: true }}
					direction={'horizontal'}
					mousewheel={true}
					loop={true}
				>
					{images.map(
						(img: ImageInterface, index: number): JSX.Element => (
							<SwiperSlide key={index}>
								<Image
									key={img.id}
									src={img.url}
									alt={''}
									width={imageWidth}
									height={imageHeight}
								/>
							</SwiperSlide>
						),
					)}
				</Swiper>
			</div>

			{/* Thumbnail swiper */}
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={spaceBetween}
				slidesPerView={thumbnailQuantity}
				freeMode
				watchSlidesProgress
				modules={[FreeMode, Navigation, Thumbs]}
				className='mt-2'
			>
				{images.map(
					(img: ImageInterface): JSX.Element => (
						<SwiperSlide
							key={`thumb-${img.id}`}
							className='cursor-pointer flex justify-center'
						>
							<div
								className='relative border-2 border-gray-400 rounded-sm hover:border-blue-500'
								style={{
									width: `${thumbsSwiperWidth}px`,
									height: `${thumbsSwiperHeight}px`,
								}}
							>
								<Image
									src={img.url}
									alt={'Thumbnail'}
									fill
									className='object-cover rounded-md'
								/>
							</div>
						</SwiperSlide>
					),
				)}
			</Swiper>
		</>
	);
}
