import React from 'react';
import { number, shape } from 'prop-types';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './summary.css';
import Button from '@magento/venia-ui/lib/components/Button';
import Rating from '../Rating/rating';

const starsMap = {
  five: 5,
  four: 4,
  three: 3,
  two: 2,
  one: 1
};

const Summary = props => {
  const {
    ratingSummary,
    ratingSummaryValue,
    recomendedPercent,
    detailedSummary,
    totalRecords,
    goToReviewForm,
    handleStarFilter
  } = props;

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <div className={classes.rating}>
          <div className={classes.ratingValue}>{ratingSummaryValue}</div>
          <div className={classes.ratingStarsRoot}>
            <Rating percent={ratingSummary} value={ratingSummaryValue} />
            <p className={classes.count}>{`${totalRecords} ${
              totalRecords === 1 ? 'review' : 'reviews'
            }`}</p>
          </div>
        </div>

        <div className={classes.recomended}>
          <span
            className={classes.recomendedValue}
          >{`${recomendedPercent}%`}</span>
          <span className={classes.recomendedLabel}>
            of customers recommend this product
          </span>
        </div>
      </div>

      <div className={classes.details}>
        {Object.keys(starsMap).map(key => {
          const percent = `${
            totalRecords
              ? Math.floor((detailedSummary[key] / totalRecords) * 100)
              : 0
          }%`;

          return (
            <button
              type="button"
              className={classes.detailsItem}
              key={key}
              onClick={() => handleStarFilter(starsMap[key])}
            >
              <span className={classes.detailsStars}>{`${starsMap[key]} ${
                starsMap[key] > 1 ? 'stars' : 'star'
              }`}</span>
              <span className={classes.detailsBar}>
                <span
                  className={classes.detailsBarValue}
                  style={{ width: percent }}
                />
              </span>
              <span className={classes.detailsPercent}>{`${percent} (${
                detailedSummary[key]
              })`}</span>
            </button>
          );
        })}
      </div>

      <div className={classes.goToReviews}>
        <Button onClick={goToReviewForm}>{'Write a review'}</Button>
        <span className={classes.goToReviewsLabel}>
          Share your thoughts with other customers
        </span>
      </div>
    </div>
  );
};

Summary.propTypes = {
  ratingSummary: number,
  ratingSummaryValue: number,
  recomendedPercent: number,
  totalRecords: number,
  detailedSummary: shape({
    one: number,
    two: number,
    three: number,
    four: number,
    five: number
  })
};

export default Summary;
