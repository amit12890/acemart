import React, { useMemo } from 'react';
import { bool, array } from 'prop-types';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './widget.css';
import ProductReviewItem from './productReviewItem';
import SlickSlider from 'react-slick';

const ProductReviews = props => {
  const { enable_slider: enableSlider, items, layout } = props;
  const classes = mergeClasses(defaultClasses, props.classes);

  const carouselSettings = useMemo(() => {
    const getSlidesToShow = count => (layout !== 'vertical' ? count : 1);

    return {
      dots: true,
      infinite: false,
      arrows: true,
      slidesToShow: getSlidesToShow(3),
      slidesToScroll: 1,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: getSlidesToShow(3),
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: getSlidesToShow(2),
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 425,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  }, [layout]);

  if (!Array.isArray(items) || !items.length) {
    return <div className={classes.empty}>{'No reviews'}</div>;
  }

  const reviews = items.map((item, idx) => (
    <ProductReviewItem key={`${item.productUrl}-${idx}`} {...item} />
  ));

  if (enableSlider) {
    return (
      <div className={classes.carousel}>
        <SlickSlider {...carouselSettings}>{reviews}</SlickSlider>
      </div>
    );
  }

  const fullClass = `${classes.reviews} ${classes[layout]}`;

  return <div className={fullClass}>{reviews}</div>;
};

ProductReviews.propTypes = {
  enable_slider: bool,
  items: array
};

export default ProductReviews;
