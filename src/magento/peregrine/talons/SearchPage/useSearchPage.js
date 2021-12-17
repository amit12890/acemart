import { useCallback, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { get } from 'lodash-es';

import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';
import { useApiData } from '../../../../data.utils';
import {
    apiGetSearchResult,
} from '../../../../url.utils';
// shape : { direction, field, label }
export const getSearchSortField = sort =>
    `sort.${sort.field}=${sort.direction}`;

/**
 * update query params in url
 * same param with different value can allow single or multi
 */
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
    const history = useHistory();
    // get the URL query parameters.
    const location = useLocation();
    const { pathname, search } = location;
    const inputText = getSearchParam('query', location);

    const { callApi: callSearchApi, ...searchResult } = useApiData({
        isLazy: true
    });

    const products = get(props, 'results', []);
    const pagination = get(props, 'pagination', {});
    const filters = get(props, 'facets', []);
    const sortProps = get(props, 'sorting.options', []);
    const breadcrumbs = get(props, 'breadcrumbs', []);
    const filterSummary = get(props, 'filterSummary', []);

    useEffect(() => {
        // console.log('test : search', search, pathname, inputText);
    }, [search, pathname, inputText]);

    const setSort = useCallback(
        sort => {
            const nextParams = new URLSearchParams(search);
            for (let index = 0; index < sortProps.length; index++) {
                const item = sortProps[index];
                // delete all previous sort
                nextParams.delete(`sort.${item.field}`);
            }
            nextParams.append(`sort.${sort.field}`, sort.direction);
            // write filter state to history
            history.push({ pathname, search: nextParams.toString() });
        },
        [search, sortProps, history, pathname]
    );

    const setPerPage = useCallback(
        page => {
            const nextParams = getQueryFromState(
                search,
                `resultsPerPage`,
                page
            );
            // write filter state to history
            history.push({ pathname, search: nextParams });
        },
        [search, pagination, history, pathname]
    );

    const setPage = useCallback(
        (page, replace = false) => {
            const nextParams = getQueryFromState(search, `page`, page);
            // write filter state to history
            history.push({ pathname, search: nextParams });
        },
        [search, history, pathname]
    );

    const setFilter = useCallback(
        (field, selectedFilter) => () => {
            const nextParams = new URLSearchParams(search);
            const keyName = `filter.${field}`;
            const newValue = selectedFilter.value;
            if (field === 'stickers' || field === 'ss_hierarchy') {
                if (nextParams.get(keyName) !== newValue) {
                    nextParams.delete(keyName);
                    nextParams.append(keyName, newValue);
                } else {
                    nextParams.delete(keyName);
                }
            } else {
                if (nextParams.has(keyName)) {
                    if (nextParams.get(keyName) === newValue) {
                        nextParams.delete(keyName);
                    } else {
                        nextParams.append(keyName, newValue);
                    }
                } else {
                    nextParams.append(keyName, newValue);
                }
            }
            history.push({ pathname, search: nextParams.toString() });
        },
        [search, pathname, history]
    );

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
        setPage,
        setFilter
    };
};
