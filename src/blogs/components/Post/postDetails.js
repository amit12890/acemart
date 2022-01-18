import React, { Fragment, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import classes from './post.css';

import RelatedPosts from './relatedPosts';
import RelatedProducts from './relatedProducts';
import Breadcrumbs from '../Breadcrumbs';
import Sidebar from '../Sidebar';
import Categories from '../PostInfo/categories';
import Author from '../PostInfo/author';
import Date from '../PostInfo/date';
import Tags from '../PostInfo/tags';
import Comments from './Comments';
import { useBlogConfig } from '../../hooks/useBlogConfig';
import BlogMetaTags from '../BlogMetaTags';

const PostDetails = (props) => {
    const { post, prevData, nextData, type } = props;

    const { sidebar, isCanonical, postView } = useBlogConfig();

    // We only want to display breadcrumbs for one category on a PDP even if a
    // post has multiple related categories. This function filters and selects
    // one category id for that purpose.
    const getBreadcrumbCategoryId = categories => {
        // Exit if there are no categories for this post.
        if (!categories || !categories.length) {
            return;
        }

        const breadcrumbSet = new Set();
        categories.forEach(({ breadcrumbs }) => {
            // breadcrumbs can be `null`...
            (breadcrumbs || []).forEach(({ category_id }) =>
                breadcrumbSet.add(category_id)
            );
        });

        // Until we can get the single canonical breadcrumb path to a post we
        // will just return the first category id of the potential leaf categories.
        const leafCategory = categories.find(
            category => !breadcrumbSet.has(category.id)
        );

        // If we couldn't find a leaf category then just use the first category
        // in the list for this post.
        return leafCategory.category_id || categories[0].id;
    };

    const breadcrumbCategoryId = useMemo(
        () => getBreadcrumbCategoryId(post && post.categories),
        [post]
    );

    const [commentsCount, setCommentsCount] = useState(null);

    if (post) {
        const {
            post_id,
            post_url,
            title,
            author,
            categories,
            publish_time,
            featured_image,
            tags,
            filtered_content,
            meta_title,
            meta_description,
            related_posts,
            related_products,
            canonical_url
        } = post;

        const breadcrumbs = (
            <Breadcrumbs
                id={breadcrumbCategoryId ? breadcrumbCategoryId.toString() : ''}
                currentPost={title}
                classes={classes}
                type={type}
            />
        );

        return (
            <Fragment>
                <BlogMetaTags
                    title={title}
                    metaTitle={meta_title}
                    metaDescription={meta_description}
                    type={type}
                    canonicalUrl={canonical_url}
                    isCanonical={isCanonical}
                />
                <main className={classes.container}>
                    {/* {breadcrumbs} */}
                    <div className={classes.columns}>
                        <div className={classes.column}>
                            <div className={classes.pageTitleWrapper}>
                                <h1 className={classes.pageTitle}>{title}</h1>
                            </div>
                            <div className={classes.postView}>
                                <div className={classes.postHolder}>
                                    <div className={classes.postHeader}>
                                        <Categories categories={categories} postCategory={classes.postCategory} />
                                        <div className={classes.postDataWrapper}>
                                            <Author author={author} />
                                            <Date publish_time={publish_time} postDate={classes.postDate} />
                                            {
                                                commentsCount > 0 &&
                                                <span className={classes.postComments}>
                                                    <span className={classes.icon} />
                                                    <a href={`${new URL(post_url).pathname}#postComments`}>{commentsCount}</a>
                                                </span>
                                            }
                                        </div>
                                    </div>
                                    <div className={classes.postContent}>
                                        <div className={classes.clearfix}>
                                            {
                                                featured_image !== 'false' &&
                                                <div className={classes.postFeaturedImage}>
                                                    <img src={featured_image} alt={title}/>
                                                </div>
                                            }
                                            <Tags tags={tags} />
                                            <div className={classes.postDescription}>
                                                <p dangerouslySetInnerHTML={{__html: filtered_content}} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.postBottom}>
                                        {
                                            postView && postView.nextPrevIsEnabled !== 0 &&
                                            <div className={classes.nextPrev}>
                                                <div className={classes.postPrev}>
                                                    {
                                                        prevData &&
                                                        <Link to={new URL(prevData.post_url).pathname} className={classes.nextPrevLink}>
                                                            <span className={classes.textLeft}><FormattedMessage id={'Previous'} /></span>
                                                            {prevData.title}
                                                        </Link>
                                                    }
                                                </div>
                                                <div className={classes.postNext}>
                                                    {
                                                        nextData &&
                                                        <Link to={new URL(nextData.post_url).pathname} className={classes.nextPrevLink}>
                                                            <span className={classes.textRight}><FormattedMessage id={'Next'} /></span>
                                                            {nextData.title}
                                                        </Link>
                                                    }
                                                </div>
                                            </div>
                                        }
                                        <RelatedPosts relatedPosts={related_posts} classes={classes} />
                                        <RelatedProducts relatedProducts={related_products} classes={classes} />
                                        <Comments
                                            postId={post_id}
                                            postUrl={post_url}
                                            title={title}
                                            commentsCount={commentsCount}
                                            setCommentsCount={setCommentsCount}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.sidebar}>
                            {sidebar && <Sidebar sidebar={sidebar} />}
                        </div>
                    </div>
                </main>
            </Fragment>
        )
    }

    return null;
}

export default PostDetails;
