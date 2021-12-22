import { useEffect, useMemo } from 'react';
import { useFieldState } from 'informed';
import debounce from 'lodash.debounce';

import { useApiData } from '../../../../data.utils';
import {
    apiGetAutocompleteSearchResult,
    apiGetSearchSuggestions
} from '../../../../url.utils';
import { size } from 'lodash';

/**
 * @typedef { import("graphql").DocumentNode } DocumentNode
 */

/**
 * Returns props necessary to render an Autocomplete component.
 * @param {Object} props
 * @param {Boolean} props.valid - whether to run the query
 * @param {Boolean} props.visible - whether to show the element
 */
export const useAutocomplete = props => {
    const { valid, visible, setVisible } = props;

    // Get the search term from the field.
    const { value } = useFieldState('search_query');

    const { callApi: callSuggestionApi, ...suggestionResult } = useApiData({
        isLazy: true,
        onSuccess: () => {
            setVisible(true)
        }
    });
    const { callApi: callproductSearchApi, ...productResult } = useApiData({
        isLazy: true,
        onSuccess: () => {
            setVisible(true)
        }
    });
    // Create a debounced function so we only search some delay after the last
    // keypress.
    const debouncedRunQuery = useMemo(
        () =>
            debounce(inputText => {
                callSuggestionApi(apiGetSearchSuggestions(inputText));
                callproductSearchApi(apiGetAutocompleteSearchResult(inputText));
            }, 500),
        []
    );

    // run the query once on mount, and again whenever state changes
    useEffect(() => {
        if (valid) {
            debouncedRunQuery(value);
        }
    }, [debouncedRunQuery, valid, value, visible]);

    const suggestionLoading = suggestionResult.loading;
    const productLoading = productResult.loading;

    const suggestions = suggestionResult.response;
    const products = productResult.response;

    const hasResult = size(suggestions) || size(products);
    const displayResult = valid && hasResult;

    return {
        suggestionLoading,
        productLoading,
        suggestions,
        products,
        displayResult
    };
};
