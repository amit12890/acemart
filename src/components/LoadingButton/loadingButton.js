import React from 'react';

import Button from '@magento/venia-ui/lib/components/Button';
import defaultClasses from './loadingButton.css';
import { useStyle } from '@magento/venia-ui/lib/classify';

const LoadingButton = () => {
    const classes = useStyle(defaultClasses);

    return (
        <Button>
            <span className={classes.loaderIcon} />
            <span className={classes.loaderLabel}>Loading</span>
        </Button>
    )
}

export default LoadingButton;