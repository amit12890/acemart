import React from 'react';

import { useStyle } from '../../classify';
import defaultClasses from './suggestedProductNames.css';

const suggestedProductNames = props => {
    const { suggestions } = props;
    const classes = useStyle(defaultClasses, props.classes);

    return <ul className={classes.root}>
        {suggestions.map((name, index) => {
            return (
                <li key={index}>
                    {name}
                </li>
            )
        })}
    </ul>;
};

export default suggestedProductNames;
