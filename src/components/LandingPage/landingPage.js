import React from 'react';
import { useHistory } from 'react-router';
import { useQuery } from '@apollo/client';
import { get } from 'lodash';
import { useIntl } from 'react-intl';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import RichContent from '../../venia/components/RichContent';
import ResourceList from './ResourceList';
import BrandList from './BrandList';

import { GET_LANDING_PAGE } from './landingPage.gql';
import { useStyle } from '../../venia/classify';

import defaultClasses from './landingPage.css';
import { Title, Meta } from '@magento/venia-ui/lib/components/Head';
import { searchPage } from '../../url.utils';

const toHTML = str => ({ __html: str });

const LandingPage = (props) => {
    const { formatMessage } = useIntl();
    const history = useHistory()
    const classes = useStyle(defaultClasses, props.classes);
    const { data: landingPageData, loading: dataLoading, error: loadDataError } = useQuery(
        GET_LANDING_PAGE,
        {
            variables: { identifier: "ace-mart-home-page" },
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        }
    );

    if (dataLoading) {
        return fullPageLoadingIndicator;
    } else {
        const html = get(landingPageData, "cmsPage.content", "<div>Content Not Found</div>");
        // return <div className="wholewrapper" dangerouslySetInnerHTML={toHTML(html)} />;

        return (
            <div className={classes.homePageWrapper}>
                <Title>{formatMessage({ id: "landingPage.title" })}</Title>
                <Meta
                    name="description"
                    content={formatMessage({ id: "landingPage.description" })}
                />
                <RichContent html={html} />
                <ResourceList
                    data={get(landingPageData, "blogPosts.items", [])}
                    onItemClick={(item) => {
                        // hard replacing url as its blog and may have external website link
                        window.location.href = get(item, "canonical_url", "")
                    }} />
                <BrandList
                    data={get(landingPageData, "brand.items", [])}
                    onItemClick={(brandLabel) => {
                        if(brandLabel) {
                            history.push(`${searchPage()}?q=${brandLabel}`)
                        }
                    }} />
            </div>
        )
    }
}

export default LandingPage