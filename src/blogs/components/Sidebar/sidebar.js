import React, { Fragment } from 'react';

import classes from './sidebar.css';

import Tags from './tags';
import Categories from './categories';
import RecentPosts from './recentPosts';
import SearchBar from './searchbar';
import Archive from './archive';
import FeaturedPosts from './featuredPosts';
import PopularPosts from './popularPosts';

const Sidebar = (props) => {
    const { sidebar } = props;

    const {
        search: {searchIsEnabled, searchSortOrder},
        categories: {categoriesIsEnabled, categoriesSortOrder, showPostsCount, categoriesMaxDepth},
        recentPosts: {recentPostsIsEnabled, recentPostsSortOrder, recentPostsPageSize},
        featuredPosts: {featuredPostsIsEnabled, featuredPostsSortOrder, postIds},
        popularPosts: {popularPostsIsEnabled, popularPostsSortOrder, popularPostsPageSize},
        archive: {archiveIsEnabled, formatDate, archiveSortOrder},
        tags: {tagsIsEnabled, tagsSortOrder, tagsCount},
        custom: {customIsEnabled, customSortOrder, customHtml},
        custom2: {custom2IsEnabled, custom2SortOrder, custom2Html}
    } = sidebar;

    const sortComponents = () => {
        const unordered = {};

        unordered[searchSortOrder] = {
            isEnabled: searchIsEnabled,
            component: <SearchBar />
        };
        unordered[categoriesSortOrder] = {
            isEnabled: categoriesIsEnabled,
            component: <Categories showPostsCount={showPostsCount} categoriesMaxDepth={categoriesMaxDepth} />
        };
        unordered[recentPostsSortOrder] = {
            isEnabled: recentPostsIsEnabled,
            component: <RecentPosts recentPostsPageSize={recentPostsPageSize} />
        };
        unordered[featuredPostsSortOrder] = {
            isEnabled: featuredPostsIsEnabled,
            component: <FeaturedPosts postIds={postIds} />
        };
        unordered[popularPostsSortOrder] = {
            isEnabled: popularPostsIsEnabled,
            component: <PopularPosts popularPostsPageSize={popularPostsPageSize} />
        };
        unordered[archiveSortOrder] = {
            isEnabled: archiveIsEnabled,
            component: <Archive formatDate={formatDate} />
        };
        unordered[tagsSortOrder] = {
            isEnabled: tagsIsEnabled,
            component: <Tags tagsCount={tagsCount} />
        };
        unordered[customSortOrder] = {
            isEnabled: customIsEnabled,
            component: <div className={classes.blockCustom} dangerouslySetInnerHTML={{__html: customHtml}} />
        };
        unordered[custom2SortOrder] = {
            isEnabled: custom2IsEnabled,
            component: <div className={classes.blockCustom2} dangerouslySetInnerHTML={{__html: custom2Html}} />
        };

        const ordered = {};

        Object.keys(unordered).sort().forEach(function(key) {
            ordered[key] = unordered[key];
        });

        const components = [];

        for (const property in ordered) {
            components.push(ordered[property]);
        }

        return components;
    }

    return (
        <Fragment>
            {
                sortComponents().map(({isEnabled, component}, i) => (
                    <Fragment key={i}>{isEnabled === 1 && component}</Fragment>
                ))
            }
        </Fragment>
    )
}

export default Sidebar;
