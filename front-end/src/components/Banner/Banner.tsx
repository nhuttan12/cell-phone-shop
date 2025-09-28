/**
 * @description Banner component
 * @author Nhut Tan
 * @since 2025-08-23
 * @modifies 2025-09-25
 * @version 1.0.1
 */

'use client';

import 'react-image-gallery/styles/css/image-gallery.css';
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import { JSX } from 'react';
import Image from 'next/image';

interface galleryProps {
	items: ReactImageGalleryItem[];
	autoPlay: boolean;
	showThumbnails: boolean;
	thumbnailPosition: thumbnailPosition;
	showPlayButton: boolean;
	showFullscreenButton: boolean;
	useBrowserFullscreen: boolean;
	showBullets: boolean;
	infinite: boolean;
	showNav: boolean;
	slideDuration: number;
	slideInterval: number;
	maxHeightImage: number;
	maxWidthImage: number;
}

type thumbnailPosition = 'top' | 'bottom' | 'left' | 'right';

export default function Banner({
	items,
	autoPlay,
	showFullscreenButton,
	showPlayButton,
	showThumbnails,
	thumbnailPosition,
	useBrowserFullscreen,
	showBullets,
	infinite,
	showNav,
	slideDuration,
	slideInterval,
	maxHeightImage,
	maxWidthImage,
}: galleryProps): JSX.Element {
	return (
		<div
		>
			<ReactImageGallery
				items={items}
				autoPlay={autoPlay}
				showThumbnails={showThumbnails}
				thumbnailPosition={thumbnailPosition}
				showPlayButton={showPlayButton}
				showFullscreenButton={showFullscreenButton}
				useBrowserFullscreen={useBrowserFullscreen}
				showBullets={showBullets}
				infinite={infinite}
				showNav={showNav}
				slideDuration={slideDuration}
				slideInterval={slideInterval}
				renderItem={(item: ReactImageGalleryItem): JSX.Element => (
					<div
						style={{
							position: 'relative',
							width: maxWidthImage,
							height: maxHeightImage,
							margin: '0 auto',
						}}
					>
						<Image
							src={item.original}
							alt=''
							fill
							style={{ objectFit: 'contain' }}
						/>
					</div>
				)}
			/>
		</div>
	);
}
