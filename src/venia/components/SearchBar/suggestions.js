import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { useSuggestions } from '@magento/peregrine/lib/talons/SearchBar';

import { useStyle } from '../../classify';
import SuggestedCategories from './suggestedCategories';
import SuggestedProducts from './suggestedProducts';
import defaultClasses from './suggestions.css';

import DATA from "./suggest.json"
import SuggestedProductNames from "./suggestedProductNames"

const Suggestions = props => {
    const {
        displayResult,
        filters,
        products,
        searchValue,
        setVisible,
        visible
    } = props;
    const { items } = products;

    const classes = useStyle(defaultClasses, props.classes);

    // render null without data
    // check here data have length
    // if (!shouldRender) {
    //     return null;
    // }

    return (
        <div>
            <SuggestedProductNames
                suggestions={DATA}
                setVisible={setVisible}
            />
            {/* <SuggestedProducts onNavigate={onNavigate} products={items} /> */}
        </div>
    );
};

export default Suggestions;

Suggestions.propTypes = {
    classes: shape({
        heading: string
    }),
    products: shape({
        filters: arrayOf(
            shape({
                filter_items: arrayOf(shape({})),
                name: string.isRequired
            }).isRequired
        ),
        items: arrayOf(shape({}))
    }),
    searchValue: string,
    setVisible: func,
    visible: bool
};
