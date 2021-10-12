import React from 'react';

import { useStyle } from '../../venia/classify';
import defaultClasses from './landingPage.css';

const LandingPage = (props) => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.wrapper}>
            Landing Page : Under Construction !!!
        </div>
    );
}

export default LandingPage