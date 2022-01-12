import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import postOperations from './post.gql';

import PostDetails from './postDetails';
import { usePrevNext } from '../../hooks/usePrevNext';

const Post = (props) => {
    const { id: postId, type, isCanonical } = props;

    // Scroll to the top on component load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { prevData, nextData } = usePrevNext({id: postId});

    const { queries } = postOperations;
    const { getPostQuery } = queries;

    const { data, error, loading } = useQuery(getPostQuery, {
        variables: { postId },
        skip: !postId,
        fetchPolicy: 'cache-and-network'
    });

    if (loading && !data) return null;
    if (error) return <div>Data Fetch Error</div>;

    const { blogPost: post } = data || {};

    return <PostDetails
        post={post}
        prevData={prevData}
        nextData={nextData}
        type={type}
        isCanonical={isCanonical}
    />
}

export default Post;
