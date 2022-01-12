import React, { Fragment, useMemo } from 'react';
import { string } from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import resourceUrl from '@magento/venia-ui/lib/util/makeUrl';

import { useBreadcrumbs } from '../../hooks/useBreadcrumbs';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@magento/venia-ui/lib/components/Breadcrumbs/breadcrumbs.css';

import breadcrumbsOperations from './breadcrumbs.gql';

import { usePermalinkSettings } from '../../hooks/usePermalinkSettings';

/**
 * Breadcrumbs! Generates a sorted display of category links.
 *
 * @param {String} props.categoryId the id of the category for which to generate breadcrumbs
 * @param {String} props.currentPost the name of the post we're currently on, if any.
 */
const Breadcrumbs = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes);

    const { id, currentPost, type, breadcrumb } = props;

    const { pathname } = useLocation();
    const { blogRoute } = usePermalinkSettings();

    const { queries } = breadcrumbsOperations;
    const { getBreadcrumbDataQuery } = queries;

    const talonProps = useBreadcrumbs({
        id: type === 'MF_BLOG_CATEGORY' || type === 'MF_BLOG_POST' ? id : null,
        query: getBreadcrumbDataQuery
    });

    const {
        currentCategory,
        currentCategoryPath,
        hasError,
        isLoading,
        normalizedData
    } = talonProps;

    // For all links generate a fragment like "/ Text"
    const links = useMemo(() => {
        return normalizedData.map(({ text, path }) => {
            if (text !== currentCategory) {
                return (
                    <Fragment key={text}>
                        <span className={classes.divider}>/</span>
                        <Link className={classes.link} to={resourceUrl(path)}>
                            {text}
                        </Link>
                    </Fragment>
                );
            }

            return null;
        });
    }, [classes.divider, classes.link, normalizedData, currentCategory]);

    // Don't display anything but the empty, static height div when loading or
    // if there was an error.
    if (isLoading || hasError || !blogRoute) {
        return <div className={classes.root} />;
    }

    // If we have a "currentPost" it means we're on a PDP so we want the last
    // category text to be a link. If we don't have a "currentPost" we're on
    // a category page so it should be regular text.
    const currentCategoryLink = currentPost ? (
        <Link className={classes.link} to={resourceUrl(currentCategoryPath)}>
            {currentCategory}
        </Link>
    ) : (
        <span className={classes.currentCategory}>{currentCategory}</span>
    );

    const currentPostNode = currentPost ? (
        <Fragment>
            {currentCategory && <span className={classes.divider}>/</span>}
            <span className={classes.text}>{currentPost}</span>
        </Fragment>
    ) : null;

    const currentBreadcrumb = () => {
        switch (type) {
            case 'MF_BLOG_POST':
            case 'MF_BLOG_CATEGORY':
                return (
                    <Fragment>
                        {currentCategory && currentCategoryLink}
                        {currentPostNode}
                    </Fragment>
                )
            case 'MF_BLOG_TAG':
            case 'MF_BLOG_AUTHOR':
                return <span className={classes.currentCategory}>{breadcrumb}</span>
            case 'MF_BLOG_ARCHIVE':
                return (
                    <span className={classes.currentCategory}>
                        {breadcrumb}
                    </span>
                )
            case 'MF_BLOG_SEARCH':
                return <span className={classes.currentCategory}>{`Search "${breadcrumb}"`}</span>
            default:
        }
    }

    return (
        <div className={classes.breadcrumbs}>
            <Link className={classes.link} to="/">
                {'Home'}
            </Link>
            <span className={classes.divider}>/</span>
            {
                pathname === blogRoute ?
                    <span className={classes.currentCategory}>Blog</span> :
                    <Fragment>
                        <Link className={classes.link} to={blogRoute}>{'Blog'}</Link>
                        {links}
                        <Fragment>
                            <span className={classes.divider}>/</span>
                            {currentBreadcrumb()}
                        </Fragment>
                    </Fragment>
            }
        </div>
    );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
    categoryId: string,
    currentPost: string
};
