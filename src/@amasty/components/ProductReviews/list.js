import React from 'react';
import { array } from 'prop-types';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './productReviews.css';
import Pagination from '@magento/venia-ui/lib/components/Pagination';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import Review from './review';
import Toolbar from './toolbar';

const List = props => {
  const { items, pageControl, loading, values, handleStarFilter } = props;
  const classes = mergeClasses(defaultClasses, props.classes);
  const { totalPages } = pageControl;
  const { stars } = values || {};

  const reviews =
    Array.isArray(items) && items.length !== 0 ? (
      items.map(item => <Review key={item.review_id} {...item} />)
    ) : (
      <div className={classes.empty}>No reviews</div>
    );

  return (
    <div className={classes.reviewsRoot}>
      <div className={classes.title}>
        {`Top customer reviews ${stars ? `with ${stars} stars` : ''}`}
        {stars && (
          <button
            className={classes.showAllBtn}
            onClick={() => handleStarFilter()}
          >
            {'Show All'}
          </button>
        )}
      </div>
      <Toolbar {...props} />

      <div className={`${classes.list}`}>
        {!loading ? reviews : <LoadingIndicator />}
      </div>

      {totalPages > 1 && (
        <Pagination
          classes={{ root: classes.pagination }}
          pageControl={pageControl}
        />
      )}
    </div>
  );
};

List.propTypes = {
  items: array
};

export default List;
