import React from 'react';

import Button from '@magento/venia-ui/lib/components/Button';
import defaultClasses from './loadingButtonSmall.css';
import { useStyle } from '@magento/venia-ui/lib/classify';

const LoadingButton = () => {
    const classes = useStyle(defaultClasses);

    return (
        <Button className={classes.root}>
            <span className={classes.loaderIcon} />
        </Button>
    )
}

export default LoadingButton;