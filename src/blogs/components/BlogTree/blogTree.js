import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import classes from './blogCategoryTree.css';
import { useBlogConfig } from '../../hooks/useBlogConfig';

import GET_BLOG_CATEGORIES from '../../queries/getBlogCategories.graphql';

const BlogTree = (props) => {
    const { onNavigate } = props;

    const { topMenu } = useBlogConfig();

    const [categoryId, setCategoryId] = useState(null);

    const clickHandler = id => {
        setCategoryId(id);
    };

    const closeHandler = useCallback(() => {
        onNavigate();
    }, [onNavigate]);

    const { data, error, loading } = useQuery(GET_BLOG_CATEGORIES, {
        fetchPolicy: 'cache-and-network'
    });

    if ((loading && !data )|| !topMenu) return null;
    if (error) return <div>Data Fetch Error</div>;

    const {blogCategories: {items: categories}} = data;

    const listToTree = (list) => {
        const map = {};
        const roots = [];
        const treeDepth = topMenu.maxDepth > 0 ? topMenu.maxDepth : 1;
        list.map(v => ({...v, children: null}))
        for (let i = 0; i < list.length; i += 1) {
            map[list[i].category_id] = i; // initialize the map
            list[i].children = []; // initialize the children
        }
        for (let i = 0; i < list.length; i += 1) {
            const node = list[i];
            if (node.category_level !== treeDepth && node.include_in_menu) {
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

    const getChildren = () => {
        const clonedArray = JSON.parse(JSON.stringify(categories));

        if (categoryId) {
            const categoryTree = listToTree(clonedArray).filter(o => o.category_id === categoryId);

            if (categoryTree.length) {
                return categoryTree[0].children;
            } else {
                return clonedArray.filter(o => o.category_id === categoryId)[0].children;
            }
        } else {
            return listToTree(clonedArray);
        }
    };

    return (
        <ChildList
            children={getChildren()}
            clickHandler={clickHandler}
            closeHandler={closeHandler}
        />
    )
}

const ChildList = (props) => {
    const { children, clickHandler, closeHandler } = props;

    return (
        children.map(branch => (
            <li key={branch.category_id} className={classes.rootBlog}>
                {
                    branch.children && branch.children.length ?
                        <button
                            className={classes.targetBlog}
                            type="button"
                            onClick={() => clickHandler(branch.category_id)}
                        >
                            <span className={classes.textBlog}>{branch.title}</span>
                        </button> :
                        <Link
                            className={classes.targetBlog}
                            to={new URL(branch.category_url).pathname}
                            onClick={closeHandler}
                        >
                            <span className={classes.textBlog}>{branch.title}</span>
                        </Link>
                }
            </li>
        ))
    )
}

export default BlogTree;
