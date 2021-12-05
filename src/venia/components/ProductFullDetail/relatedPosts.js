import React from 'react';
import { useQuery } from '@apollo/client';

import { get } from 'lodash';

import ResourceList from '../../../components/LandingPage/ResourceList';
import defaultClasses from './relatedPosts.css';
import { GET_PRODUCT_RELATED_POSTS } from './relatedPosts.gql';
import { useStyle } from '../../classify';


const RelatedPosts = props => {
    const classes = useStyle(defaultClasses, props.classes)
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
            <section className={[classes.productViewSection, classes.relatedPostSection].join(" ")}>
                <div className={classes.relatedPostWrapper}>
                    <div className={classes.relatedPostWrapper}>
                        <h2 className={classes.sectionSubTitle}>
                            <span>Related Posts</span>
                        </h2>
                    </div>
                    <div className={classes.sectionContent}>
                        <ResourceList
                            data={items}
                            onItemClick={() => { }}
                            showTitle={false}
                        />
                    </div>

                </div>
            </section>
        );
    }
    return null
};

export default RelatedPosts;
