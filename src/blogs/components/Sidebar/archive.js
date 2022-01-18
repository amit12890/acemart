import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import classes from './sidebar.css';

import sidebarOperations from './sidebar.gql';

import { usePermalinkSettings } from '../../hooks/usePermalinkSettings';
import { format } from 'date-fns';

const Archive = (props) => {
    const { formatDate } = props;

    const { blogArchiveRoute } = usePermalinkSettings();

    const { queries } = sidebarOperations;
    const { getRecentPostsQuery } = queries;

    const { data, error, loading } = useQuery(getRecentPostsQuery, {
        variables: {
            allPosts: true
        },
        fetchPolicy: 'cache-and-network'
    });

    if ((loading && !data) || !blogArchiveRoute) return null;
    if (error) return <div>Data Fetch Error</div>;

    const {blogPosts: {items: posts}} = data;

    if (!posts.length) return null;

    const getPublishDate = () => {
        const publishDate = [];
        posts.map(({publish_time}) => {
            const parts = publish_time.split('-');
            publishDate.push(parts[0] + '-' + parts[1]);
        })

        return [...new Set(publishDate)]
    }

    return (
        <div className={classes.blockArchive}>
            <div className={classes.blockTitle}>
                <strong><FormattedMessage id={'Archive'} /></strong>
            </div>
            <div className={classes.blockWrapper}>
                {
                    getPublishDate().map((date, index) => (
                        <div key={index} className={[classes.blueLink, classes.archiveBlueLink].join(" ")}>
                            <Link to={blogArchiveRoute(date)}>
                                <div>{format(new Date(date), "MMMM yyyy")}</div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Archive;
