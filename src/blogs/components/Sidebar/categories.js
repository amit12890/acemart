import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import classes from './sidebar.css';

import sidebarOperations from './sidebar.gql';
import {FormattedMessage} from 'react-intl';

const Categories = (props) => {
    const { showPostsCount, categoriesMaxDepth } = props;

    const { queries } = sidebarOperations;
    const { getBlogCategoriesQuery } = queries;

    const { data, error, loading } = useQuery(getBlogCategoriesQuery, {
        fetchPolicy: 'cache-and-network',

    });

    if (loading && !data) return null;
    if (error) return <div>Data Fetch Error</div>;

    const {blogCategories: {items: categories}} = data;

    if (!categories.length) return null;

    const listToTree = (list) => {
        const map = {};
        const roots = [];
        const treeDepth = categoriesMaxDepth > 0 ? categoriesMaxDepth : 1;
        list.map(v => ({...v, children: null}))
        for (let i = 0; i < list.length; i += 1) {
            map[list[i].category_id] = i; // initialize the map
            list[i].children = []; // initialize the children
        }
        for (let i = 0; i < list.length; i += 1) {
            const node = list[i];
            if (node.category_level !== treeDepth) {
                if (node.parent_category_id !== 0) {
                    // if you have dangling branches check that map[node.parentId] exists
                    list[map[node.parent_category_id]].children.push(node);
                } else {
                    roots.push(node);
                }
            }
        }
        return roots;
    }

    const clonedArray = JSON.parse(JSON.stringify(categories));

    return (
        <div className={classes.blockCategories}>
            <div className={classes.blockTitle}>
                <strong><FormattedMessage id={'Categories'} /></strong>
            </div>
            <ul id="accordion-2" className={classes.accordion}>
                <CategoryTree children={listToTree(clonedArray)} showPostsCount={showPostsCount} />
            </ul>
        </div>
    )
}

const CategoryTree = (props) => {
    const { children, showPostsCount } = props;
    return children.map(({category_id, category_url, title, children, posts_count}) => (
        <li key={category_id}>
            <Link to={new URL(category_url).pathname}>{title}</Link>
            {showPostsCount === 1 && <span> ({posts_count})</span>}
            {children && <ul><CategoryTree children={children} showPostsCount={showPostsCount} /></ul>}
        </li>
    ))
}

export default Categories;
