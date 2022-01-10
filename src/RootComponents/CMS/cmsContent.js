import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps';
import { useQuery } from '@apollo/client';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import {
    get,
    groupBy,
    size,
    difference,
    orderBy,
    sortBy,
    map
} from 'lodash-es';
import { useStyle } from '../../venia/classify';
import { getProductStoreLocatorData } from '../../components/StoreLocator/productStoreLocator.gql';

import defaultClasses from './cms.css';
import productStoreLocatorCss from '../../components/StoreLocator/productStoreLocator.css';
import { StoreHours } from '../../components/StoreLocator/productStoreLocator';
import {
    customMapMarkerIcon,
    getDefaultLatLong,
    GOOGLE_MAP_API_KEY
} from '../../url.utils';
import DEFAULT_STORE_DATA from '../../venia/components/Header/distribution_center_data.json';

const DEFAULT_STORE_GROUP_NAME = 'Shopping';

const CmsContent = ({ availableStores, ...restProps }) => {
    const classes = useStyle(productStoreLocatorCss, restProps.classes);

    const [selectedGroup, setSelectedGroup] = useState('');
    const [groupStoreList, setGroupStoreList] = useState([]);
    const [groupList, setGroupList] = useState([]);
    const [selectedStoreIndex, setSelectedStoreIndex] = useState(null);
    const mapRef = useRef(null);

    const checkDistributionCenter = useCallback(groupStoreList => {
        let hasCenter = false;
        for (let index = 0; index < groupStoreList.length; index++) {
            const config = groupStoreList[index];
            if (
                get(config, 'store_locator_info.is_distribution_center', false)
            ) {
                hasCenter = true;
                break;
            }
        }
        return hasCenter;
    }, []);

    const storeGroupData = groupBy(availableStores, 'store_group_name');
    useEffect(() => {
        const groupList = sortBy(
            difference(Object.keys(storeGroupData), [DEFAULT_STORE_GROUP_NAME]),
            [
                function(o) {
                    return o;
                }
            ]
        );

        const groupName = groupList[0];

        let groupStoreList = orderBy(
            get(storeGroupData, groupName, []),
            ['store_group_name', 'store_sort_order'],
            ['desc', 'asc']
        );

        if (checkDistributionCenter(groupStoreList)) {
            groupStoreList.push(DEFAULT_STORE_DATA);
        }

        setSelectedGroup(groupName);
        setGroupStoreList(groupStoreList);
        setGroupList(groupList);
    }, []);

    const handleGroupClick = useCallback(
        groupName => () => {
            setSelectedGroup(groupName);
            setSelectedStoreIndex(null);

            let groupStoreList = orderBy(
                get(storeGroupData, groupName, []),
                ['store_group_name', 'store_sort_order'],
                ['desc', 'asc']
            );

            if (checkDistributionCenter(groupStoreList)) {
                groupStoreList.push(DEFAULT_STORE_DATA);
            }

            setSelectedGroup(groupName);
            setGroupStoreList(groupStoreList);

            const cordsList = map(groupStoreList, store => [
                Number(get(store, 'store_locator_info.store_lat')),
                Number(get(store, 'store_locator_info.store_long'))
            ]);
            const center = cordsList.length
                ? getCenterFromDegrees(cordsList)
                : null;

            if (center && mapRef.current) {
                mapRef.current.panTo({
                    lat: center[0],
                    lng: center[1]
                });
            }

            const addressWrapperEle = document.getElementById(
                'sl-address-list'
            );
            addressWrapperEle.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        },
        [mapRef.current]
    );

    return (
        <div>
            <StaticContent classes={classes} />
            <div
                className={[
                    classes.tabsItemContent,
                    classes.tabContentArea
                ].join(' ')}
            >
                <div className={[classes.areas, classes.slAreas].join(' ')}>
                    {groupList.map(group => {
                        const isActive = selectedGroup === group;
                        return (
                            <div
                                key={group}
                                className={[
                                    classes.areaSwitcher,
                                    classes.slSwitcher,
                                    isActive ? classes.active : ''
                                ].join(' ')}
                                onClick={handleGroupClick(group)}
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
                    <MapContainer
                        mapRef={mapRef}
                        storeList={groupStoreList}
                        selectedStoreIndex={selectedStoreIndex}
                        setSelectedStoreIndex={setSelectedStoreIndex}
                    />
                </div>

                <div className={classes.storeListContainer}>
                    <div
                        id="sl-address-list"
                        className={classes.storeListItemWrapper}
                    >
                        {groupStoreList.map((store, sInd) => {
                            const { id, store_name } = store;
                            const latLng = {
                                lat: Number(
                                    get(store, 'store_locator_info.store_lat')
                                ),
                                lng: Number(
                                    get(store, 'store_locator_info.store_long')
                                )
                            };
                            const isActive = sInd === selectedStoreIndex;
                            return (
                                <div
                                    key={id}
                                    id={`sl-address-${sInd}`}
                                    className={[
                                        classes.listItem,
                                        isActive ? classes.active : ''
                                    ].join(' ')}
                                    onClick={() => {
                                        if (sInd === selectedStoreIndex) return;
                                        mapRef.current.panTo(latLng);
                                        setSelectedStoreIndex(sInd);
                                    }}
                                >
                                    <div
                                        className={[
                                            classes.listLabel,
                                            isActive ? classes.active : ''
                                        ].join(' ')}
                                    >
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

const MapContainer = withScriptjs(
    withGoogleMap(props => {
        const {
            storeList,
            selectedStoreIndex,
            setSelectedStoreIndex,
            mapRef
        } = props;

        return (
            <GoogleMap
                ref={mapRef}
                defaultZoom={10}
                defaultCenter={getDefaultLatLong()}
                defaultOptions={{
                    mapTypeControl: false,
                    streetViewControl: false
                }}
            >
                {storeList.map((store, sInd) => {
                    const latLng = {
                        lat: Number(get(store, 'store_locator_info.store_lat')),
                        lng: Number(get(store, 'store_locator_info.store_long'))
                    };
                    const label = String.fromCharCode(65 + sInd);
                    const isActive = sInd === selectedStoreIndex;
                    return (
                        <Marker
                            key={sInd}
                            title={label}
                            position={latLng}
                            onClick={e => {
                                if (sInd === selectedStoreIndex) return;
                                mapRef.current.panTo(e.latLng);
                                setSelectedStoreIndex(sInd);

                                const addressWrapperEle = document.getElementById(
                                    'sl-address-list'
                                );
                                const addressEle = document.getElementById(
                                    `sl-address-${sInd}`
                                );
                                if (addressEle) {
                                    const scroll = getScrollPosition(
                                        sInd,
                                        storeList.length,
                                        addressEle,
                                        addressWrapperEle
                                    );
                                    addressWrapperEle.scrollTo({
                                        top: scroll,
                                        left: 0,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                            icon={customMapMarkerIcon(
                                isActive ? 'red' : 'blue'
                            )}
                            label={{
                                text: label,
                                color: '#FFF'
                            }}
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

const getScrollPosition = (index, dataLength, element, parent) => {
    let position = 0;
    const elePos = element.getBoundingClientRect();
    if (index === 0) {
        // first
        return position;
    } else if (index === dataLength - 1) {
        // last
        return elePos.top + elePos.height;
    } else {
        // total above address height should scroll
        position = (index - 1) * elePos.height;
        return position;
    }
};
const getCenterFromDegrees = data => {
    if (!(data.length > 0)) {
        return false;
    }

    const num_coords = data.length;

    let X = 0.0;
    let Y = 0.0;
    let Z = 0.0;

    for (let i = 0; i < data.length; i++) {
        const lat = (data[i][0] * Math.PI) / 180;
        const lon = (data[i][1] * Math.PI) / 180;

        const a = Math.cos(lat) * Math.cos(lon);
        const b = Math.cos(lat) * Math.sin(lon);
        const c = Math.sin(lat);

        X += a;
        Y += b;
        Z += c;
    }

    X /= num_coords;
    Y /= num_coords;
    Z /= num_coords;

    const lon = Math.atan2(Y, X);
    const hyp = Math.sqrt(X * X + Y * Y);
    const lat = Math.atan2(Z, hyp);

    const newX = (lat * 180) / Math.PI;
    const newY = (lon * 180) / Math.PI;

    return new Array(newX, newY);
};

const StaticContent = ({ classes }) => {
    return (
        <div className={classes.cmsContent}>
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
        content = size(
            availableStoresData && availableStoresData.availableStores
        ) ? (
            <CmsContent
                availableStores={availableStoresData.availableStores}
                classes={classes}
            />
        ) : (
            <div />
        );
    }

    return (
        <div className={classes.cmsContentwrapper}>
            <div className={[classes.root, classes.slRoot].join(" ")}>{content}</div>
        </div>
    );
};

export default StoreLocatorPage;
