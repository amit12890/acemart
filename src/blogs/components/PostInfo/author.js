import React from 'react';
import { Link } from 'react-router-dom';

import { useBlogConfig } from '../../hooks/useBlogConfig';

const Author = props => {
    const { author } = props;

    const { authorConfig, design, getData } = useBlogConfig();

    if (authorConfig && design) {
        const { authorInfo, displayAuthorPosts } = authorConfig;

        if (author && authorInfo) {
            const { author_url, name } = author;
            const { publicationDateIsEnabled } = getData(design, { publicationDateIsEnabled: 1 })

            return (
                <span>
                    {
                        displayAuthorPosts ?
                            <Link to={new URL(author_url).pathname} title={name}>{name}</Link> : name
                    }
                    {publicationDateIsEnabled ? <span> - </span> : ''}
                </span>
            )
        }
    }

    return null;
}

export default Author;
