import React, { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_BLOG_PERMALINK_CONFIG_QUERY = gql`
    query getBlogPermalinkConfig {
        storeConfig {
            id
            mfblog_advanced_permalink_enabled
            mfblog_advanced_permalink_redirect_to_no_slash
            mfblog_advanced_permalink_blog_route
            mfblog_advanced_permalink_archive_path_schema
            mfblog_advanced_permalink_search_path_schema
            mfblog_permalink_route
            mfblog_permalink_redirect_to_no_slash
            mfblog_permalink_archive_route
            mfblog_permalink_search_route
        }
    }
`;

export const usePermalinkSettings = () => {
    const { pathname } = useLocation();
    const [redirectTo, setRedirectTo] = useState(false);

    const { data, error, loading } = useQuery(GET_BLOG_PERMALINK_CONFIG_QUERY, {
        fetchPolicy: 'network-only'
    });

    useEffect(() => {
        if (!data) return;

        if (data.storeConfig.mfblog_advanced_permalink_enabled) {
            if (pathname !== '/' && pathname.endsWith('/') && data.storeConfig.mfblog_advanced_permalink_redirect_to_no_slash) {
                setRedirectTo(true)
            }
        } else if (pathname !== '/' && pathname.endsWith('/') && data.storeConfig.mfblog_permalink_redirect_to_no_slash) {
            setRedirectTo(true)
        }

        return () => {
            setRedirectTo(false)
        }
    }, [pathname, data])

    if (!loading) {
        const { storeConfig } = data;
        const {
            mfblog_advanced_permalink_enabled,
            mfblog_advanced_permalink_redirect_to_no_slash,
            mfblog_advanced_permalink_blog_route,
            mfblog_advanced_permalink_archive_path_schema,
            mfblog_advanced_permalink_search_path_schema,
            mfblog_permalink_route,
            mfblog_permalink_redirect_to_no_slash,
            mfblog_permalink_archive_route,
            mfblog_permalink_search_route
        } = storeConfig;

        const permalink = {
            advancedPermalinkIsEnabled: mfblog_advanced_permalink_enabled,
            advancedPermalinkRedirectToNoSlash: mfblog_advanced_permalink_redirect_to_no_slash,
            advancedPermalinkBlogRoute: mfblog_advanced_permalink_blog_route,
            archivePathSchema: mfblog_advanced_permalink_archive_path_schema,
            searchPathSchema: mfblog_advanced_permalink_search_path_schema,
            route: mfblog_permalink_route,
            redirectToNoSlash: mfblog_permalink_redirect_to_no_slash,
            archiveRoute: mfblog_permalink_archive_route,
            searchRoute: mfblog_permalink_search_route
        }

        const {
            advancedPermalinkIsEnabled,
            advancedPermalinkBlogRoute,
            archivePathSchema,
            searchPathSchema,
            route,
            archiveRoute,
            searchRoute
        } = permalink;

        const blogRouteHandler = () => {
            if (advancedPermalinkIsEnabled) {
                return '/' + advancedPermalinkBlogRoute.replace(/\/+$/, '');
            } else {
                return '/' + route.replace(/\/+$/, '');
            }
        }

        const archiveRouteHandler = (id) => {
            if (advancedPermalinkIsEnabled) {
                return archivePathSchema
                    .replace('{{blog_route}}', blogRouteHandler())
                    .replace('{{url_key}}', id)
            } else if (archiveRoute) {
                return blogRouteHandler() + '/' + archiveRoute + '/' + id;
            } else {
                return blogRouteHandler();
            }
        }

        const searchRouteHandler = (id) => {
            if (advancedPermalinkIsEnabled) {
                return searchPathSchema
                    .replace('{{blog_route}}', blogRouteHandler())
                    .replace('{{url_key}}', id)
            } else if (searchRoute) {
                return blogRouteHandler() + '/' + searchRoute + '/' + id;
            } else {
                return blogRouteHandler();
            }
        }

        const redirectHandler = () => {
            if (redirectTo) {
                return <Redirect to={blogRouteHandler()} />
            }

            return null;
        }

        return {
            blogRoute: blogRouteHandler(),
            redirectComponent: redirectHandler(),
            blogArchiveRoute: archiveRouteHandler,
            blogSearchRoute: searchRouteHandler
        }
    }

    return {error}
}
