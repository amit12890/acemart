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
                    <div className={classes.modalHeader}>
                        <div className={classes.close}>
                            <Button
                                onClick={closeFullScreen}
                                className={classes.buttonSmall}
                            >
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
                        </div>
                        <div className={classes.zoomin}>
                            <Button
                                onClick={handleZoomIn}
                                className={classes.buttonSmall}
                            >

                                <i className={classes.iconWrapper}>
                                    <svg version="1.1" className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="227.4px" height="227.4px" viewBox="0 0 227.4 227.4"
                                    >

                                        <path class="st0" d="M217.6,214.7l-65.2-67.8c16.1-15.6,26.2-37.4,26.2-61.5C178.6,38.3,140.3,0,93.2,0S7.7,38.3,7.7,85.4
	s38.3,85.4,85.4,85.4c17.6,0,33.9-5.3,47.5-14.5l66.1,68.7c1.5,1.5,3.4,2.3,5.4,2.3c1.9,0,3.7-0.7,5.2-2.1
	C220.4,222.4,220.4,217.7,217.6,214.7z M22.7,85.4C22.7,46.6,54.3,15,93.2,15s70.4,31.6,70.4,70.4s-31.6,70.4-70.4,70.4
	C54.3,155.9,22.7,124.3,22.7,85.4z M131.4,77.9H54.9c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h76.5c4.1,0,7.5-3.4,7.5-7.5
	S135.6,77.9,131.4,77.9z M100.6,123.6V47.2c0-4.1-3.4-7.5-7.5-7.5c-4.1,0-7.5,3.4-7.5,7.5v76.5c0,4.1,3.4,7.5,7.5,7.5
	C97.2,131.1,100.6,127.9,100.6,123.6z"/>
                                    </svg>
                                </i>
                            </Button>
                        </div>
                        <div className={classes.zoomout}>
                            <Button
                                onClick={handleZoomOut}
                                className={classes.buttonSmall}
                            >
                                <i className={classes.iconWrapper}>
                                    <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="227.4px" height="227.4px" viewBox="0 0 227.4 227.4" >

                                        <path d="M217.6,214.7l-65.2-67.8c16.1-15.6,26.2-37.4,26.2-61.5C178.6,38.3,140.3,0,93.2,0C46.1,0,7.7,38.3,7.7,85.4
	c0,47.1,38.3,85.4,85.4,85.4c17.6,0,33.9-5.3,47.5-14.5l66.1,68.7c1.5,1.5,3.4,2.3,5.4,2.3c1.9,0,3.7-0.7,5.2-2.1
	C220.4,222.4,220.4,217.7,217.6,214.7z M22.7,85.4C22.7,46.6,54.3,15,93.2,15s70.4,31.6,70.4,70.4s-31.6,70.4-70.4,70.4
	C54.3,155.9,22.7,124.3,22.7,85.4z M131.4,77.9H54.9c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h76.5c4.1,0,7.5-3.4,7.5-7.5
	S135.6,77.9,131.4,77.9z"/>
                                    </svg>

                                </i>
                            </Button>
                        </div>
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
                                    naturalSlideHeight={200}
                                    isPlaying={false}
                                    visibleSlides={4}
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
