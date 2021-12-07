import React, { useCallback } from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import Image from '../../venia/components/Image';
import helperBad from '../../assets/bad.png';
import defaultClasses from './productQuestions.css';
import { useMutation } from '@apollo/client';

export default function MinusBlock(props) {
    const [updateMinus, { loading }] = useMutation(props.mutation, {
        fetchPolicy: 'no-cache'
    });

    const classes = useStyle(defaultClasses);

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
        <div className={classes.helperContainer} onClick={handleClick}>
            <div className={classes.countWrapper}>
                {props.count || 0}
                {loading ? ' Loading' : ' Minus'}
            </div>
            <Image src={helperBad} />
        </div>
    );
}
