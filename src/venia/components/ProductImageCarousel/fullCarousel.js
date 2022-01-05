import React, { useCallback, useEffect } from 'react';
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from 'react-feather';

import { useWindowSize } from '../../../magento/peregrine/talons/ProductImageCarousel/useWindowSize';
import { Portal } from '@magento/venia-ui/lib/components/Portal';

import { useStyle } from '../../classify';
import Icon from '../Icon';
import Image from '../Image';
import defaultClasses from './baseCarousel.css';
import Button from '../Button';
import { size } from 'lodash-es';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    ImageWithZoom
} from 'pure-react-carousel';

const TBM_IMAGE_WIDTH = 110;

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

    const windowSize = useWindowSize();

    const bigImageWidth = windowSize.height - 74 - 120;
    const contentHeight = windowSize.height - 74;
    const thumbnailContainerHeight = TBM_IMAGE_WIDTH + 6;
    const fullContainerHeight = contentHeight - TBM_IMAGE_WIDTH - 20

    const thumbnailSlidesCount = Math.round(windowSize.width / TBM_IMAGE_WIDTH)

    // apply body scroll lock
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.onkeyup = event => {
            if (event.keyCode == 27) {
                closeFullScreen();
            }
        };
        return () => {
            document.body.style.overflow = '';
            window.onkeyup = () => {};
        };
    }, []);

    const closeFullScreen = useCallback(() => {
        setShowFullScreen(false);
    }, []);

    const classes = useStyle(defaultClasses, props.classes);

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
                <div
                    className={classes.contentWrapper}
                    style={{
                        width: windowSize.width,
                        height: windowSize.height
                    }}
                >
                    <div
                        className={classes.modalHeader}
                        style={{ height: '74px' }}
                    >
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
                    </div>
                    <div
                        className={classes.content}
                        style={{
                            height: contentHeight
                        }}
                    >
                        <div className={classes.fullroot}>
                            <CarouselProvider
                                className={classes.fullcarouselContainer}
                                currentSlide={activeItemIndex}
                                naturalSlideWidth={bigImageWidth}
                                naturalSlideHeight={fullContainerHeight}
                                isPlaying={false}
                                visibleSlides={1}
                                totalSlides={size(sortedImages)}
                                style={{ height: fullContainerHeight }}
                            >
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
                                <Slider>
                                    {sortedImages.map((img, ind) => {
                                        return (
                                            <Slide index={ind}>
                                                <ImageWithZoom
                                                    className={
                                                        classes.fullcurrentImage
                                                    }
                                                    src={img.url}
                                                    style={{
                                                        maxHeight: fullContainerHeight
                                                    }}
                                                />
                                            </Slide>
                                        );
                                    })}
                                </Slider>
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
                            </CarouselProvider>
                            <CarouselProvider
                                className={classes.thumbFullCarouselContainer}
                                currentSlide={activeItemIndex}
                                naturalSlideWidth={TBM_IMAGE_WIDTH}
                                naturalSlideHeight={TBM_IMAGE_WIDTH}
                                isPlaying={false}
                                visibleSlides={thumbnailSlidesCount}
                                totalSlides={size(sortedImages)}
                            >
                                {size(sortedImages) > 1 && (
                                    <ButtonBack
                                        className={[
                                            classes.previousButton,
                                            classes.smallButton
                                        ].join(' ')}
                                    >
                                        <Icon
                                            classes={chevronClasses}
                                            src={ChevronLeftIcon}
                                            size={26}
                                        />
                                    </ButtonBack>
                                )}
                                <Slider style={{ height: thumbnailContainerHeight }}>
                                    {sortedImages.map((img, ind) => {
                                        return (
                                            <Slide
                                                index={ind}
                                                innerClassName={
                                                    ind === activeItemIndex
                                                        ? classes.thumbActive
                                                        : ''
                                                }
                                            >
                                                <Image
                                                    classes={{
                                                        image:
                                                            classes.currentImage,
                                                        root:
                                                            classes.imageContainer
                                                    }}
                                                    src={img.url}
                                                    width={'100%'}
                                                    style={{
                                                        maxHeight: TBM_IMAGE_WIDTH
                                                    }}
                                                    onClick={() => {
                                                        handleThumbnailClick(
                                                            ind
                                                        );
                                                    }}
                                                />
                                            </Slide>
                                        );
                                    })}
                                </Slider>
                                {size(sortedImages) > 1 && (
                                    <ButtonNext
                                        className={[
                                            classes.nextButton,
                                            classes.smallButton
                                        ].join(' ')}
                                    >
                                        <Icon
                                            classes={chevronClasses}
                                            src={ChevronRightIcon}
                                            size={26}
                                        />
                                    </ButtonNext>
                                )}
                            </CarouselProvider>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default FullCarousel;
