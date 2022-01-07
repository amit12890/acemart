import React from 'react';

import Button from '@magento/venia-ui/lib/components/Button';
import defaultClasses from './loadingButton.css';
import { useStyle } from '@magento/venia-ui/lib/classify';

const LoadingButton = (props) => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <Button className={[classes.root, classes.wrapper].join(" ")}>
            <span className={classes.loaderIcon} />
            <span className={classes.loaderLabel}>Loading</span>
        </Button>
    )
}

LoadingButton.defaultProps = {
    classes: {
        wrapper: {}
    }
}

export default LoadingButton;