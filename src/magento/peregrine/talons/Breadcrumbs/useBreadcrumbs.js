import { useMemo } from 'react';
import { useQuery } from '@apollo/client';

import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';

import DEFAULT_OPERATIONS from './breadcrumbs.gql';
const DELIMITER = '/';

// Just incase the data is unsorted, lets sort it.
const sortCrumbs = (a, b) => a.category_level > b.category_level;

// Generates the path for the category.
const getPath = (key, path, suffix) => {
    if (path) {
        return DELIMITER + path + DELIMITER + key + suffix;
    } else {
        return DELIMITER + key + suffix;
    }
};

/**
 * Returns props necessary to render a Breadcrumbs component.
 *
 * @param {object} props
 * @param {object} props.query - the breadcrumb query
 * @param {string} props.categoryId - the id of the category for which to generate breadcrumbs
 * @return {{
 *   currentCategory: string,
 *   currentCategoryPath: string,
 *   isLoading: boolean,
 *   normalizedData: array
 * }}
 */
export const useBreadcrumbs = props => {
    const { categoryId } = props;

    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const { getBreadcrumbsQuery } = operations;

    const { data, loading, error } = useQuery(getBreadcrumbsQuery, {
        variables: { category_id: categoryId },
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    const categoryUrlSuffix = (data && data.category.url_suffix) || '';

    // When we have breadcrumb data sort and normalize it for easy rendering.
    const normalizedData = useMemo(() => {
        if (!loading && data) {
            let breadcrumbData = data.category.breadcrumbs;
            if (breadcrumbData) {
                breadcrumbData = breadcrumbData
                    .map(category => {
                        return {
                            category_level: category.category_level,
                            text: category.category_name,
                            path: getPath(
                                category.category_url_key,
                                category.category_url_path,
                                categoryUrlSuffix
                            )
                        };
                    })
                    .sort(sortCrumbs);
            } else {
                breadcrumbData = [];
            }

            // finally add last category into data
            breadcrumbData.push({
                category_level: breadcrumbData.length + 2,
                text: data.category.name,
                path: getPath(
                    data.category.url_key,
                    data.category.url_path,
                    categoryUrlSuffix
                )
            });

            return breadcrumbData;
        }
    }, [categoryUrlSuffix, data, loading]);

    return {
        currentCategory: (data && data.category.name) || '',
        currentCategoryPath:
            (data && `${data.category.url_path}${categoryUrlSuffix}`) || '#',
        isLoading: loading,
        hasError: !!error,
        normalizedData: normalizedData || []
    };
};
