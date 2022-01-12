import { useEffect } from 'react';
import { usePagination } from '@magento/peregrine';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';

import { usePermalinkSettings } from './usePermalinkSettings';

export const useBlogPagination = (query, vars = {}) => {
    const { search, pathname } = useLocation();
    const [paginationValues, paginationApi] = usePagination();
    const { currentPage, totalPages } = paginationValues;
    const { setCurrentPage, setTotalPages } = paginationApi;
    const { blogRoute } = usePermalinkSettings();

    const { data, error, loading, variables } = useQuery(query, {
        variables: {
            ...vars,
            ...(vars.date && {date: vars.date + '%'}),
            currentPage
        },
        fetchPolicy: 'cache-and-network',
        skip: vars.skip
    });

    useEffect(() => {
        // Scroll to the top on component load
        window.scrollTo(0, 0);

        const totalPagesFromData = data
            ? data.blogPosts.total_pages
            : null;

        setTotalPages(totalPagesFromData);

        if (!search && totalPagesFromData > 1 && pathname.replace(/\/+$/, '') === blogRoute) setCurrentPage(1)

        return () => {
            setTotalPages(null);
        };
    }, [data, setTotalPages, search, pathname, setCurrentPage, blogRoute]);

    return {
        currentPage,
        setPage: setCurrentPage,
        totalPages,
        blogData: { data, error, loading, variables }
    };
}
