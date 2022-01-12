import React from 'react';
import { useQuery } from '@apollo/client';
import {FormattedMessage} from 'react-intl';

import relatedPostsOperations from './relatedPosts.gql';

import classes from './relatedPosts.css';
import { useBlogConfig } from '../../hooks/useBlogConfig';

const RelatedPosts = (props) => {
    const { relateProductId } = props;

    const defaultObject = {
        relatedPostsIsEnabled: 0,
        numberOfRelatedPosts: 0
    }

    const { productPage } = useBlogConfig();
    const { relatedPostsIsEnabled, numberOfRelatedPosts } = productPage || defaultObject;

    const { queries } = relatedPostsOperations;
    const { getRelatedPostsQuery } = queries;

    const { data, error, loading } = useQuery(getRelatedPostsQuery, {
        variables: {
            relateProductId,
            pageSize: numberOfRelatedPosts
        },
        skip: !numberOfRelatedPosts
    });

    if (loading && !data) return null;
    if (error) return <div>Data Fetch Error</div>;

    const {blogPosts: {items: posts}} = data || {blogPosts: {items: []}};

    if (posts.length && relatedPostsIsEnabled) {
        return (
            <section className={classes.details}>
                <h2 className={classes.detailsTitle}><FormattedMessage id={'Related Posts'} /></h2>
                <ul className="list-group list-group-flush">
                    {
                        posts.map(({post_id, title}) => (
                            <li className="list-group-item" key={post_id}>{title}</li>
                        ))
                    }
                </ul>
            </section>
        )
    }

    return null;
}

export default RelatedPosts;
