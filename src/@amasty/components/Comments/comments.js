import React from 'react';
import { bool } from 'prop-types';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './comments.css';
import Comment from './comment';
import CommentForm from './commentForm';
import { useComments } from '../../talons/useComments';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { CheckCircle as CheckIcon } from 'react-feather';

const Comments = props => {
  const { isShowComments, isShowCommentForm } = props;
  const talonProps = useComments(props);

  const { comments, isShowModerationMessage } = talonProps;
  const classes = mergeClasses(defaultClasses, props.classes);

  const list =
    Array.isArray(comments) && comments.length
      ? comments.map(comment => <Comment key={comment.id} {...comment} />)
      : null;

  return (
    <div className={classes.root}>
      {list && isShowComments && (
        <div className={classes.comments}>
          <p className={classes.title}>
            {`Showing ${comments.length} comments`}
          </p>
          <ul className={classes.list}>{list}</ul>
        </div>
      )}

      {isShowCommentForm && <CommentForm {...talonProps} />}
      {isShowModerationMessage && (
        <div className={classes.successMessage}>
          <Icon src={CheckIcon} size={20} />
          <span>{'You submitted your review for moderation.'}</span>
        </div>
      )}
    </div>
  );
};

Comments.propTypes = {
  isShowComments: bool,
  isShowCommentForm: bool
};

export default Comments;
