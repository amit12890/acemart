import React, { Fragment } from 'react';

import { Meta, Title, Link } from '@magento/venia-ui/lib/components/Head';

const BlogMetaTags = (props) => {
    const {
        title,
        metaTitle,
        metaKeywords,
        metaDescription,
        currentPage,
        type,
        robots,
        canonicalUrl,
        isCanonical
    } = props;

    return (
        <Fragment>
            <Title>{title}</Title>
            <Meta name="title" content={metaTitle} />
            <Meta name="keywords" content={metaKeywords} />
            <Meta name="description" content={metaDescription} />
            {
                currentPage > 1 ?
                    <Meta name="robots" content="NOINDEX,NOFOLLOW" /> :
                    <Meta name="robots" content={robots ? robots : "INDEX,FOLLOW"} />
            }
            {isCanonical(type) ? <Link rel="canonical" href={canonicalUrl} /> : null}
        </Fragment>
    )
}

export default BlogMetaTags;
