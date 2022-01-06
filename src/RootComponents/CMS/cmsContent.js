import React, { useState, useMemo, useRef } from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps';
import { useQuery } from '@apollo/client';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import { get, groupBy, size, difference, orderBy, sortBy } from 'lodash-es';
import { useStyle } from '../../venia/classify';
import { getProductStoreLocatorData } from '../../components/StoreLocator/productStoreLocator.gql';

import defaultClasses from './cms.css';
import productStoreLocatorCss from '../../components/StoreLocator/productStoreLocator.css';
import { StoreHours } from '../../components/StoreLocator/productStoreLocator';
import { GOOGLE_MAP_API_KEY } from '../../url.utils';

const DEFAULT_STORE_GROUP_NAME = 'Shopping';

const CmsContent = ({ availableStores }) => {
    const classes = useStyle(productStoreLocatorCss);

    const [selectedGroup, setSelectedGroup] = useState('');

    const { storeGroupData, groupList } = useMemo(() => {
        const storeGroupData = groupBy(availableStores, 'store_group_name');
        const groupList = sortBy(
            difference(Object.keys(storeGroupData), [DEFAULT_STORE_GROUP_NAME]),
            [
                function(o) {
                    return o;
                }
            ]
        );
        setSelectedGroup(groupList[0]);
        return { storeGroupData, groupList };
    }, [availableStores]);

    let groupStoreList = [];
    if (!!selectedGroup) {
        groupStoreList = orderBy(
            get(storeGroupData, selectedGroup, []),
            ['store_group_name', 'store_sort_order'],
            ['desc', 'asc']
        );
    }

    return (
        <div>
            <StaticContent />
            <div
                className={[
                    classes.tabsItemContent,
                    classes.tabContentArea
                ].join(' ')}
            >
                <div className={classes.areas}>
                    {groupList.map(group => {
                        return (
                            <div
                                key={group}
                                className={classes.areaSwitcher}
                                onClick={() => setSelectedGroup(group)}
                            >
                                <span>{group}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div
                className={classes.selectStoreWrapper}
                style={{ height: '500px', marginTop: '1em' }}
            >
                <div className={classes.mapContainer}>
                    <MapContainer storeList={groupStoreList} />
                </div>

                <div className={classes.storeListContainer}>
                    <div className={classes.storeListItemWrapper}>
                        {groupStoreList.map((store, sInd) => {
                            const { id, store_name } = store;

                            return (
                                <div key={id} className={classes.listItem}>
                                    <div className={classes.listLabel}>
                                        <span>
                                            {String.fromCharCode(65 + sInd)}
                                        </span>
                                    </div>
                                    <div
                                        className={classes.storeAddressWrapper}
                                    >
                                        <h4 className={classes.storeName}>
                                            {store_name}
                                        </h4>
                                        <p>{store.store_locator_info.street}</p>
                                        <p>
                                            {store.store_locator_info.city},{' '}
                                            {store.store_locator_info.state}{' '}
                                            {store.store_locator_info.zip}
                                        </p>
                                        <a
                                            href={`tel:${
                                                store.store_locator_info.phone
                                            }`}
                                        >
                                            {/* <span>phone icon here</span> */}
                                            {store.store_locator_info.phone}
                                        </a>
                                        <div>
                                            <StoreHours
                                                hours={
                                                    store.store_locator_info
                                                        .hours
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const StaticContent = () => {
    return (
        <div>
            <h2>Store Locations</h2>
            <p>
                We have <span>15 stores</span> located throughout the State of
                Texas. If you live in or plan to visit Houston, Austin, San
                Antonio, or the Dallas-Fort Worth Metroplex, please use this
                page for information on the store that is nearest you! Learn
                more about our <span>FREE</span>{' '}
                <a href="/online-order-pickup">Online Order Pickup</a> service
                available at all locations.
                <br />
                <br />
                A team of highly trained and knowledgeable associates awaits at
                every store to help you find solutions for your business. Our
                vast selection of on-hand inventory includes foodservice
                essentials from smallwares to heavy equipment. Come on in - no
                membership required!
                <br />
                <br />
                We are committed to the health and safety of all of our
                customers and associates, and we abide by all current COVID
                guidelines issued by local, state, and national health
                authorities. Please visit our{' '}
                <a href="/covid19-updates">COVID resource page</a> to learn more
                about what we're doing to help everyone stay safe.
                <a name="anchormap" />
            </p>
        </div>
    );
};

const MapContainer = withScriptjs(
    withGoogleMap(props => {
        const mapRef = useRef(null);
        const [center, setCenter] = useState({
            lat: 0,
            lng: 0
        });

        return (
            <GoogleMap
                ref={mapRef}
                defaultZoom={12}
                // center={{
                //     lat: 51.5073509,
                //     lng: -0.1277583
                // }}
                defaultCenter={center}
                defaultOptions={{
                    mapTypeControl: false,
                    streetViewControl: false
                }}
                onBoundsChanged={() => {
                    setCenter(mapRef.current.getCenter());
                }}
            >
                {props.storeList.map((store, sInd) => {
                    const latLng = {
                        lat: Number(get(store, 'store_locator_info.store_lat')),
                        lng: Number(get(store, 'store_locator_info.store_long'))
                    };
                    return (
                        <Marker
                            key={sInd}
                            title={String.fromCharCode(65 + sInd)}
                            position={latLng}
                            onClick={() => {}}
                        />
                    );
                })}
            </GoogleMap>
        );
    })
);

MapContainer.defaultProps = {
    loadingElement: (
        <div style={{ height: '100%', backgroundColor: '#7b7c81' }} />
    ),
    containerElement: <div style={{ height: '500px' }} />, // same height as parent map-container class
    mapElement: <div style={{ height: '100%' }} />,
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&v=3.exp`
};

const StoreLocatorPage = props => {
    const classes = useStyle(defaultClasses, props.classes);

    const {
        data: availableStoresData,
        loading: storeDataLoading,
        error: storeDataError
    } = useQuery(getProductStoreLocatorData, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

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
            <div className={classes.root}>
                {content}
            </div>
        </div>
    );
};

export default StoreLocatorPage;
