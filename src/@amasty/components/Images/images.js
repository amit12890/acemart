import React from 'react';
import { array } from 'prop-types';
import Trigger from '@magento/venia-ui/lib/components/Trigger';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './images.css';
import { useImages } from '../../talons/useImages';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { X as CloseIcon } from 'react-feather';
import SlickSlider from 'react-slick';

const Images = props => {
  const { items } = props;
  const {
    isAllowImages,
    handleOpen,
    handleClose,
    width,
    originalSrc,
    isSliderEnabled,
    carouselSettings,
    carouselWidth
  } = useImages({ items });

  if (!isAllowImages || !Array.isArray(items) || !items.length) {
    return null;
  }

  const classes = mergeClasses(defaultClasses, props.classes);

  const images = items.map(img => (
    <Trigger
      classes={{ root: classes.image }}
      key={img.resized_path}
      action={() => handleOpen(img.full_path)}
    >
      <img
        width={width}
        height={width}
        src={`/${img.resized_path}`}
        alt="Review"
      />
    </Trigger>
  ));

  const originalImg = originalSrc ? (
    <div className={classes.original}>
      <button className={classes.mask} onClick={handleClose} />
      <div className={classes.originalContainer}>
        <Trigger classes={{ root: classes.close }} action={handleClose}>
          <Icon src={CloseIcon} size={18} />
        </Trigger>
        <img src={`/${originalSrc}`} alt="Review" />
      </div>
    </div>
  ) : null;

  const content = isSliderEnabled ? (
    <div style={{ width: carouselWidth }} className={classes.carousel}>
      <SlickSlider {...carouselSettings}>{images}</SlickSlider>
    </div>
  ) : (
    <div className={classes.list}>{images}</div>
  );

  return (
    <div className={classes.root}>
      {content}

      {originalImg}
    </div>
  );
};

Images.propTypes = {
  items: array
};

export default Images;
