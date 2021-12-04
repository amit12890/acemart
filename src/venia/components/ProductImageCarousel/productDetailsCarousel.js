import React, { useRef, useMemo } from 'react';
import { map } from 'lodash-es';

import ImageGallery from 'react-image-gallery';
import Thumbnail from './thumbnail';

import { useProductImageCarousel } from '../../../magento/peregrine/talons/ProductImageCarousel/useProductImageCarousel';

import 'react-image-gallery/styles/css/image-gallery.css';

const IMAGE_WIDTH = 535;

const ProductDetailsCarousel = props => {
    const { media_gallery } = props;
    const imageGallery = useRef();

    const talonProps = useProductImageCarousel({
        images: media_gallery,
        imageWidth: IMAGE_WIDTH
    });

    const { activeItemIndex, handleThumbnailClick, sortedImages } = talonProps;

    // create thumbnail image component for every images in sorted order
    const thumbnails = useMemo(
        () =>
            sortedImages.map((item, index) => (
                <Thumbnail
                    key={`${item.url}--${item.label}`}
                    item={item}
                    itemIndex={index}
                    isActive={activeItemIndex === index}
                    onClickHandler={handleThumbnailClick}
                />
            )),
        [activeItemIndex, handleThumbnailClick, sortedImages]
    );

    const items = useMemo(() => {
        const images = map(sortedImages, item => ({
            original: item.url,
            thumbnail: item.url
        }));
        return images;
    }, [sortedImages]);

    return (
        <div>
            <ImageGallery
                ref={imageGallery}
                items={items}
                showPlayButton={false}
                // useBrowserFullscreen={false}
                renderThumbInner={() => {
                    return thumbnails;
                }}
            />
        </div>
    );
};

export default ProductDetailsCarousel;
