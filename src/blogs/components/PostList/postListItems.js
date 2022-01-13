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
                                    style={{backgroundImage: `url(${featured_image})`}}
                                />
                            </Link>
                            <Categories categories={categories} postCategory={classes.postCategory} />
                        </div>
                    </div>
                    <div className={classes.postInfo}>
                        <div className={classes.postTitleWrap}>
                            <h3>
                                <Link to={new URL(post_url).pathname}>{title}</Link>
                            </h3>
                        </div>
                        <div className={classes.postDataWrap}>
                            <Author author={author} />
                            <Date publish_time={publish_time} postDate={classes.postDate} />
                        </div>
                        <div className={classes.postDescription} dangerouslySetInnerHTML={{__html: short_filtered_content}} />
                        <div className={classes.postReadMore}>
                            <Link className={classes.postRead + " btn-white"} to={new URL(post_url).pathname}>Read more »</Link>
                        </div>
                    </div>
                </div>
            </li>
        ))
    )
}

export default PostListItems;
