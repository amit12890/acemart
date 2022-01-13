import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import classes from './sidebar.css';

import sidebarOperations from './sidebar.gql';

const Tags = (props) => {
    const { tagsCount } = props;

    const { queries } = sidebarOperations;
    const { getBlogTagsQuery } = queries;

    const { data, error, loading } = useQuery(getBlogTagsQuery, {
        fetchPolicy: 'cache-and-network'
    });

    if (loading && !data) return null;
    if (error) return <div>Data Fetch Error</div>;

    const {blogTags: {items: tags}} = data;

    if (!tags.length) return null;

    return (
        <div className={classes.tagCloud}>
            <div className={classes.blockTitle}>
                <strong><FormattedMessage id={'Tags'} /></strong>
            </div>
            {
                tags.map(({tag_id, tag_url, title}, index) => (
                    index < tagsCount &&
                    <div key={tag_id}>
                        <Link to={new URL(tag_url).pathname}>{title}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Tags;
