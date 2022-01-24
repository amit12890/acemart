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
                style={{ height: '60vh', marginTop: '1em', maxHeight: "initial" }}
            >
                <div className={classes.mapContainer}>
                    <MapContainer
                        mapRef={mapRef}
                        storeList={groupStoreList}
                        selectedStoreIndex={selectedStoreIndex}
                        setSelectedStoreIndex={setSelectedStoreIndex}
                        selectedGroup={selectedGroup}
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
                                        <p className={classes.callInfo}>
                                            <strong>Call: </strong>
                                            <a
                                                href={`tel:${
                                                    store.store_locator_info.phone
                                                }`}
                                            >
                                                {store.store_locator_info.phone}
                                            </a>
                                        </p>
                                        <StoreHours
                                            hours={
                                                store.store_locator_info
                                                    .hours
                                            }
                                            delimiter=": "
                                            classes={classes}
                                        />

                                        <div className={classes.storeDirection}>
                                            <a href={get(store, "store_locator_info.driving_directions", "#")} target="_blank">
                                                <i className={classes.iconWrapper}>
                                                    <svg className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" width="37" height="32" viewBox="0 0 37 32">
                                                        <title>car</title>
                                                        <path d="M8.563 19.719q0-1.188-0.828-2.031t-2.016-0.844-2.031 0.844-0.844 2.031 0.844 2.016 2.031 0.828 2.016-0.828 0.828-2.016zM9.219 14h18.125l-1.563-6.375q-0.063-0.156-0.266-0.313t-0.359-0.156h-13.719q-0.156 0-0.375 0.156t-0.25 0.313zM33.719 19.719q0-1.188-0.844-2.031t-2.031-0.844q-1.156 0-2 0.844t-0.844 2.031 0.844 2.016 2 0.828q1.188 0 2.031-0.828t0.844-2.016zM36.563 18v6.844q0 0.25-0.156 0.422t-0.406 0.172h-1.719v2.281q0 1.406-1 2.422t-2.438 1.016q-1.406 0-2.406-1.016t-1-2.422v-2.281h-18.281v2.281q0 1.406-1.016 2.422t-2.422 1.016q-1.438 0-2.438-1.016t-1-2.422v-2.281h-1.719q-0.219 0-0.391-0.172t-0.172-0.422v-6.844q0-1.656 1.172-2.828t2.828-1.172h0.5l1.875-7.469q0.406-1.688 1.859-2.828t3.203-1.141h13.719q1.719 0 3.172 1.141t1.859 2.828l1.875 7.469h0.5q1.656 0 2.828 1.172t1.172 2.828v0z"></path>
                                                    </svg>
                                                </i>
                                                <span>Driving directions</span>
                                            </a>
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

const StoreHours = ({ hours, delimiter, ...restProps }) => {
    const classes = useStyle(defaultClasses, restProps.classes);
    const normalDayHours = get(hours, 'mon', []);
    const satDayHours = get(hours, 'sat', []);

    return (
        <div className={classes.storeHours}>
            {size(normalDayHours) > 1 ?
                <p><strong>Mon-Fri{delimiter}</strong> {get(normalDayHours, '0')} to {get(normalDayHours, '1')} </p>
                :
                <p><strong>Mon-Fri{delimiter}</strong> {get(normalDayHours, '0')}</p>
            }
            {size(satDayHours) > 1 ?
                <p><strong>Sat{delimiter}</strong> {get(satDayHours, '0')} to {get(satDayHours, '1')} </p>
                :
                <p><strong>Sat{delimiter}</strong> {get(satDayHours, '0')}</p>
            }
        </div >
    )
}

const MapContainer = withScriptjs(
    withGoogleMap(props => {
        const {
            storeList,
            selectedStoreIndex,
            setSelectedStoreIndex,
            mapRef,
            selectedGroup
        } = props;

        return (
            <GoogleMap
                ref={mapRef}
                zoom={selectedGroup === "Austin" ? 9 : 10}
                defaultZoom={selectedGroup === "Austin" ? 9 : 10}
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
    containerElement: <div id='map' style={{ height: '60vh' }} />, // same height as parent map-container class
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
