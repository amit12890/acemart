import React from 'react';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import filterOperations from './tag.gql';

import PostList from '../PostList';
import { useBlogPagination } from '../../hooks/useBlogPagination';
import { useBlogConfig } from '../../hooks/useBlogConfig';

const Tag = (props) => {
    const { id: tagId, type } = props;

    const defaultObject = {
        robots: ''
    }

    const { queries } = filterOperations;
    const { getTagFilterQuery } = queries;

    const { pageSize, tagConfig } = useBlogConfig();
    const { robots } = tagConfig || defaultObject;

    const pageControl = useBlogPagination(getTagFilterQuery, {tagId, pageSize, skip: !tagId || !pageSize});
    const { totalPages, setPage, currentPage, blogData } = pageControl;
    const { data, error, loading } = blogData;

    if (loading && !data) return fullPageLoadingIndicator;
    if (error) return <div>Data Fetch Error</div>;

    const {blogPosts: {items: posts}} = data || {blogPosts: {items: []}};

    const {blogTag: {title: tag, content, meta_title, meta_description, tag_url}} = data || {blogTag: {}};

    const blogPageTitle = {
        title: tag,
        content: content || null
    }

    return (
        <PostList
            posts={posts}
            totalPages={totalPages}
            currentPage={currentPage}
            setPage={setPage}
            breadcrumb={tag}
            blogPageTitle={blogPageTitle}
            id={tagId}
            type={type}
            title={`${tag} ${currentPage > 1 ? '- Page ' + currentPage : ''}`}
            metaTitle={meta_title}
            metaDescription={meta_description}
            robots={robots}
            canonicalUrl={tag_url}
        />
    )
}

export default Tag;
