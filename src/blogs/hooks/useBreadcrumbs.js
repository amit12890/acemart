import { useMemo } from 'react';
import { useQuery } from '@apollo/client';

// Just encase the data is unsorted, lets sort it.
const sortCrumbs = (a, b) => a.category_level > b.category_level;

// Generates the path for the category.
const getPath = (path) => {
    if (path) {
        return `/${path}`;
    }

    // If there is no path this is just a dead link.
    return '#';
};

/**
 * Returns props necessary to render a Breadcrumbs component.
 *
 * @param {object} props.query - the breadcrumb query
 * @param {string} props.id - the id of the category for which to generate breadcrumbs
 * @return {{
 *   currentCategory: string,
 *   currentCategoryPath: string,
 *   isLoading: boolean,
 *   normalizedData: array
 * }}
 */
export const useBreadcrumbs = props => {
    const { id, query } = props;

    const { data, loading, error } = useQuery(query, {
        variables: { categoryId: id },
        skip: !id
    });

    // When we have breadcrumb data sort and normalize it for easy rendering.
    const normalizedData = useMemo(() => {
        if (!loading && data) {
            const breadcrumbData = data.blogCategory.breadcrumbs;

            return (
                breadcrumbData &&
                breadcrumbData
                    .map(category => ({
                        text: category.category_name,
                        path: getPath(category.category_url_path)
                    }))
                    .sort(sortCrumbs)
            );
        }
    }, [data, loading]);

    return {
        currentCategory: (data && data.blogCategory.title) || '',
        currentCategoryPath:
            data && `/${data.blogCategory.category_url_path}` || '#',
        isLoading: loading,
        hasError: !!error,
        normalizedData: normalizedData || []
    };
};
