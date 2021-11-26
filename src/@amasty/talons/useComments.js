import { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';
import ADD_COMMENT from '../queries/addComment.graphql';
import { useAdvancedReviewsContext } from '../context';
import { useUserContext } from '@magento/peregrine/lib/context/user';

export const useComments = props => {
  const { reviewId, updateCommentCount, comments } = props;
  const { settings } = useAdvancedReviewsContext();

  const [isSubmiting, setIsSubmiting] = useState(false);
  const [items, setComments] = useState(comments);
  const [isShowModerationMessage, setIsShowModerationMessage] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [formApi, setFormApi] = useState(null);
  const [{ currentUser, isSignedIn }] = useUserContext();

  const [addComment] = useMutation(ADD_COMMENT, {
    fetchPolicy: 'no-cache'
  });

  const showModerationMessage = useCallback(
    newComments => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (JSON.stringify(newComments) === JSON.stringify(items)) {
        setIsShowModerationMessage(true);

        const id = setTimeout(() => {
          setIsShowModerationMessage(false);
        }, 5000);

        setTimeoutId(id);
      }
    },
    [setIsShowModerationMessage, setTimeoutId, timeoutId, items]
  );

  const handleSubmit = useCallback(
    async _formData => {
      setIsSubmiting(true);

      try {
        const { firstname, lastname, email } = currentUser;
        const nickname =
          firstname && lastname ? [firstname, lastname].join(' ') : '';
        const formData = isSignedIn
          ? { ..._formData, nickname, email }
          : { ..._formData };

        const { data } = await addComment({
          variables: {
            reviewId,
            ...formData
          }
        });

        const { addAdvComment } = data || {};
        const { success, review } = addAdvComment || {};
        const { comments: newComments } = review || {};

        if (success) {
          setComments(newComments);
          formApi.reset();
          updateCommentCount(newComments.length);
          showModerationMessage(newComments);
        }

        setIsSubmiting(false);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error(error);
        }

        setIsSubmiting(false);
      }
    },
    [
      reviewId,
      formApi,
      currentUser,
      isSignedIn,
      updateCommentCount,
      addComment,
      showModerationMessage
    ]
  );

  return {
    settings,
    handleSubmit,
    comments: items,
    isDisabled: isSubmiting,
    setFormApi,
    isShowUserFields: !isSignedIn,
    isShowModerationMessage
  };
};
