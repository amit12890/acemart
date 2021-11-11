import React from 'react';
import SlickSlider from 'react-slick';
import GalleryItem from './galleryItem';
import { useCarousel } from './useCarousel';

const Carousel = props => {
    const { settings, items, classes = [] } = props;

    const { storeConfig } = useCarousel();

    const galleryItems = items.map((item, index) => {
        return (
            <GalleryItem key={index} item={item} storeConfig={storeConfig} />
        );
    });

    return (<SlickSlider  {...settings}>{galleryItems}</SlickSlider>);
};

export default Carousel;
