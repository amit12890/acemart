import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { size } from 'lodash';
import { useFieldApi } from 'informed';

import { searchPage } from '../../../url.utils';

import { useStyle } from '../../classify';
import defaultClasses from './suggestedProductNames.css';

const suggestedProductNames = props => {
    const { suggestions, setVisible } = props;
    const classes = useStyle(defaultClasses, props.classes);
    const history = useHistory();
    const fieldApi = useFieldApi('search_query');

    const handleClick = useCallback(
        text => () => {
            history.push(`${searchPage()}?q=${text}`);
            fieldApi.setValue(text);
            setVisible(false);
        },
        [history, setVisible]
    );

    return (
        <div className={classes.suggestProductsWrapper}>
            <ul className={classes.listItems}>
                {size(suggestions.alternatives)
                    ? suggestions.alternatives.map((item, index) => {
                          return (
                              <li
                                  key={index}
                                  className={classes.listItem}
                                  onClick={handleClick(item.text)}
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
