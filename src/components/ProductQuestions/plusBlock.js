import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { get } from 'lodash-es';

/**
 * 
 * @props {String} queryType questionRatingPlus | answerRatingPlus
 * @returns 
 */
export default function PlusBlock({queryType, mutation, variables, count, onSuccess}) {
    const [updatePlus, { loading }] = useMutation(mutation, {
        fetchPolicy: 'no-cache'
    });

    const handleClick = useCallback(async () => {
        try {
            const { data } = await updatePlus({
                variables: variables
            });
            if (get(data ,`${queryType}.success`, false)) {
                onSuccess(get(data ,`${queryType}.count`, 0))
            }
        } catch (error) {
            console.log('Error during up vote', error);
        }
    }, [updatePlus, variables]);

    return (
        <div
            style={{
                color: 'blue',
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >
            {count || 0}
            {loading ? ' Loading' : ' Plus'}
        </div>
    );
}
