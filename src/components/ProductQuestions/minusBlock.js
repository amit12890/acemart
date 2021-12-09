import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { get } from 'lodash-es';


export default function MinusBlock({queryType, mutation, variables, count, onSuccess}) {
    const [updateMinus, { loading }] = useMutation(mutation, {
        fetchPolicy: 'no-cache'
    });

    const handleClick = useCallback(async () => {
        try {
            const { data } = await updateMinus({
                variables: variables
            });
            if (get(data ,`${queryType}.success`, false)) {
                onSuccess(get(data ,`${queryType}.count`, 0))
            }
        } catch (error) {
            console.log('Error during down vote', error);
        }
    }, [updateMinus, variables]);

    return (
        <div
            style={{
                color: 'blue',
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >
            {count || 0}
            {loading ? ' Loading' : ' Minus'}
        </div>
    );
}
