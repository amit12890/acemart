import React from 'react';
import ProductReviews from './components/ProductReviews';
import AmAdvancedReviewsProvider from './context';

const AmAdvancedReviews = props => (
  <AmAdvancedReviewsProvider>
    <ProductReviews {...props} />
  </AmAdvancedReviewsProvider>
);

export default AmAdvancedReviews;
