import React from 'react';

import defaultClasses from './questionAnswerPage.css';
import { useStyle } from '../../venia/classify';

export default () => {
    const classes = useStyle(defaultClasses)

    return(
        <div className={classes.wrapper}>
            <h1>This is Question and answer page</h1>
        </div>
    )
}