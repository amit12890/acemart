import React, { useRef } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { get, size } from 'lodash';

import postOperations from './products.gql';
import ResourceList from '../../../components/LandingPage/ResourceList';
import { useStyle } from '@magento/venia-ui/lib/classify';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from 'pure-react-carousel';

import GalleryItem from '../../../venia/components/GalleryGrid/item';
import { useGallery } from '@magento/peregrine/lib/talons/Gallery/useGallery';

import defaultClasses from './relatedProducts.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

const RelatedProducts = props => {
    const { relatedProducts, classes } = props;
    const productContainerRef = useRef();

    const { queries } = postOperations;
    const { getRelatedProductsQuery } = queries;

    const { data, error, loading } = useQuery(getRelatedProductsQuery, {
        variables: { relatedProducts },
        skip: !relatedProducts.length
    });

    if (data) {
        const {
            products: { items: products }
        } = data;

        return (
            <div className={classes.related} ref={productContainerRef}>
                <div className={classes.blockTitle}>
                    <strong>Related Products</strong>
                </div>
                <div className={classes.productList}>
                    {productContainerRef.current ? (
                        <RelatedProductSlider
                            data={products}
                            containerWidth={
                                productContainerRef.current.offsetWidth
                            }
                        />
                    ) : null}
                </div>
            </div>
        );
    }

    return null;
};

const DEFAULT_SLIDES = 4;

const RelatedProductSlider = ({ data, containerWidth }) => {
    const classes = useStyle(defaultClasses);
    const dataSize = size(data);
    const showArrows = dataSize > DEFAULT_SLIDES;

    const talonProps = useGallery();
    const { storeConfig } = talonProps;

    if (dataSize === 0) return null;

    return (
        <CarouselProvider
            className={classes.resourceCarouselProvider}
            naturalSlideWidth={containerWidth / DEFAULT_SLIDES}
            naturalSlideHeight={400}
            isPlaying={showArrows}
            visibleSlides={DEFAULT_SLIDES}
            totalSlides={dataSize}
        >
            <div className={classes.resourceSliderWrapper}>
                <Slider className={classes.resourceSliderList}>
                    {data.map((item, i) => {
                        return (
                            <Slide
                                key={item.id}
                                className={classes.resourceSlide}
                                index={i}
                            >
                                <GalleryItem
                                    item={item}
                                    classes={classes}
                                    storeConfig={storeConfig}
                                />
                            </Slide>
                        );
                    })}
                </Slider>
                {showArrows && (
                    <>
                        <ButtonBack
                            className={[
                                classes.navArrorw,
                                classes.previous
                            ].join(' ')}
                        >
                            <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="32"
                                viewBox="0 0 12 32"
                            >
                                <title>previous</title>
                                <path d="M11.188 10q0 0.094-0.047 0.219t-0.109 0.188l-7.031 7.031 7.031 7q0.063 0.094 0.109 0.203t0.047 0.203q0 0.125-0.047 0.234t-0.109 0.203l-0.906 0.875q-0.094 0.094-0.203 0.141t-0.203 0.047q-0.125 0-0.234-0.047t-0.172-0.141l-8.344-8.313q-0.063-0.094-0.109-0.203t-0.047-0.203q0-0.125 0.047-0.234t0.109-0.172l8.344-8.344q0.063-0.063 0.172-0.109t0.234-0.047q0.094 0 0.203 0.047t0.203 0.109l0.906 0.906q0.063 0.063 0.109 0.172t0.047 0.234v0z" />
                            </svg>
                        </ButtonBack>
                        <ButtonNext
                            className={[classes.navArrorw, classes.next].join(
                                ' '
                            )}
                        >
                            <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="32"
                                viewBox="0 0 11 32"
                            >
                                <title>next</title>
                                <path d="M10.625 17.438q0 0.094-0.047 0.203t-0.141 0.203l-8.313 8.313q-0.094 0.094-0.203 0.141t-0.203 0.047q-0.125 0-0.234-0.047t-0.172-0.141l-0.906-0.875q-0.063-0.094-0.125-0.203t-0.063-0.234q0-0.094 0.063-0.203t0.125-0.203l7.031-7-7.031-7.031q-0.063-0.063-0.125-0.188t-0.063-0.219 0.063-0.219 0.125-0.188l0.906-0.906q0.063-0.063 0.172-0.109t0.234-0.047q0.094 0 0.203 0.047t0.203 0.109l8.313 8.344q0.094 0.063 0.141 0.172t0.047 0.234v0z" />
                            </svg>
                        </ButtonNext>
                    </>
                )}
            </div>
        </CarouselProvider>
    );
};

export default RelatedProducts;
