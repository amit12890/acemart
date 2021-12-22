import { useCallback, useEffect, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useFieldApi } from 'informed';

import { get, pull, find, split } from 'lodash-es';

import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';
import { useApiData } from '../../../../data.utils';
import { SITE_ID, apiGetSearchResult } from '../../../../url.utils';
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
    const inputText = getSearchParam('q', location);

    const { callApi: callSearchApi, ...searchResult } = useApiData({
        isLazy: true
    });

    const searchError = searchResult.error;
    const searchLoading = searchResult.loading;

    const products = get(searchResult.response, 'results', []);
    const pagination = get(searchResult.response, 'pagination', {});
    const filters = get(searchResult.response, 'facets', []);
    const sortProps = get(searchResult.response, 'sorting.options', []);
    const breadcrumbs = get(searchResult.response, 'breadcrumbs', []);
    const filterSummary = get(searchResult.response, 'filterSummary', []);
    const header = get(
        searchResult.response,
        'merchandising.content.header',
        []
    );
    const footer = get(
        searchResult.response,
        'merchandising.content.footer',
        []
    );

    useEffect(() => {
        const params = new URLSearchParams(search);

        if (!params.has('resultsPerPage')) {
            params.append('resultsPerPage', 12); // default
        }
        params.append('siteId', SITE_ID); // default
        params.append('resultsFormat', 'native'); // default

        const url = apiGetSearchResult(params.toString());
        callSearchApi(url);
    }, [search, pathname]);

    const categoryFiltered = useMemo(() => {
        const hierarchyDelimiter = '>';
        const hierarchy = find(breadcrumbs, ['field', 'ss_hierarchy']);
        const filterList =
            hierarchy && hierarchy.filterValue
                ? split(hierarchy.filterValue, hierarchyDelimiter)
                : [];
        const transformedList = [];
        for (let index = 0; index < filterList.length; index++) {
            const filter = filterList[index];
            if (index === 0) {
                transformedList.push(filter);
            } else {
                transformedList.push(
                    `${
                        transformedList[index - 1]
                    }${hierarchyDelimiter}${filter}`
                );
            }
        }
        return {
            labels: filterList,
            values: transformedList
        };
    }, [breadcrumbs]);

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
        (field, selectedFilter, isFieldActive) => () => {
            const nextParams = new URLSearchParams(search);
            const keyName = `filter.${field}`;
            const newValue = selectedFilter.value;

            if (field === 'stickers' || field === 'ss_hierarchy') {
                // single filter can active
                if (selectedFilter.active) {
                    nextParams.delete(keyName);
                } else {
                    nextParams.set(keyName, newValue);
                }
            } else {
                // multiple filter can active
                if (isFieldActive) {
                    if (selectedFilter.active) {
                        let values = [];
                        for (const [key, value] of nextParams.entries()) {
                            if (key === keyName) values.push(value);
                        }
                        values = pull(values, newValue);
                        // before add, delete all same filters
                        nextParams.delete(keyName);
                        values.forEach(val => {
                            nextParams.append(keyName, val);
                        });
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
        setFilter,
        searchError,
        searchLoading,
        categoryFiltered,
        header,
        footer
    };
};
