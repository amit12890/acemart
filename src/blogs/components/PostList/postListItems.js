import React from 'react';
import { Link } from 'react-router-dom';

import classes from './postList.css';

import Categories from '../PostInfo/categories';
import Author from '../PostInfo/author';
import Date from '../PostInfo/date';

const PostListItems = (props) => {
    const { posts } = props;

    return (
        posts.map(({ post_id, post_url, title, featured_image, author, categories, publish_time, short_filtered_content }) => (
            <li key={post_id} className={`${classes.postItem} ${classes.postHolder}`}>
                <div className={classes.postContainer}>
                    <div className={classes.postImage}>
                        <div className={classes.imageContainer}>
                            <Link className={classes.imageWrapper} to={new URL(post_url).pathname}>
                                <span
                                    className={`${classes.bgImg} ${classes.animationTypeZoom}`}
                                    style={{ backgroundImage: `url(${featured_image})` }}
                                />
                            </Link>

                        </div>
                    </div>
                    <div className={classes.postInfoPanel}>
                        <div className={classes.postHeader}>
                            <h3 className={classes.postTitle}>
                                <Link to={new URL(post_url).pathname}>{title}</Link>
                            </h3>
                            <Date publish_time={publish_time} postDate={classes.postDate} />
                        </div>
                        <div className={classes.postInfo}>
                            <div className={classes.postAuthor}>
                                <span className={classes.label}>Posted by</span>
                                <Author author={author} />
                            </div>
                            <div className={classes.postCategory}>
                                <span className={classes.label}>Categories</span>
                                <Categories categories={categories} postCategory={classes.postCategoryWrapper} />
                            </div>
                            <div className={classes.postDescription} dangerouslySetInnerHTML={{ __html: short_filtered_content }} />
                            <div className={classes.postReadMore}>
                                <Link className={classes.postRead + " btn-white"} to={new URL(post_url).pathname}>Read more »</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        ))
    )
}

export default PostListItems;
