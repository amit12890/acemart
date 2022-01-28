import React from 'react';
import { array } from 'prop-types';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './productReviews.css';
import Pagination from '../../../venia/components/Pagination';
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
      <div className={[classes.message, classes.info].join(" ")}>
        <i className={classes.iconWrapper}>
          <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <title>warning</title>
            <path d="M18.281 24.844v-3.406q0-0.219-0.156-0.406t-0.406-0.188h-3.438q-0.25 0-0.406 0.188t-0.156 0.406v3.406q0 0.25 0.156 0.422t0.406 0.172h3.438q0.25 0 0.406-0.172t0.156-0.422zM18.25 18.156l0.313-8.188q0-0.094-0.031-0.188t-0.125-0.156-0.203-0.125-0.234-0.063h-3.938q-0.125 0-0.234 0.063t-0.203 0.125-0.125 0.172-0.031 0.203l0.281 8.156q0 0.188 0.188 0.297t0.438 0.109h3.313q0.219 0 0.406-0.109t0.188-0.297v0zM18 1.469l13.719 25.156q0.281 0.531 0.281 1.125t-0.313 1.125-0.844 0.828-1.125 0.297h-27.438q-0.594 0-1.125-0.297t-0.844-0.828-0.313-1.125 0.281-1.125l13.719-25.156q0.281-0.531 0.828-0.859t1.172-0.328 1.172 0.328 0.828 0.859v0z"></path>
          </svg>
        </i>
        <span>No reviews</span>

      </div>
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
