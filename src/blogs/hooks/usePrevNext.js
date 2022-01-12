import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_ALL_POSTS = gql`
    query GetAllPosts {
        blogPosts (sort:["DESC"] allPosts: true) {
            items {
                post_id
                title
                post_url
            }
        }
    }
`;

export const usePrevNext = (props) => {
    const { id } = props;
    const [prevData, setPrevData] = useState();
    const [nextData, setNextData] = useState();

    const { data, error, loading } = useQuery(GET_ALL_POSTS, {skip: !id});

    const defaultObject = {
        blogPosts: {
            items: []
        }
    }

    const {blogPosts: {items: posts}} = data || defaultObject;

    useEffect(() => {
        window.scrollTo(0, 0);

        const index = posts.map(post => {
            return post.post_id
        }).indexOf(parseInt(id))

        setPrevData(posts[index - 1])
        setNextData(posts[index + 1])
    }, [setPrevData, setNextData, posts, id])

    return {
        error,
        loading,
        prevData,
        nextData
    };
}
