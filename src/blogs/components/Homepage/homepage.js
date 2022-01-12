import React from 'react';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import postsOperations from './homepage.gql';

import PostList from '../PostList';
import { useBlogPagination } from '../../hooks/useBlogPagination';
import { useBlogConfig } from '../../hooks/useBlogConfig';
import { usePermalinkSettings } from '../../hooks/usePermalinkSettings';

const Homepage = (props) => {
    const { type } = props;

    const { queries } = postsOperations;
    const { getPostsQuery } = queries;

    const defaultObject = {
        title: '',
        sortBy: 1,
        metaTitle: '',
        metaDescription: '',
        metaKeywords: ''
    }

    const { pageSize, blogIndexPage } = useBlogConfig();
    const { blogRoute } = usePermalinkSettings();

    const { title, sortBy, metaTitle, metaKeywords, metaDescription } = blogIndexPage || defaultObject;

    let sortField;
    let sort;
    switch (sortBy) {
        case '1':
            sortField = 'position';
            sort = 'ASC';
            break;
        case '2':
            sortField = 'title';
            sort = 'ASC';
            break;
        default:
            sortField = 'publish_time';
            sort = 'DESC';
    }

    const pageControl = useBlogPagination(getPostsQuery, {
        pageSize,
        sortField,
        sort,
        skip: !pageSize
    });
    const { totalPages, setPage, currentPage, blogData } = pageControl;
    const { data, error, loading } = blogData;

    if (loading && !data) return fullPageLoadingIndicator;
    if (error) return <div>Data Fetch Error</div>;

    const {blogPosts: {items: posts}} = data || {blogPosts: {items: []}};

    return (
        <PostList
            posts={posts}
            totalPages={totalPages}
            setPage={setPage}
            currentPage={currentPage}
            type={type}
            title={`${title} ${currentPage > 1 ? '- Page ' + currentPage : ''}`}
            metaTitle={metaTitle}
            metaKeywords={metaKeywords}
            metaDescription={metaDescription}
            canonicalUrl={window.location.origin + blogRoute}
        />
    )
}

export default Homepage;
