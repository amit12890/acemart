import { useEffect, useMemo } from 'react';
import { useQuery } from '@apollo/client';

import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import { useAppContext } from '@magento/peregrine/lib/context/app';

import DEFAULT_OPERATIONS from './cmsPage.gql';
import { useLocation } from 'react-router-dom';

/**
 * Retrieves data necessary to render a CMS Page
 *
 * @param {object} props
 * @param {object} props.id - CMS Page ID
 * @param {object} props.queries - Collection of GraphQL queries
 * @param {object} props.queries.getCmsPage - Query for getting a CMS Page
 * @returns {{shouldShowLoadingIndicator: *, hasContent: *, cmsPage: *, error: *}}
 */
export const useCmsPage = props => {
    const { id } = props;

    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const { getCMSPageQuery } = operations;

    const { loading, error, data } = useQuery(getCMSPageQuery, {
        variables: {
            id: Number(id)
        },
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    const [
        ,
        {
            actions: { setPageLoading }
        }
    ] = useAppContext();
    const location = useLocation();
    const { hash } = location;

    // To prevent loading indicator from getting stuck, unset on unmount.
    useEffect(() => {
        return () => {
            setPageLoading(false);
        };
    }, [setPageLoading]);

    // Ensure we mark the page as loading while we check the network for updates
    useEffect(() => {
        setPageLoading(loading);
    }, [loading, setPageLoading]);

    const shouldShowLoadingIndicator = loading && !data;

    const cmsPage = data ? data.cmsPage : null;
    const rootCategoryId = data ? data.storeConfig.root_category_id : null;

    // Only render <RichContent /> if the page isn't empty and doesn't contain
    // the default CMS Page text. We do this so there is at least a useable home
    // page by default, the category list component.
    const hasContent = useMemo(() => {
        const hasContent = (
            cmsPage &&
            cmsPage.content &&
            cmsPage.content.length > 0 &&
            !cmsPage.content.includes('CMS homepage content goes here.')
        )
        if(hash && hasContent) {
            const timeout = 800;
            if (hash === '#ship_policy/') {
                setTimeout(() => {
                    const ele = document.getElementById('ship_policy/');
                    if (ele) {
                        ele.scrollIntoView({ behavior: 'smooth' });
                    }
                }, timeout);
            } else if (hash === '#security/') {
                setTimeout(() => {
                    const ele = document.getElementById('security/');
                    if (ele) {
                        ele.scrollIntoView({ behavior: 'smooth' });
                    }
                }, timeout);
            } else if (hash === '#return_policy/') {
                setTimeout(() => {
                    const ele = document.getElementById('return_policy/');
                    if (ele) {
                        ele.scrollIntoView({ behavior: 'smooth' });
                    }
                }, timeout);
            }
        }
        return hasContent
    }, [cmsPage, hash]);

    return {
        cmsPage,
        error,
        hasContent,
        rootCategoryId,
        shouldShowLoadingIndicator
    };
};
