import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import classes from './sidebar.css';

import sidebarOperations from './sidebar.gql';

import Date from '../PostInfo/date';

const RecentPosts = (props) => {
    const { recentPostsPageSize: pageSize } = props;

    const { queries } = sidebarOperations;
    const { getRecentPostsQuery } = queries;

    const { data, error, loading } = useQuery(getRecentPostsQuery, {
        variables: {pageSize},
        skip: !pageSize,
        fetchPolicy: 'cache-and-network'
    });

    if (loading && !data) return null;
    if (error) return <div>Data Fetch Error</div>;

    const {blogPosts: {items: posts}} = data || {blogPosts: {items: []}};

    if (!posts.length) return null;

    return (
        <div className={classes.blockListPosts}>
            <div>
                <div className={classes.blockTitle}>
                    <strong><FormattedMessage id={'Recent Posts'} /></strong>
                </div>
            </div>
            <div className={classes.blockContent}>
                <div className={classes.postList}>
                    {
                        posts.map(({post_id, post_url, title, featured_image, publish_time}) => (
                            <div key={post_id} className={classes.postItem}>
                                {/* {
                                    featured_image !== 'false' &&
                                        <div className={classes.imageContainer}>
                                            <Link className={classes.imageWrapper} to={new URL(post_url).pathname}>
                                            <span
                                                className={`${classes.bgImg} ${classes.animationTypeZoom}`}
                                                style={{backgroundImage: `url(${featured_image})`}}
                                            />
                                            </Link>
                                        </div>
                                } */}
                                <div className={classes.blockInfo}>
                                    <h3 className={classes.postItemName}>
                                        <Link className={classes.postItemNameLink} to={new URL(post_url).pathname}>{title}</Link>
                                    </h3>
                                    {/* <div className={classes.blockDate}>
                                        <Date publish_time={publish_time} />
                                    </div> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentPosts;
