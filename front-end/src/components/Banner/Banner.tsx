'use client';

import 'react-image-gallery/styles/css/image-gallery.css';
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

interface galleryProps {
  items: ReactImageGalleryItem[];
  autoPlay: boolean;
  showThumbnails: boolean;
  showPlayButton: boolean;
  showFullscreenButton: boolean;
  useBrowserFullscreen: boolean;
  showBullets: boolean;
  infinite: boolean;
  showNav: boolean;
  slideDuration: number;
  slideInterval: number;
  maxHeightImage: string | number;
  maxWidthImage: string | number;
}

export default function Banner({
  items,
  autoPlay,
  showFullscreenButton,
  showPlayButton,
  showThumbnails,
  useBrowserFullscreen,
  showBullets,
  infinite,
  showNav,
  slideDuration,
  slideInterval,
  maxHeightImage,
  maxWidthImage,
}: galleryProps) {
  return (
    <ReactImageGallery
      items={items}
      autoPlay={autoPlay}
      showThumbnails={showThumbnails}
      showPlayButton={showPlayButton}
      showFullscreenButton={showFullscreenButton}
      useBrowserFullscreen={useBrowserFullscreen}
      showBullets={showBullets}
      infinite={infinite}
      showNav={showNav}
      slideDuration={slideDuration}
      slideInterval={slideInterval}
      renderItem={(item: ReactImageGalleryItem) => (
        <img
          src={item.original}
          style={{
            maxHeight: maxHeightImage,
            maxWidth: maxWidthImage,
            objectFit: 'contain',
            margin: '0 auto',
          }}
        />
      )}
    />
  );
}
