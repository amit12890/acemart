import React from 'react';
import moment from 'moment';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import filterOperations from './archive.gql';

import PostList from '../PostList';
import { useBlogPagination } from '../../hooks/useBlogPagination';
import { useBlogConfig } from '../../hooks/useBlogConfig';
import { usePermalinkSettings } from '../../hooks/usePermalinkSettings';

const Archive = (props) => {
    const { id, type } = props;

    const { queries } = filterOperations;
    const { getPostArchive } = queries;

    const { pageSize } = useBlogConfig();
    const { blogArchiveRoute } = usePermalinkSettings();

    const pageControl = useBlogPagination(getPostArchive, {date: id, pageSize, skip: !id || !pageSize});
    const { totalPages, setPage, currentPage, blogData } = pageControl;
    const { data, error, loading } = blogData;

    if (loading && !data) return fullPageLoadingIndicator;
    if (error) return <div>Data Fetch Error</div>;

    const {blogPosts: {items: posts}} = data || {blogPosts: {items: []}};

    const blogPageTitle = {
        title: `Monthly Archives: ${moment(id).format('MMMM YYYY')}`,
        content: null
    }

    return (
        <PostList
            posts={posts}
            totalPages={totalPages}
            currentPage={currentPage}
            setPage={setPage}
            breadcrumb={blogPageTitle.title}
            blogPageTitle={blogPageTitle}
            id={id}
            type={type}
            title={`${blogPageTitle.title} ${currentPage > 1 ? '- Page ' + currentPage : ''}`}
            metaTitle={blogPageTitle.title}
            canonicalUrl={blogArchiveRoute && window.location.origin + blogArchiveRoute(id)}
        />
    )
}

export default Archive;
