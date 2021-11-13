import React from 'react';
import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import RichContent from '../../venia/components/RichContent';
import ResourceList from './ResourceList';
import BrandList from './BrandList';

import { GET_LANDING_PAGE } from './landingPage.gql';
import { useStyle } from '../../venia/classify';

import defaultClasses from './landingPage.css';

const toHTML = str => ({ __html: str });

const LandingPage = (props) => {
    const classes = useStyle(defaultClasses, props.classes);
    const { data: landingPageData, loading: dataLoading, error: loadDataError } = useQuery(
        GET_LANDING_PAGE,
        {
            variables: { identifier: "ace-mart-home-page" },
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        }
    );
    console.log("🚀 ~ file: landingPage.js ~ line 16 ~ LandingPage ~ landingPageData", landingPageData)
    if (dataLoading) {
        return fullPageLoadingIndicator;
    } else {
        const html = get(landingPageData, "cmsPage.content", "<div>Content Not Found</div>");
        // return <div className="wholewrapper" dangerouslySetInnerHTML={toHTML(html)} />;

        return (
            <div>
                <RichContent html={html} />
                <ResourceList
                    data={get(landingPageData, "blogPosts.items", [])}
                    onItemClick={() => { }} />
                <BrandList
                    data={get(landingPageData, "brand.items", [])}
                    onItemClick={() => { }} />
            </div>
        )
    }
}

export default LandingPage