import React, { Fragment } from 'react';
import Pagination from '../../../venia/components/Pagination';
import {FormattedMessage} from 'react-intl';

import classes from './postList.css';

import Sidebar from '../Sidebar';
import Breadcrumbs from '../Breadcrumbs';
import PostListItems from './postListItems';
import BlogMetaTags from '../BlogMetaTags';
import { useBlogConfig } from '../../hooks/useBlogConfig';

const PostList = props => {
    const {
        posts,
        totalPages,
        setPage,
        currentPage,
        breadcrumb,
        blogPageTitle,
        id,
        type,
        title,
        metaTitle,
        metaKeywords,
        metaDescription,
        robots,
        canonicalUrl
    } = props;

    const pageControl = {
        totalPages,
        setPage,
        currentPage
    }

    const { isCanonical, sidebar } = useBlogConfig();

    const getBlogPageTitle = () => {
        if (blogPageTitle) {
            const {title, content} = blogPageTitle;
            return (
                <Fragment>
                    <h1 className={classes.pageTitle}>{title}</h1>
                    {content && <span dangerouslySetInnerHTML={{__html: content}} />}
                </Fragment>
            )
        } else {
            return <h1 className={classes.pageTitle}><FormattedMessage id={'Blog'} /></h1>
        }
    }

    return (
        <Fragment>
            <BlogMetaTags
                title={title}
                metaTitle={metaTitle}
                metaKeywords={metaKeywords}
                metaDescription={metaDescription}
                currentPage={currentPage}
                type={type}
                robots={robots}
                canonicalUrl={canonicalUrl}
                isCanonical={isCanonical}
            />
            <main className={classes.container}>
                <Breadcrumbs
                    id={id}
                    type={type}
                    breadcrumb={breadcrumb}
                    classes={classes}
                />
                <div className={classes.pageTitleWrapper}>
                    {getBlogPageTitle()}
                </div>
                <div className={classes.columns}>
                    <div className={classes.column}>
                        {
                            totalPages === 0 ?
                                <span><FormattedMessage id={'We can\'t find posts matching the selection.'} /></span> :
                                <Fragment>
                                    <div className={classes.postListWrapper}>
                                        <ol className={classes.postList}>
                                            <PostListItems posts={posts}/>
                                        </ol>
                                    </div>
                                    <div className="toolbar toolbar-blog-posts">
                                        {totalPages > 1 && <Pagination pageControl={pageControl}/>}
                                    </div>
                                </Fragment>
                        }
                    </div>
                    <div className={classes.sidebar}>
                        {sidebar && <Sidebar sidebar={sidebar} />}
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default PostList;
