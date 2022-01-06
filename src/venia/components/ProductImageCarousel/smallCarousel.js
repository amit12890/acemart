import React from 'react';
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from 'react-feather';

import { useStyle } from '../../classify';
import Icon from '../Icon';
import Image from '../Image';
import defaultClasses from './baseCarousel.css';
import { size } from 'lodash-es';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from 'pure-react-carousel';
import { comingSoonImage } from '../../../url.utils';

const IMAGE_WIDTH = 500;
const TBM_IMAGE_WIDTH = 110;

const SmallCarousel = props => {
    const {
        activeItemIndex,
        handleNext,
        handlePrevious,
        handleThumbnailClick,
        sortedImages,
        setShowFullScreen
    } = props;

    const classes = useStyle(defaultClasses, props.classes);

    const chevronClasses = { root: classes.chevron };
    const showArrows = size(sortedImages) > 1;
    const hasImages = !!size(sortedImages);

    if (!hasImages) {
        return (
            <div className={classes.root}>
                <div className={classes.carouselContainer_placeholder}>
                    <Image
                        alt={'placeholder'}
                        classes={{
                            image: classes.currentImage_placeholder,
                            root: classes.imageContainer_placeholder
                        }}
                        src={comingSoonImage()}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <CarouselProvider
                className={classes.carouselContainer}
                style={{
                    width: '100%'
                }}
                currentSlide={activeItemIndex}
                naturalSlideWidth={IMAGE_WIDTH}
                naturalSlideHeight={IMAGE_WIDTH}
                isPlaying={false}
                visibleSlides={1}
                totalSlides={size(sortedImages)}
            >
                {showArrows && (
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
                {!!size(sortedImages) ? (
                    <Slider>
                        {sortedImages.map((img, ind) => {
                            return (
                                <Slide index={ind}>
                                    <Image
                                        classes={{
                                            image: classes.currentImage,
                                            root: classes.imageContainer
                                        }}
                                        src={img.url}
                                        width={'100%'}
                                        onClick={() => setShowFullScreen(true)}
                                    />
                                </Slide>
                            );
                        })}
                    </Slider>
                ) : (
                    <Slider>
                        <Slide>
                            <Image
                                classes={{
                                    image: classes.currentImage,
                                    root: classes.imageContainer
                                }}
                                src={comingSoonImage()}
                                width={'100%'}
                            />
                        </Slide>
                    </Slider>
                )}
                {showArrows && (
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
            {hasImages ? (
                <CarouselProvider
                    className={classes.thumbCarouselContainer}
                    style={{
                        width: '100%'
                    }}
                    currentSlide={activeItemIndex}
                    naturalSlideWidth={TBM_IMAGE_WIDTH}
                    naturalSlideHeight={TBM_IMAGE_WIDTH}
                    isPlaying={false}
                    visibleSlides={4}
                    totalSlides={size(sortedImages)}
                >
                    {showArrows && (
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
                    <Slider>
                        {sortedImages.map((img, ind) => {
                            return (
                                <Slide
                                    index={ind}
                                    className={classes.thumbVisible}
                                    innerClassName={
                                        ind === activeItemIndex
                                            ? classes.thumbActive
                                            : ''
                                    }
                                >
                                    <Image
                                        classes={{
                                            image: classes.currentImage,
                                            root: classes.imageContainer
                                        }}
                                        src={img.url}
                                        width={'100%'}
                                        onClick={() => {
                                            setShowFullScreen(true);
                                            handleThumbnailClick(ind);
                                        }}
                                    />
                                </Slide>
                            );
                        })}
                    </Slider>
                    {showArrows && (
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
            ) : null}
        </div>
    );
};

export default SmallCarousel;
