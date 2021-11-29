import { useAdvancedReviewsContext } from '../context';
import { useCallback, useMemo, useState } from 'react';

const IMG_GAP = 16;

export const useImages = props => {
  const { items } = props;
  const { settings } = useAdvancedReviewsContext();
  const { isAllowImages, slidesToShow, getReviewImageWidth = 100 } = settings;

  const [originalSrc, setOriginalSrc] = useState(null);

  const handleOpen = useCallback(src => setOriginalSrc(src), [setOriginalSrc]);
  const handleClose = useCallback(() => setOriginalSrc(null), [setOriginalSrc]);

  const carouselSettings = useMemo(() => {
    return {
      dots: false,
      infinite: false,
      arrows: true,
      slidesToShow,
      slidesToScroll: 1,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    };
  }, [slidesToShow]);

  const itemsCount = items.length;

  return {
    isAllowImages,
    width: getReviewImageWidth,
    slidesToShow,
    originalSrc,
    handleOpen,
    handleClose,
    isSliderEnabled: slidesToShow !== 0 && slidesToShow < itemsCount,
    carouselSettings,
    carouselWidth: (Number(getReviewImageWidth) + IMG_GAP) * slidesToShow
  };
};
