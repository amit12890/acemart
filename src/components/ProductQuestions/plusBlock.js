import React, { useCallback } from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import Image from '../../venia/components/Image';
import helperGood from '../../assets/good.png';
import defaultClasses from './productQuestions.css';


import { useMutation } from '@apollo/client';

export default function PlusBlock(props) {
    const [updatePlus, { loading }] = useMutation(props.mutation, {
        fetchPolicy: 'no-cache'
    });

    const classes = useStyle(defaultClasses);

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
        <div className={classes.helperContainer} onClick={handleClick}>
            <div className={classes.countWrapper}>
                {props.count || 0}
                {loading ? ' Loading' : ' Plus'}
            </div>
            <Image src={helperGood} />
        </div>
    );
}
