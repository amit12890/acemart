import React, { useCallback } from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import Image from '../../venia/components/Image';
import helperBad from '../../assets/bad.png';
import defaultClasses from './productQuestions.css';
import { useMutation } from '@apollo/client';
import { get } from 'lodash-es';
import { loginPage } from '../../url.utils';


export default function MinusBlock({ queryType, mutation, variables, count, onSuccess, history, isSignedIn }) {
    const [updateMinus, { loading }] = useMutation(mutation, {
        fetchPolicy: 'no-cache'
    });

    const classes = useStyle(defaultClasses);

    const handleClick = useCallback(async () => {
        if (!isSignedIn) {
            history.push(loginPage())
        }
        try {
            const { data } = await updateMinus({
                variables: variables
            });
            if (get(data, `${queryType}.success`, false)) {
                onSuccess(get(data, `${queryType}.count`, 0))
            }
        } catch (error) {
            // console.log('Error during down vote', error);
        }
    }, [updateMinus, variables, isSignedIn, history]);

    return (
        <div className={classes.helperContainer} onClick={handleClick}>
            <div className={classes.countWrapper}>
                {count || 0}
            </div>
            {loading ?
                <Image src={helperBad} /> : <Image src={helperBad} />
            }
        </div>
    );
}
