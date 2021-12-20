import React from 'react';
import { gql } from '@apollo/client';
import { bool, func, shape, string } from 'prop-types';
import { useIntl } from 'react-intl';

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
        messageType,
        value,
        displayResult
    } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);
    const rootClassName = visible ? classes.root_visible : classes.root_hidden;

    const { formatMessage } = useIntl();
    const MESSAGES = new Map()
        .set(
            'PROMPT',
            formatMessage({
                id: 'autocomplete.prompt',
                defaultMessage: 'Search for a product'
            })
        )
        .set(
            'SUGGESTION_ERROR',
            formatMessage({
                id: 'autocomplete.suggestion_error',
                defaultMessage: 'An error occurred while fetching suggestions.'
            })
        )
        .set(
            'PRODUCT_ERROR',
            formatMessage({
                id: 'autocomplete.product_error',
                defaultMessage: 'An error occurred while fetching products.'
            })
        )
        .set(
            'LOADING',
            formatMessage({
                id: 'autocomplete.loading',
                defaultMessage: 'Fetching results...'
            })
        )
        .set(
            'INVALID_CHARACTER_LENGTH',
            formatMessage({
                id: 'autocomplete.invalidCharacterLength',
                defaultMessage: 'Search term must be at least three characters'
            })
        );

    const message = MESSAGES.get(messageType);

    return (
        <div className={rootClassName}>
            <div className={classes.message}>{message}</div>
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
