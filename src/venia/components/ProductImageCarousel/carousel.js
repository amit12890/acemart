import React, { useState } from 'react';
import { arrayOf, bool, number, shape, string } from 'prop-types';

import { useProductImageCarousel } from '../../../magento/peregrine/talons/ProductImageCarousel/useProductImageCarousel';

import SmallCarousel from './smallCarousel';
import FullCarousel from './fullCarousel';

const IMAGE_WIDTH = 535;
const IMAGE_HEIGHT = 535;

import 'pure-react-carousel/dist/react-carousel.es.css';

/**
 * Carousel component for product images
 * Carousel - Component that holds number of images
 * where typically one image visible, and other
 * images can be navigated through previous and next buttons
 *
 * @typedef ProductImageCarousel
 * @kind functional component
 *
 * @param {props} props
 *
 * @returns {React.Element} React carousel component that displays a product image
 */
const ProductImageCarousel = props => {
    // we are useing media_gallary key
    const {
        media_gallery,
        imageWidth,
        startIndex = 0,
    } = props;

    const [showFullScreen, setShowFullScreen] = useState(false);

    const talonProps = useProductImageCarousel({
        images: media_gallery,
        imageWidth: imageWidth || IMAGE_WIDTH,
        startIndex
    });

    return (
        <>
            <SmallCarousel
                {...talonProps}
                setShowFullScreen={setShowFullScreen}
            />
            {showFullScreen && (
                <FullCarousel
                    {...talonProps}
                    setShowFullScreen={setShowFullScreen}
                />
            )}
        </>
    );
};

/**
 * Props for {@link ProductImageCarousel}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the
 * ProductImageCarousel component
 * @property {string} classes.currentImage classes for visible image
 * @property {string} classes.imageContainer classes for image container
 * @property {string} classes.nextButton classes for next button
 * @property {string} classes.previousButton classes for previous button
 * @property {string} classes.root classes for root container
 * @property {Object[]} images Product images input for Carousel
 * @property {string} images.label label for image
 * @property {string} image.position Position of image in Carousel
 * @property {bool} image.disabled Is image disabled
 * @property {string} image.file filePath of image
 */
ProductImageCarousel.propTypes = {
    classes: shape({
        carouselContainer: string,
        currentImage: string,
        currentImage_placeholder: string,
        imageContainer: string,
        nextButton: string,
        previousButton: string,
        root: string
    }),
    images: arrayOf(
        shape({
            label: string,
            position: number,
            disabled: bool,
            file: string.isRequired
        })
    ).isRequired,
    media_gallery: arrayOf(
        shape({
            label: string,
            url: string
        })
    ).isRequired
};

export default ProductImageCarousel;
