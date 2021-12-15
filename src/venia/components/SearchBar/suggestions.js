import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';

import { useStyle } from '@magento/venia-ui/lib/classify';
import SuggestedProducts from './suggestedProducts';
import defaultClasses from './suggestions.css';

import SuggestedProductNames from './suggestedProductNames';

const Suggestions = props => {
    const {
        suggestionLoading,
        productLoading,
        suggestions,
        products,
        setVisible,
        visible,
        displayResult
    } = props;

    const classes = useStyle(defaultClasses, props.classes);

    const shouldRender = visible && displayResult;
    // render null without data
    if (!shouldRender) {
        return null;
    }

    return (
        <div style={{ display: 'flex' }}>
            <SuggestedProductNames
                suggestions={suggestions}
                setVisible={setVisible}
            />
            <SuggestedProducts products={products.results || []} />
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
