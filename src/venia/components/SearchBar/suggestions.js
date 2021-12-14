import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';

import { useStyle } from '@magento/venia-ui/lib/classify';
import SuggestedProducts from './suggestedProducts';
import defaultClasses from './suggestions.css';

import SuggestedProductNames from "./suggestedProductNames"
import { size } from 'lodash-es';

import S_DATA from "./suggest.json"
import SP_DATA from "./suggestProduct.json"

const Suggestions = props => {
    const {
        products,
        suggestions,
        setVisible,
        visible
    } = props;
    const { results } = SP_DATA;

    const classes = useStyle(defaultClasses, props.classes);

    const shouldRender = visible && size(S_DATA)
    // render null without data
    if (!shouldRender) {
        return null;
    }

    return (
        <div style={{display: "flex"}}>
            <SuggestedProductNames
                suggestions={S_DATA}
                setVisible={setVisible}
            />
            <SuggestedProducts products={results} />
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
