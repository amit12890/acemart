import React, { useMemo } from 'react';
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from 'react-feather';

import { transparentPlaceholder } from '@magento/peregrine/lib/util/images';

import { useStyle } from '../../classify';
import Icon from '../Icon';
import Image from '../Image';
import defaultClasses from './carousel.css';
import Thumbnail from './thumbnail';
import { size } from 'lodash-es';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

const IMAGE_WIDTH = 500;
const IMAGE_HEIGHT = 500;

const SmallCarousel = props => {
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
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
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
                {image}
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
                    {/* <div className={classes.thumbnailList}>
                        <Slider>{thumbnails}</Slider>
                    </div> */}
                </CarouselProvider>
            )}
        </div>
    );
};

export default SmallCarousel;
