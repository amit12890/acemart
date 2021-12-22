import React from 'react';
import { gql } from '@apollo/client';
import { bool, func, shape, string } from 'prop-types';
import { useIntl } from 'react-intl';

import { useAutocomplete } from '../../../magento/peregrine/talons/SearchBar';
import defaultClasses from './autocomplete.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
import Suggestions from './suggestions';

const Autocomplete = props => {
    const { setVisible, valid, visible, handleChange } = props;
    const talonProps = useAutocomplete({
        valid,
        visible,
        setVisible
    });
    const {
        suggestionLoading,
        productLoading,
        suggestions,
        products,
        displayResult
    } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);
    const rootClassName = visible ? classes.root_visible : classes.root_hidden;

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
                    handleChange={handleChange}
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
