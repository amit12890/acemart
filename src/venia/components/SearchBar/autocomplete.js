import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { get } from "lodash"

import { useAutocomplete } from '../../../magento/peregrine/talons/SearchBar';
import defaultClasses from './autocomplete.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
import Suggestions from './suggestions';

const Autocomplete = props => {
    const { setVisible, valid, visible } = props;
    const talonProps = useAutocomplete({
        valid,
        visible
    });
    const {
        suggestionLoading,
        productLoading,
        suggestions,
        products,
        // messageType,
        // value,
        displayResult
    } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);

    const shouldVisible =
        displayResult &&
        visible &&
        (!!get(products, 'results.length') ||
            !!get(suggestions, 'alternatives.length'));
    const rootClassName = shouldVisible
        ? classes.root_visible
        : classes.root_hidden;

    return (
        <div className={rootClassName}>
            <div className={classes.suggestions}>
                <Suggestions
                    suggestionLoading={suggestionLoading}
                    productLoading={productLoading}
                    suggestions={suggestions}
                    products={products}
                    setVisible={setVisible}
                    visible={visible}
                    displayResult={displayResult}
                />
            </div>
        </div>
    );
};

export default Autocomplete;

Autocomplete.propTypes = {
    classes: shape({
        message: string,
        root_hidden: string,
        root_visible: string,
        suggestions: string
    }),
    setVisible: func,
    visible: bool
};
