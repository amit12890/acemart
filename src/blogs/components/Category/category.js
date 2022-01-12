import React from 'react';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import filterOperations from './category.gql';

import PostList from '../PostList';
import { useBlogPagination } from '../../hooks/useBlogPagination';
import { useBlogConfig } from '../../hooks/useBlogConfig';

const Category = (props) => {
    const { id: categoryId, type } = props;

    const { queries } = filterOperations;
    const { getCategoryFilterQuery } = queries;

    const { pageSize } = useBlogConfig();

    const pageControl = useBlogPagination(getCategoryFilterQuery, {categoryId, pageSize, skip: !categoryId || !pageSize});
    const { totalPages, setPage, currentPage, blogData } = pageControl;
    const { data, error, loading } = blogData;

    if (loading && !data) return fullPageLoadingIndicator;
    if (error) return <div>Data Fetch Error</div>;

    const {blogPosts: {items: posts}} = data || {blogPosts: {items: []}};

    const {blogCategory: {title: category, content, meta_title, meta_description, canonical_url}} = data || {blogCategory: {}};

    const blogPageTitle = {
        title: category,
        content: content || null
    }

    return (
        <PostList
            posts={posts}
            totalPages={totalPages}
            currentPage={currentPage}
            setPage={setPage}
            blogPageTitle={blogPageTitle}
            id={categoryId}
            type={type}
            title={`${category} ${currentPage > 1 ? '- Page ' + currentPage : ''}`}
            metaTitle={meta_title}
            metaDescription={meta_description}
            canonicalUrl={canonical_url}
        />
    )
}

export default Category;
