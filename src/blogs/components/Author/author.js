import React from 'react';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import filterOperations from './author.gql';

import PostList from '../PostList';
import { useBlogPagination } from '../../hooks/useBlogPagination';
import { useBlogConfig } from '../../hooks/useBlogConfig';

const Author = (props) => {
    const { id: authorId, type } = props;

    const defaultObject = {
        robots: ''
    }

    const { queries } = filterOperations;
    const { getAuthorFilterQuery } = queries;

    const { pageSize, authorConfig } = useBlogConfig();
    const { robots } = authorConfig || defaultObject;

    const pageControl = useBlogPagination(getAuthorFilterQuery, {authorId, pageSize, skip: !authorId || !pageSize});
    const { totalPages, setPage, currentPage, blogData } = pageControl;
    const { data, error, loading } = blogData;

    if (loading && !data) return fullPageLoadingIndicator;
    if (error) return <div>Data Fetch Error</div>;

    const {blogPosts: {items: posts}} = data || {blogPosts: {items: []}};

    const {blogAuthor: {name: author, meta_title, meta_description, author_url}} = data || {blogAuthor: {}};

    const blogPageTitle = {
        title: author,
        content: null
    }

    return (
        <PostList
            posts={posts}
            totalPages={totalPages}
            setPage={setPage}
            currentPage={currentPage}
            breadcrumb={author}
            blogPageTitle={blogPageTitle}
            id={authorId}
            type={type}
            title={`${author} ${currentPage > 1 ? '- Page ' + currentPage : ''}`}
            metaTitle={meta_title}
            metaDescription={meta_description}
            robots={robots}
            canonicalUrl={author_url}
        />
    )
}

export default Author;
