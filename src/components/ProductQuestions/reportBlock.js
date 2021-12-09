import React, { useCallback } from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';

import Image from '../../venia/components/Image';
import helperReport from '../../assets/inappr.png';
import defaultClasses from './productQuestions.css';
import { useMutation } from '@apollo/client';

export default function ReportBlock(props) {
    const [updateReport, { loading }] = useMutation(props.mutation, {
        fetchPolicy: 'no-cache'
    });

    const classes = useStyle(defaultClasses);

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
        <div className={classes.helperContainer} onClick={handleClick}>
            {loading ?
                <Image src={helperReport} /> : <Image src={helperReport} />
            }
        </div>
    );
}
