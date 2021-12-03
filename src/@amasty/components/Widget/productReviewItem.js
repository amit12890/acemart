import React from 'react';
import { shape, string } from 'prop-types';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './widget.css';
import { Link } from 'react-router-dom';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import Image from '@magento/venia-ui/lib/components/Image';
import { UNCONSTRAINED_SIZE_KEY } from '@magento/peregrine/lib/talons/Image/useImage';
import Rating from '../Rating/rating';

const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 375;

// Gallery switches from two columns to three at 640px.
const IMAGE_WIDTHS = new Map()
  .set(640, IMAGE_WIDTH)
  .set(UNCONSTRAINED_SIZE_KEY, 840);

const ProductReviewItem = props => {
  const {
    name,
    productUrl,
    image,
    reviewBy,
    reviewMessage,
    date,
    rating_votes: ratingVotes
  } = props;

  const classes = mergeClasses(defaultClasses, props.classes);
  const productLink = resourceUrl(`${productUrl}`);

  return (
    <div className={classes.item}>
      <div className={classes.productInfo}>
        <Link to={productLink} className={classes.itemName}>
          <span>{name}</span>
        </Link>

        <Link to={productLink} className={classes.images}>
          <Image
            alt={name}
            classes={{
              image: classes.image,
              root: classes.imageContainer
            }}
            height={IMAGE_HEIGHT}
            resource={image.url}
            widths={IMAGE_WIDTHS}
          />
        </Link>
      </div>

      <div className={classes.reviewInfo}>
        {Array.isArray(ratingVotes) &&
          ratingVotes.map(({ value, rating_code, percent, vote_id }) => (
            <div key={vote_id} className={classes.rating}>
              <div className={classes.ratingLabel}>{rating_code}</div>
              <Rating
                classes={{ root: classes.ratingStars }}
                percent={percent}
                value={value}
              />
            </div>
          ))}

        <div className={classes.author}>
          {'Review by '}
          <span>{reviewBy}</span>
        </div>

        <div className={classes.message}>{reviewMessage}</div>

        <div className={classes.footer}>
          <Link to={`${productLink}#reviews`} className={classes.more}>
            <span>{'See all reviews'}</span>
          </Link>

          <time className={classes.date}>{date}</time>
        </div>
      </div>
    </div>
  );
};

ProductReviewItem.propTypes = {
  name: string,
  productUrl: string,
  image: shape({
    url: string
  }),
  reviewBy: string,
  reviewMessage: string
};

export default ProductReviewItem;
