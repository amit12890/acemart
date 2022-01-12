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
                <div className={classes.postList}>
                    {
                        relatedPosts.map(({post_id, title, post_url, featured_image}) => (
                            <div key={post_id} className={classes.postItem}>
                                {
                                    featured_image !== 'false' &&
                                        <div className={classes.imageContainer}>
                                            <Link className={classes.imageWrapper} to={new URL(post_url).pathname}>
                                                <span
                                                    className={`${classes.bgImg} ${classes.animationTypeZoom}`}
                                                    style={{backgroundImage: `url(${featured_image})`}}
                                                />
                                            </Link>
                                        </div>
                                }
                                <div className={classes.blockInfo}>
                                    <h3 className={classes.postTitle}>
                                        <Link className={classes.postItemName} to={new URL(post_url).pathname}>{title}</Link>
                                    </h3>
                                </div>
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
