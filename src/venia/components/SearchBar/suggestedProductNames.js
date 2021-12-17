import { debounce } from 'lodash-es';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { size } from "lodash"

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
            setVisible(false);
        },
        [history, setVisible]
    );

    const handleMouseEnter = useCallback(
        text => () => {
            console.log('search Hover enter ~ text', text);
        },
        []
    );

    const handleMouseLeave = useCallback(() => {
        console.log('search Hover leave~ text');
    }, []);

    return (
        <div className={classes.suggestProductsWrapper}>
            <ul className={classes.listItems}>
                <li className={classes.listItem}>Product Name Goes Here</li>
                {size(suggestions.alternatives)
                    ? suggestions.alternatives.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={handleClick(item.text)}
                                onMouseEnter={debounce(
                                    handleMouseEnter(item.text),
                                    500
                                )}
                                onMouseLeave={debounce(handleMouseLeave, 500)}
                                style={{
                                    cursor: 'pointer'
                                }}
                            >
                                {item.text}
                            </li>
                        );
                    })
                    : null}
            </ul>
        </div>
    );
};

export default suggestedProductNames;
