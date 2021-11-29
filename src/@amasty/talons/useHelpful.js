import { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';
import ADD_VOTE from '../queries/addVote.graphql';

const VOTE_TYPES = {
  PLUS: 'plus',
  MINUS: 'minus'
};

export const useHelpful = props => {
  const { reviewId, setVote } = props;

  const [isSubmiting, setIsSubmiting] = useState(false);

  const [addVote] = useMutation(ADD_VOTE, {
    fetchPolicy: 'no-cache'
  });

  const handleSubmit = useCallback(
    async type => {
      setIsSubmiting(true);

      try {
        const { data } = await addVote({
          variables: {
            type,
            reviewId
          }
        });

        const { addAdvVote } = data || {};
        const { success, review: vote } = addAdvVote || {};

        if (success) {
          setVote(vote);
        }

        setIsSubmiting(false);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error(error);
        }

        setIsSubmiting(false);
      }
    },
    [reviewId, setIsSubmiting, setVote, addVote]
  );

  return {
    disabled: isSubmiting,
    likeHandler: () => handleSubmit(VOTE_TYPES.PLUS),
    dislikeHandler: () => handleSubmit(VOTE_TYPES.MINUS)
  };
};
