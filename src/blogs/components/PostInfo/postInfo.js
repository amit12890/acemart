import React from 'react';

import Date from './date';
import Categories from './categories';
import Tags from './tags';
import Author from './author';

const PostInfo = props => {
    const { author, categories, creation_time, tags } = props;

    return (
        <div>
            <Date creation_time={creation_time} />
            <Categories categories={categories} />
            <Tags tags={tags} />
            <Author author={author} />
        </div>
    )
}

export default PostInfo;
