import React from 'react';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import filterOperations from './search.gql';

import PostList from '../PostList';
import { useBlogPagination } from '../../hooks/useBlogPagination';
import { useBlogConfig } from '../../hooks/useBlogConfig';

const Search = (props) => {
    const { id, type } = props;
    const defaultObject = {
        robots: ''
    }

    const { queries } = filterOperations;
    const { getSearchResultQuery } = queries;

    const { pageSize, searchConfig } = useBlogConfig();
    const { robots } = searchConfig || defaultObject;

    const pageControl = useBlogPagination(getSearchResultQuery, {searchQuery: id, pageSize, skip: !id || !pageSize});
    const { totalPages, setPage, currentPage, blogData } = pageControl;
    const { data, error, loading, variables } = blogData;

    if (loading && !data) return fullPageLoadingIndicator;
    if (error) return <div>Data Fetch Error</div>;

    const {blogPosts: {items: posts}} = data || {blogPosts: {items: []}};

    if (!variables) {
        return null;
    }

    const blogPageTitle = {
        title: `Search "${variables.searchQuery}"`,
        content: null
    }

    return (
        <PostList
            posts={posts}
            totalPages={totalPages}
            currentPage={currentPage}
            setPage={setPage}
            breadcrumb={variables.searchQuery}
            blogPageTitle={blogPageTitle}
            type={type}
            title={`Search "${variables.searchQuery}" ${currentPage > 1 ? '- Page ' + currentPage : ''}`}
            metaTitle={`Search "${variables.searchQuery}"`}
            robots={robots}
        />
    )
}

export default Search;
