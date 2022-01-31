import React, { useCallback } from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';

import Image from '../../venia/components/Image';
import helperReport from '../../assets/inappr.png';
import defaultClasses from './productQuestions.css';
import { useMutation } from '@apollo/client';
import { loginPage } from '../../url.utils';


export default function ReportBlock(props) {
    const [updateReport, { loading }] = useMutation(props.mutation, {
        fetchPolicy: 'no-cache'
    });

    const classes = useStyle(defaultClasses);

    const handleClick = useCallback(async () => {
        if (!props.isSignedIn) {
            props.history.push(loginPage())
        }
        try {
            const { data } = await updateReport({
                variables: props.variables
            });
        } catch (error) {
            // console.log('ggwp ReportBlock error', error);
        }
    }, [updateReport, props.variables, props.history, props.isSignedIn]);

    return (
        <div className={classes.helperContainer} onClick={handleClick}>
            {loading ?
                <Image src={helperReport} /> : <Image src={helperReport} />
            }
        </div>
    );
}
