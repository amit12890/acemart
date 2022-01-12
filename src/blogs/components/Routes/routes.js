import React, { Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { useScrollTopOnChange } from '@magento/peregrine/lib/hooks/useScrollTopOnChange';

import { Post, Homepage, Author, Category, Tag, Search as SearchResults, Archive } from '../../';
import { useBlogConfig } from '../../hooks/useBlogConfig';
import { usePermalinkSettings } from '../../hooks/usePermalinkSettings';
import { useUrlResolver } from '../../hooks/useUrlResolver';

const Routes = () => {
    const { pathname } = useLocation();
    useScrollTopOnChange(pathname);

    const { authorConfig, loading: configLoading } = useBlogConfig();
    const { urlType, urlId, loading } = useUrlResolver();
    const { redirectComponent } = usePermalinkSettings();

    if (loading || configLoading) {
        return fullPageLoadingIndicator;
    }

    return (
        <Suspense fallback={fullPageLoadingIndicator}>
            {redirectComponent}
            <Switch>
                {/*
                 * Client-side routes are injected by BabelRouteInjectionPlugin here.
                 * Venia's are defined in packages/venia-ui/lib/targets/venia-ui-intercept.js
                 */}
                {urlType === 'MF_BLOG_INDEX' && <Route><Homepage type={urlType}/></Route>}
                {urlType === 'MF_BLOG_POST' && <Route><Post id={urlId} type={urlType}/></Route>}
                {urlType === 'MF_BLOG_CATEGORY' && <Route><Category id={urlId} type={urlType}/></Route>}
                {urlType === 'MF_BLOG_TAG' && <Route><Tag id={urlId} type={urlType}/></Route>}
                {urlType === 'MF_BLOG_AUTHOR' && authorConfig && authorConfig.displayAuthorPosts && <Route><Author id={urlId} type={urlType}/></Route>}
                {urlType === 'MF_BLOG_ARCHIVE' && <Route><Archive id={urlId} type={urlType}/></Route>}
                {urlType === 'MF_BLOG_SEARCH' && <Route><SearchResults id={urlId} type={urlType}/></Route>}
            </Switch>
        </Suspense>
    );
};

export default Routes;
