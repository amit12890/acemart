import React from 'react';
import { string } from 'prop-types';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { ThumbsUp as LikeIcon, ThumbsDown as DislikeIcon } from 'react-feather';
import defaultClasses from './helpful.css';
import { useHelpful } from '../../talons/useHelpful';

const Helpful = props => {
  const { plusReview, minusReview } = props;
  const { likeHandler, dislikeHandler, disabled } = useHelpful(props);

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <span className={classes.label}>{'Was this review helpful?'}</span>
      <button
        className={`${classes.likeBtn} ${
          Number(plusReview) ? classes.active : ''
        }`}
        onClick={likeHandler}
        disabled={disabled}
      >
        <Icon src={LikeIcon} />
      </button>
      <span className={classes.count}>{plusReview}</span>
      <button
        className={`${classes.dislikeBtn} ${
          Number(minusReview) ? classes.active : ''
        }`}
        onClick={dislikeHandler}
        disabled={disabled}
      >
        <Icon src={DislikeIcon} />
      </button>
      <span className={classes.count}>{minusReview}</span>
    </div>
  );
};

Helpful.propTypes = {
  minus_review: string,
  plusReview: string
};

Helpful.defaultProps = {
  minusReview: '0',
  plusReview: '0'
};

export default Helpful;
