import React, { Fragment } from 'react';
import { bool, string, array, number } from 'prop-types';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import Rating from '../Rating/rating';
import Images from '../Images';
import defaultClasses from './review.css';
import Comments from '../Comments';
import { useReview } from '../../talons/useReview';
import Icon from '@magento/venia-ui/lib/components/Icon';
import {
  PlusCircle as PlusIcon,
  MinusCircle as MinusIcon
} from 'react-feather';
import Helpful from '../Helpful/helpful';

const Review = props => {
  const {
    review_id: reviewId,
    nickname,
    created_at: date,
    is_recommended: isRecommended,
    title,
    detail,
    images,
    rating_votes: ratingVotes,
    verified_buyer: verifiedBuyer,
    answer,
    like_about,
    not_like_about,
    comments
  } = props;

  const {
    settings,
    isShowCommentForm,
    isShowComments,
    showComments,
    showCommentForm,
    plus_review: plusReview,
    minus_review: minusReview,
    setVote,
    commentCount,
    updateCommentCount,
    isCommentsEnabled
  } = useReview(props);

  const {
    isAllowHelpful,
    isProsConsEnabled,
    isRecommendFieldEnabled,
    isAllowImages,
    isAllowAnswer
  } = settings;

  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <div className={classes.authorDetails}>
        <p className={classes.author}>
          <span className={classes.authorIcon} />
          {nickname}
        </p>
        {!!verifiedBuyer && (
          <span className={classes.verifiedBuyer}>
            {'Verified Buyer'} <span className={classes.verifiedBuyerIcon} />
          </span>
        )}
        <time itemProp="datePublished" dateTime={date} className={classes.date}>
          {date}
        </time>
        {isRecommendFieldEnabled && isRecommended && (
          <div className={classes.recomended}>{'I recommend this product'}</div>
        )}
      </div>

      <div className={classes.descriptionRoot}>
        <div className={classes.descriptionHeader}>
          <span className={classes.title}>{title}</span>

          {isAllowHelpful && (
            <span className={classes.helpful}>
              {`${plusReview} people found this helpful`}
            </span>
          )}
        </div>

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

        <div className={classes.detail}>
          <span className={classes.detailText}>{detail}</span>
          {isAllowImages && <Images items={images} />}
        </div>

        {isAllowAnswer && answer && (
          <div className={classes.answer}>
            <div className={classes.answerTitle}>{'Response from store'}</div>
            <div className={classes.answerText}>{answer}</div>
          </div>
        )}

        <div
          className={`${classes.toolbar} ${
            !isCommentsEnabled ? classes.noComments : ''
          }`}
        >
          {isCommentsEnabled && (
            <Fragment>
              <div className={classes.toolbarItem}>
                <button
                  type="button"
                  className={classes.toolbarBtn}
                  onClick={showCommentForm}
                >
                  {'Reply'}
                </button>
              </div>
              <div className={classes.toolbarItem}>
                <button
                  type="button"
                  className={classes.toolbarBtn}
                  onClick={showComments}
                  disabled={commentCount === 0}
                >
                  <span className={classes.commentsIcon} />
                  {`Comments (${commentCount})`}
                </button>
              </div>
            </Fragment>
          )}

          {isAllowHelpful && (
            <div className={classes.toolbarItem}>
              <Helpful
                plusReview={plusReview}
                minusReview={minusReview}
                reviewId={reviewId}
                setVote={setVote}
              />
            </div>
          )}
        </div>

        {isProsConsEnabled && (
          <div className={classes.plusMinusRoot}>
            {like_about && (
              <div className={classes.plus}>
                <Icon src={PlusIcon} />
                <span className={classes.plusMinusText}>{like_about}</span>
              </div>
            )}

            {not_like_about && (
              <div className={classes.minus}>
                <Icon src={MinusIcon} />
                <span className={classes.plusMinusText}>{not_like_about}</span>
              </div>
            )}
          </div>
        )}

        {isCommentsEnabled && (
          <Comments
            reviewId={reviewId}
            comments={comments}
            isShowCommentForm={isShowCommentForm}
            isShowComments={isShowComments}
            updateCommentCount={updateCommentCount}
          />
        )}
      </div>
    </div>
  );
};

Review.propTypes = {
  review_id: number,
  nickname: string,
  created_at: string,
  is_recommended: bool,
  title: string,
  detail: string,
  images: array,
  rating_votes: array,
  answer: string,
  comments: array
};

export default Review;
