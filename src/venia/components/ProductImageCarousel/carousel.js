import React, { useMemo } from 'react';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from 'react-feather';

import { transparentPlaceholder } from '@magento/peregrine/lib/util/images';
import { useProductImageCarousel } from '../../../magento/peregrine/talons/ProductImageCarousel/useProductImageCarousel';

import { useStyle } from '../../classify';
import Icon from '../Icon';
import Image from '../Image';
import defaultClasses from './carousel.css';
import Thumbnail from './thumbnail';
import { get } from 'lodash-es';

const IMAGE_WIDTH = 535;

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
    const { images, media_gallery } = props;

    const talonProps = useProductImageCarousel({
        images: media_gallery,
        imageWidth: IMAGE_WIDTH
    });

    const {
        currentImage,
        activeItemIndex,
        altText,
        handleNext,
        handlePrevious,
        handleThumbnailClick,
        sortedImages
    } = talonProps;

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

    const classes = useStyle(defaultClasses, props.classes);

    let image;
    if (currentImage.url) {
        image = (
            <Image
                alt={altText}
                classes={{
                    image: classes.currentImage,
                    root: classes.imageContainer
                }}
                src={currentImage.url}
                width={IMAGE_WIDTH}
            />
        );
    } else {
        image = (
            <Image
                alt={altText}
                classes={{
                    image: classes.currentImage_placeholder,
                    root: classes.imageContainer
                }}
                src={transparentPlaceholder}
            />
        );
    }

    const chevronClasses = { root: classes.chevron };
    return (
        <div className={classes.root}>
            <div className={classes.carouselContainer}>
                <button
                    className={classes.previousButton}
                    onClick={handlePrevious}
                    type="button">
                    <Icon
                        classes={chevronClasses}
                        src={ChevronLeftIcon}
                        size={80}
                    />
                </button>
                {image}
                <button
                    className={classes.nextButton}
                    onClick={handleNext}
                    type="button">
                    <Icon
                        classes={chevronClasses}
                        src={ChevronRightIcon}
                        size={80}
                    />
                </button>
            </div>
            <div className={classes.thumbnailList}>{thumbnails}</div>
        </div>
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
