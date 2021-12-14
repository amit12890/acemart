import React, { useMemo, useState, useCallback } from 'react';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from 'react-feather';

import { transparentPlaceholder } from '@magento/peregrine/lib/util/images';
import { useProductImageCarousel } from '../../../magento/peregrine/talons/ProductImageCarousel/useProductImageCarousel';
import { useWindowSize } from '../../../magento/peregrine/talons/ProductImageCarousel/useWindowSize';
import { Portal } from '@magento/venia-ui/lib/components/Portal';

import { useStyle } from '../../classify';
import Icon from '../Icon';
import Image from '../Image';
import defaultClasses from './carousel.css';
import Thumbnail from './thumbnail';
import Button from '../Button';
import { size } from 'lodash-es';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const IMAGE_WIDTH = 535;
const IMAGE_HEIGHT = 535;


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
    const { media_gallery, imageWidth, imageHeight, startIndex = 0, allowZoom, allowFullScreen } = props;

    const [showFullScreen, setShowFullScreen] = useState(false)
    const [zoom, setZoom] = useState(1)

    const closeFullScreen = useCallback(() => {
        setShowFullScreen(false)
    }, [])

    const windowSize = useWindowSize();
    const talonProps = useProductImageCarousel({
        images: media_gallery,
        imageWidth: imageWidth || IMAGE_WIDTH,
        startIndex
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
                <Slide>
                    <Thumbnail
                        key={`${item.url}--${item.label}`}
                        item={item}
                        itemIndex={index}
                        isActive={activeItemIndex === index}
                        onClickHandler={handleThumbnailClick}
                    />
                </Slide>
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
                width={imageWidth || IMAGE_WIDTH}
                height={imageHeight || IMAGE_HEIGHT}
                onClick={() => setShowFullScreen(true)}
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
        <>
            <div className={classes.root}>
                <div className={classes.carouselContainer}>
                    {size(sortedImages) > 1 && (
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
                    )}
                    {image}
                    {size(sortedImages) > 1 && (
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
                    )}
                </div>
                {size(sortedImages) > 1 && (
                    <CarouselProvider
                        naturalSlideWidth={200}
                        naturalSlideHeight={100}
                        isPlaying={false}
                        visibleSlides={3}
                        totalSlides={size(sortedImages)}
                    >
                        <div className={classes.thumbnailList}>
                            <Slider>
                                {thumbnails}
                            </Slider>
                        </div>
                    </CarouselProvider>
                )}
            </div>
            {(allowFullScreen && showFullScreen) &&
                <Portal>
                    <div className={classes.portalRoot}
                        style={{
                            width: windowSize.width,
                            height: windowSize.height,
                        }}>
                        <div className={classes.contentWrapper} >
                            <div className={classes.modalClose}>
                                <Button onClick={closeFullScreen}>
                                    <i className={classes.iconWrapper}>
                                        <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            width="32" height="32" viewBox="0 0 32 32">
                                            <title>remove</title>
                                            <path d="M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z"></path>
                                        </svg>
                                    </i>
                                </Button>
                                <div onClick={() => {
                                    if (zoom <= 1.5) {
                                        setZoom(zoom + 0.25)
                                    }
                                }}>Zoom In</div>
                                <div onClick={() => {
                                    if (zoom >= 0.5) {
                                        setZoom(zoom - 0.25)
                                    }
                                }}>Zoom Out</div>
                            </div>
                            <div className={classes.content}>
                                <ProductImageCarousel
                                    media_gallery={media_gallery}
                                    imageWidth={windowSize.height * 0.8}
                                    imageHeight={windowSize.height * 0.8}
                                    startIndex={activeItemIndex}
                                    allowZoom
                                    allowFullScreen={false}
                                />
                            </div>
                        </div>
                    </div>
                </Portal>
            }
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
