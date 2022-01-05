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

    return (
        <div className={classes.root}>
            <CarouselProvider
                className={classes.carouselContainer}
                style={{
                    width: '100%'
                    // height: IMAGE_WIDTH
                }}
                currentSlide={activeItemIndex}
                naturalSlideWidth={IMAGE_WIDTH}
                naturalSlideHeight={IMAGE_WIDTH}
                isPlaying={false}
                visibleSlides={1}
                totalSlides={size(sortedImages)}
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
                className={classes.thumbCarouselContainer}
                style={{
                    width: '100%'
                    // height: TBM_IMAGE_WIDTH
                }}
                currentSlide={activeItemIndex}
                naturalSlideWidth={TBM_IMAGE_WIDTH}
                naturalSlideHeight={TBM_IMAGE_WIDTH}
                isPlaying={false}
                visibleSlides={4}
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
    );
};

export default SmallCarousel;
