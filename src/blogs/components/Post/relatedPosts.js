import React from 'react';
import { Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

const RelatedPosts = (props) => {
    const { relatedPosts, classes } = props;

    if (relatedPosts.length > 0) {
        return (
            <div className={classes.related}>
                <div className={classes.blockTitle}>
                    <strong><FormattedMessage id={'Related Posts'} /></strong>
                </div>
                <div className={classes.relatedPostList}>
                    {
                        relatedPosts.map(({post_id, title, post_url, featured_image}) => (
                            <div className={classes.relatedPostBlock}>
                                <Link key={post_id} 
                                    className={classes.postItemName}
                                    to={new URL(post_url).pathname}
                                >
                                    {title}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    return null;
}

export default RelatedPosts;
