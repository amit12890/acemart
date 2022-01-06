import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';

import { shape, string } from 'prop-types';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { useCmsPage } from '@magento/peregrine/lib/talons/Cms/useCmsPage';
import RichContent from '../../venia/components/RichContent';
import CategoryList from '@magento/venia-ui/lib/components/CategoryList';
import { Meta, StoreTitle } from '@magento/venia-ui/lib/components/Head';
import { useStyle } from '../../venia/classify';
import { useIntl } from 'react-intl';

import defaultClasses from './cms.css';
import { updateAppState } from '../../data/appState/appState.action';
import { getProductStoreLocatorData } from '../../components/StoreLocator/productStoreLocator.gql';
import CmsContent from './cmsContent';
import { size } from 'lodash';

const pageTitle = '';
const meta_description = '';

const CMSPage = props => {
    const { id } = props;
    const dispatch = useDispatch();
    const classes = useStyle(defaultClasses, props.classes);

    const {
        data: availableStoresData,
        loading: storeDataLoading,
        error: storeDataError
    } = useQuery(getProductStoreLocatorData, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });
    /**
     * isCMS flag status updated added on component create
     * and destory
     *
     *  reducer: appState
     */
    useEffect(() => {
        dispatch(updateAppState({ isCMS: true }));
        return () => {
            dispatch(updateAppState({ isCMS: false }));
        };
    }, []);

    let content;
    if (storeDataLoading) {
        content = fullPageLoadingIndicator;
    } else if (!!storeDataError) {
        content = <div>An Error Occured while loading store data...</div>;
    } else {
        content = size(availableStoresData && availableStoresData.availableStores) ? (
            <CmsContent availableStores={availableStoresData.availableStores} />
        ) : (
            <div />
        );
    }

    return (
        <div className={classes.cmswrapper}>
            <StoreTitle>{pageTitle}</StoreTitle>
            <Meta name="title" content={pageTitle} />
            <Meta name="description" content={meta_description} />
            <div className={classes.root}>
                {content}
            </div>
        </div>
    );
};

CMSPage.propTypes = {
    id: string,
    classes: shape({
        heading: string
    })
};

export default CMSPage;
