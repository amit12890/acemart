import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';

export default function MinusBlock(props) {
    const [updateMinus, { loading }] = useMutation(props.mutation, {
        fetchPolicy: 'no-cache'
    });

    const handleClick = useCallback(async () => {
        try {
            const { data } = await updateMinus({
                variables: props.variables
            });
            console.log("ggwp data", data)
        } catch (error) {
            console.log('ggwp MinusBlock error', error);
        }
    }, [updateMinus, props.variables]);

    return (
        <div
            style={{
                color: 'blue',
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >
            {loading ? 'Loading' : 'Minus'}
        </div>
    );
}
