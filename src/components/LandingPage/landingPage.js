import React from 'react';
import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import RichContent from '../../venia/components/RichContent';
import { GET_CMS_PAGE } from './cmsPage.gql';
import { useStyle } from '../../venia/classify';
import defaultClasses from './landingPage.css';

const toHTML = str => ({ __html: str });

const LandingPage = (props) => {
    const classes = useStyle(defaultClasses, props.classes);
    const { data: cmsPageData, loading: cmsDataLoading, error: loadDataError } = useQuery(
        GET_CMS_PAGE,
        {
            variables: {identifier: "ace-mart-home-page"},
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        }
    );
    console.log(cmsPageData)
    if (cmsDataLoading) {
        return fullPageLoadingIndicator;
    } else {
        const html = get(cmsPageData, "cmsPage.content", "<div>Content Not Found</div>");
        // return <div className="wholewrapper" dangerouslySetInnerHTML={toHTML(html)} />;

        return <RichContent html={html} />
    }
}

export default LandingPage