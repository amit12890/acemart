import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { SEARCH_PAGE_PATH } from '../../../url.utils';

import { useStyle } from '../../classify';
import defaultClasses from './suggestedProductNames.css';

const suggestedProductNames = props => {
    const { suggestions, setVisible } = props;
    const classes = useStyle(defaultClasses, props.classes);
    const history = useHistory();

    const handleClick = useCallback(
        text => () => {
            history.push(`${SEARCH_PAGE_PATH}?query=${text}`);
            setVisible(false)
        },
        [history, setVisible]
    );

    return (
        <ul className={classes.root}>
            {suggestions.alternatives.map((item, index) => {
                return (
                    <li
                        key={index}
                        onClick={handleClick(item.text)}
                        style={{
                            cursor: 'pointer'
                        }}
                    >
                        {item.text}
                    </li>
                );
            })}
        </ul>
    );
};

export default suggestedProductNames;
