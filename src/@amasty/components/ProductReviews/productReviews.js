import React, { useRef } from 'react';
import { number, shape } from 'prop-types';
import { useProductReviews } from '../../talons/useProductReviews';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './productReviews.css';
import Summary from '../Summary';
import List from './list';
import ReviewForm from '../ReviewForm';

const ProductReviews = props => {
  const { product } = props;
  const { id, name } = product;
  const reviewFormRef = useRef(null);
  const rootRef = useRef(null);

  const {
    loading,
    error,
    productReviews,
    goToReviewForm,
    settings,
    settingsLoading,
    pageControl,
    toolbarValues,
    handleChangeToolbar,
    handleStarFilter
  } = useProductReviews({
    id,
    reviewFormRef,
    rootRef
  });

  if (settingsLoading) {
    return <LoadingIndicator />;
  }

  if (!productReviews || error) {
    return null;
  }

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <div ref={rootRef} className={classes.root}>
      <h2 className={classes.title}>Customer Reviews</h2>

      <Summary
        {...productReviews}
        goToReviewForm={goToReviewForm}
        handleStarFilter={handleStarFilter}
      />

      <List
        loading={loading}
        {...productReviews}
        {...settings}
        pageControl={pageControl}
        values={toolbarValues}
        onChange={handleChangeToolbar}
        handleStarFilter={handleStarFilter}
      />

      <div ref={reviewFormRef} className={classes.reviewForm}>
        <ReviewForm {...settings} productName={name} productId={id} />
      </div>
    </div>
  );
};

ProductReviews.propTypes = {
  product: shape({
    id: number.isRequired
  })
};

export default ProductReviews;
