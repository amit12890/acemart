import { useCallback, useState } from 'react';
import { useAdvancedReviewsContext } from '../context';
import { useUserContext } from '@magento/peregrine/lib/context/user';

export const useReview = props => {
  const { plus_review, minus_review, comments } = props;

  const { settings } = useAdvancedReviewsContext();

  const [{ isSignedIn }] = useUserContext();
  const [isShowComments, setShowComments] = useState(false);
  const [isShowCommentForm, setShowCommentsForm] = useState(false);
  const [vote, setVote] = useState({ plus_review, minus_review });
  const [commentCount, setCommentCount] = useState(
    Array.isArray(comments) ? comments.length : 0
  );

  const showComments = useCallback(() => {
    const newState = commentCount !== 0 && !isShowComments;

    setShowComments(newState);
    setShowCommentsForm(newState);
  }, [isShowComments, setShowCommentsForm, setShowComments, commentCount]);

  const showCommentForm = useCallback(() => {
    const newState =
      (isShowCommentForm && isShowComments) || !isShowCommentForm;
    setShowCommentsForm(newState);
    setShowComments(false);
  }, [isShowComments, isShowCommentForm, setShowCommentsForm, setShowComments]);

  const isCommentsEnabled =
    settings.isCommentsEnabled &&
    (!settings.isGuestCanComment ? isSignedIn : true);

  return {
    settings,
    showComments,
    isShowComments,
    isShowCommentForm,
    showCommentForm,

    ...vote,
    setVote,
    commentCount,
    updateCommentCount: setCommentCount,
    isCommentsEnabled
  };
};
