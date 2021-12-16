import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { get, size } from 'lodash-es';

import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';

// shape : { direction, field, label }
export const getSearchSortField = sort =>
    `sort.${sort.field}=${sort.direction}`;

const getQueryFromState = (search, fieldName, value) => {
    // preserve all existing params
    const nextParams = new URLSearchParams(search);
    // delete all previous sort
    nextParams.delete(fieldName);
    // add new sort
    nextParams.append(fieldName, value);
    return nextParams.toString();
};
export const useSearchPage = (props = {}) => {
    // get the URL query parameters.
    const location = useLocation();
    const { search } = location;
    console.log('test : search', search);
    const inputText = getSearchParam('query', location);

    const products = get(props, 'results', []);
    const pagination = get(props, 'pagination', {});
    const filters = get(props, 'facets', []);
    const sortProps = get(props, 'sorting.options', []);
    const breadcrumbs = get(props, 'breadcrumbs', []);
    const filterSummary = get(props, 'filterSummary', []);

    const setSort = useCallback(
        sort => {
            const nextParams = getQueryFromState(
                search,
                `sort.${sort.field}`,
                sort.direction
            );
            console.log('test : nextParams', nextParams);
        },
        [search, sortProps]
    );

    const setPerPage = useCallback(
        page => {
            const nextParams = getQueryFromState(
                search,
                `resultsPerPage`,
                page
            );
            console.log('test : nextParams', nextParams);
        },
        [search, pagination]
    );

    const setPage = useCallback((page, replace = false) => {
        const nextParams = getQueryFromState(
            search,
            `page`,
            page
        );
        console.log('test : nextParams', nextParams);
    }, [search]);

    return {
        products,
        searchTerm: inputText,
        pagination,
        sortProps,
        filters,
        breadcrumbs,
        filterSummary,
        setSort,
        setPerPage,
        setPage
    };
};
