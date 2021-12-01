import React from 'react';
import { useQuery } from '@apollo/client';

import { get } from 'lodash';

import ResourceList from '../../../components/LandingPage/ResourceList';
import { GET_PRODUCT_RELATED_POSTS } from './relatedPosts.gql';

const RelatedPosts = props => {
    const { loading, error, data } = useQuery(GET_PRODUCT_RELATED_POSTS, {
        variables: { product_id: String(props.productId) }
    });

    if (loading) {
        return <div>Loading....</div>;
    } else if (!!error) {
        return <div>An Error Occured while loading store data...</div>;
    }

    const items = get(data, 'blogPosts.items', []);
    const hasItems = get(data, 'blogPosts.items.length', 0);

    if (hasItems) {
        return (
            <div>
                <h2>
                    <span>Related Posts</span>
                </h2>
                <ResourceList
                    data={items}
                    onItemClick={() => {}}
                    showTitle={false}
                />
            </div>
        );
    }
    return null
};

export default RelatedPosts;
