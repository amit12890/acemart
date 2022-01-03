import { useEffect, useMemo, useState, useCallback } from 'react';
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
    const [suggestions, setSuggestions] = useState({});
    const [products, setProducts] = useState({});

    const { callApi: callSuggestionApi, ...suggestionResult } = useApiData({
        isLazy: true,
        headers: {}
    });
    const { callApi: callproductSearchApi, ...productResult } = useApiData({
        isLazy: true,
        headers: {}
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

    const suggestionsData = useMemo(() => {
        const previousQuery = get(suggestions, 'query', '');
        // check suggestions are empty and new search token contains previous search token
        const result = get(suggestionResult.response, 'alternatives', []);
        if (!result.length && (value && value.includes(previousQuery))) {
            // return previous search data to show
            return suggestions;
        }
        // set new suggestions data
        setSuggestions(suggestionResult.response);
        return suggestionResult.response;
    }, [suggestionResult.response, value]);

    const productsData = useMemo(() => {
        const previousQuery = get(products, 'breadcrumbs.0.filterValue', '');
        // check product are empty and new search token contains previous search token
        const result = get(productResult.response, 'results', []);
        if (!result.length && (value && value.includes(previousQuery))) {
            // return previous search data to show
            return products;
        }
        // set new product data
        setProducts(productResult.response);
        return productResult.response;
    }, [productResult.response, value]);

    const previousSearch = get(suggestionResult.response, 'query', '');
    const isSearchUpdated = previousSearch && previousSearch !== value;

    const hasResult = size(suggestions) || size(products);
    const displayResult =
        !!(valid && hasResult) && !isDataLoading && !isSearchUpdated;

    const isLoading = valid && isDataLoading;

    return {
        suggestionLoading,
        productLoading,
        suggestions: suggestionsData,
        products: productsData,
        messageType,
        value,
        displayResult,
        isLoading
    };
};
