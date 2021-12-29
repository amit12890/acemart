import { useEffect, useMemo } from 'react';
import { useFieldState } from 'informed';
import debounce from 'lodash.debounce';

import { useApiData } from '../../../../data.utils';
import {
    apiGetAutocompleteSearchResult,
    apiGetSearchSuggestions
} from '../../../../url.utils';
import { size, get } from 'lodash';

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
    const { valid, visible } = props;

    // Get the search term from the field.
    const { value } = useFieldState('search_query');

    const { callApi: callSuggestionApi, ...suggestionResult } = useApiData({
        isLazy: true, headers: {},
    });
    const { callApi: callproductSearchApi, ...productResult } = useApiData({
        isLazy: true, headers: {},
    });
    // Create a debounced function so we only search some delay after the last
    // keypress.
    const debouncedRunQuery = useMemo(
        () =>
            debounce(inputText => {
                callSuggestionApi(apiGetSearchSuggestions(inputText));
                callproductSearchApi(apiGetAutocompleteSearchResult(inputText));
            }, 1000),
        []
    );

    // run the query once on mount, and again whenever state changes
    useEffect(() => {
        if (valid && visible) {
            debouncedRunQuery(value);
        }
    }, [debouncedRunQuery, valid, value, visible]);

    let messageType = '';

    const suggestionLoading = suggestionResult.loading;
    const productLoading = productResult.loading;
    const isDataLoading = suggestionLoading || productLoading;

    const suggestions = suggestionResult.response;
    const products = productResult.response;
    const previousSearch = get(suggestions, 'query', '');

    const isSearchUpdated = previousSearch && previousSearch !== value;

    const hasResult = size(suggestions) || size(products);
    const displayResult =
        !!(valid && hasResult) && !isDataLoading && !isSearchUpdated;

    const isLoading = valid && !displayResult;

    return {
        suggestionLoading,
        productLoading,
        suggestions,
        products,
        messageType,
        value,
        displayResult,
        isLoading
    };
};
