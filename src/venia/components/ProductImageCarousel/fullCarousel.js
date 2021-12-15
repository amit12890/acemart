import React, { useMemo, useState, useCallback } from 'react';
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from 'react-feather';

import { transparentPlaceholder } from '@magento/peregrine/lib/util/images';
import { useWindowSize } from '../../../magento/peregrine/talons/ProductImageCarousel/useWindowSize';
import { Portal } from '@magento/venia-ui/lib/components/Portal';

import { useStyle } from '../../classify';
import Icon from '../Icon';
import Image from '../Image';
import defaultClasses from './carousel.css';
import Thumbnail from './thumbnail';
import Button from '../Button';
import { size } from 'lodash-es';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { MapInteractionCSS } from 'react-map-interaction';

import 'pure-react-carousel/dist/react-carousel.es.css';

const ZOOM_STEP = 0.25;
const ZOOM_MIN_SCALE = 0.25;
const ZOOM_MAX_SCALE = 2;
const ZOOM_DEFAULT = {
    scale: 1,
    translation: { x: 0, y: 0 }
};

const FullCarousel = props => {
    const {
        currentImage,
        activeItemIndex,
        altText,
        handleNext,
        handlePrevious,
        handleThumbnailClick,
        sortedImages,
        setShowFullScreen
    } = props;

    const [zoomInteraction, setZoomInteraction] = useState(ZOOM_DEFAULT);

    const windowSize = useWindowSize();
    const IMAGE_WIDTH = windowSize.height * 0.8;
    const IMAGE_HEIGHT = windowSize.height * 0.8;

    const closeFullScreen = useCallback(() => {
        setShowFullScreen(false);
        setZoomInteraction(ZOOM_DEFAULT);
    }, []);

    const handleZoomIn = useCallback(() => {
        setZoomInteraction(prevState => {
            let newScale = prevState.scale + ZOOM_STEP;
            if (newScale > ZOOM_MAX_SCALE) {
                newScale = prevState.scale;
            }
            return { ...prevState, scale: newScale };
        });
    }, []);

    const handleZoomOut = useCallback(() => {
        setZoomInteraction(prevState => {
            let newScale = prevState.scale - ZOOM_STEP;
            if (newScale < ZOOM_MIN_SCALE) {
                newScale = prevState.scale;
            }
            return { ...prevState, scale: newScale };
        });
    }, []);

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
            <MapInteractionCSS
                value={zoomInteraction}
                onChange={value => setZoomInteraction(value)}
                minScale={ZOOM_MIN_SCALE}
                maxScale={ZOOM_MAX_SCALE}
            >
                <Image
                    alt={altText}
                    classes={{
                        image: classes.currentImage
                    }}
                    src={currentImage.url}
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    onClick={() => setShowFullScreen(true)}
                />
            </MapInteractionCSS>
        );
    } else {
        image = (
            <Image
                alt={altText}
                classes={{
                    image: classes.currentImage_placeholder
                }}
                src={transparentPlaceholder}
            />
        );
    }

    const chevronClasses = { root: classes.chevron };

    return (
        <Portal>
            <div
                className={classes.portalRoot}
                style={{
                    width: windowSize.width,
                    height: windowSize.height
                }}
            >
                <div className={classes.contentWrapper}>
                    <div className={classes.modalClose}>
                        <Button onClick={closeFullScreen}>
                            <i className={classes.iconWrapper}>
                                <svg
                                    className={classes.svgIcon}
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                >
                                    <title>remove</title>
                                    <path d="M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z" />
                                </svg>
                            </i>
                        </Button>
                        <div onClick={handleZoomIn}>Zoom In</div>
                        <div onClick={handleZoomOut}>Zoom Out</div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.root}>
                            <div className={classes.carouselContainer}>
                                {size(sortedImages) > 1 && (
                                    <button
                                        className={classes.previousButton}
                                        onClick={handlePrevious}
                                        type="button"
                                    >
                                        <Icon
                                            classes={chevronClasses}
                                            src={ChevronLeftIcon}
                                            size={80}
                                        />
                                    </button>
                                )}
                                <div className={classes.imageContainer}>
                                    {image}
                                </div>
                                {size(sortedImages) > 1 && (
                                    <button
                                        className={classes.nextButton}
                                        onClick={handleNext}
                                        type="button"
                                    >
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
                                        <Slider>{thumbnails}</Slider>
                                    </div>
                                </CarouselProvider>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default FullCarousel;
