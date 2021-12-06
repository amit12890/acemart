import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';

export default function PlusBlock(props) {
    const [updatePlus, { loading }] = useMutation(props.mutation, {
        fetchPolicy: 'no-cache'
    });

    const handleClick = useCallback(async () => {
        try {
            const { data } = await updatePlus({
                variables: props.variables
            });
        } catch (error) {
            console.log('ggwp PlusBlock error', error);
        }
    }, [updatePlus, props.variables]);

    return (
        <div
            style={{
                color: 'blue',
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >

            {loading ? 'Loading' : 'Plus'}
        </div>
    );
}
