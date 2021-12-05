import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';

export default function ReportBlock(props) {
    const [updateReport, { loading }] = useMutation(props.mutation, {
        fetchPolicy: 'no-cache'
    });

    const handleClick = useCallback(async () => {
        try {
            const { data } = await updateReport({
                variables: props.variables
            });
            console.log('ggwp data', data);
        } catch (error) {
            console.log('ggwp ReportBlock error', error);
        }
    }, [updateReport, props.variables]);

    return (
        <div
            style={{
                color: 'blue',
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >
            {loading ? 'Loading' : 'Report'}
        </div>
    );
}
