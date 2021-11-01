import React from 'react';
import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import RichContent from '../../venia/components/RichContent';
import { GET_CMS_PAGE } from './cmsPage.gql';
import { useStyle } from '../../venia/classify';
import defaultClasses from './landingPage.css';


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
    if (cmsDataLoading) {
        return fullPageLoadingIndicator;
    } else {
        return <RichContent html={get(cmsPageData, "cmsPage.content", "<div>Content Not Found</div>")} />
    }
}

export default LandingPage