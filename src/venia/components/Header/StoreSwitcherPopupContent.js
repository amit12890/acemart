import React, { useCallback, useState } from 'react';
import { get, groupBy, size, difference, orderBy, sortBy } from 'lodash-es';

import { useStyle } from '../../classify';
import defaultClasses from '../../../components/StoreLocator/productStoreLocator.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { StoreHours } from '../../../components/StoreLocator/productStoreLocator';
import mapImage from "../../../assets/map.jpg"

// Acemart.com store will be under this group
// don't show it in group list
const DEFAULT_STORE_GROUP_NAME = "Shopping"

const getMapStype = (image) => {
    return {
        '--mapImage': `url("${image}")`
    }
}
export default function StoreSwitcherPopupContent({
    availableStores,
    selectStore,
    currentStoreName,
    currentGroupName,
    currentStoreConfig
}) {
    const classes = useStyle(defaultClasses);
    // 1: select Area, 2: select Store, 3: details / stock
    const [popupState, setPopupState] = useState(1)
    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedStore, setselectedStore] = useState(null);

    const storeGroupData = groupBy(availableStores, 'store_group_name')
    const groupList = sortBy(
        difference(Object.keys(storeGroupData), [DEFAULT_STORE_GROUP_NAME]),
        [function (o) { return o; }]
    )
    let groupStoreList = [];
    if (!!selectedGroup) {
        groupStoreList = orderBy(
            get(storeGroupData, selectedGroup, []),
            ['store_group_name', 'store_sort_order'], ['desc', 'asc']
        )
    }

    const handleNavigationClick = useCallback((state) => {
        if (state === 1) {
            setselectedStore(null);
        } else if (state === 2 && !selectedGroup) {
            // don't do anything if group not selected
            return;
        } else if (state == 3 && (!selectedGroup || !selectedStore)) {
            return;
        }
        setPopupState(state);
    }, [popupState])

    const handleGroupSelect = useCallback((group) => {
        setselectedStore(null);
        setSelectedGroup(group);
        // go to next step
        setPopupState(2);
    }, [setSelectedGroup, setPopupState])

    const handleSwitchStoreClick = useCallback(
        // Change store view code and currency to be used in Apollo link request headers
        storeCode => () => {
            selectStore(storeCode)
        },
        [availableStores]
    );

    const selectedMapImage = get(groupStoreList, "0.store_locator_info.map", mapImage)

    return (
        <div className={classes.content}>

            <div>
                <div>
                    <h2>Currently Shopping</h2>
                    <div>{currentStoreName}</div>
                    {currentStoreConfig.store_name === "Acemart.com" ?
                    <ul>
                        <li>
                            <div>Delivery Options Available:</div>
                            <ul>
                                <li>Shipping Direct.</li>
                                <li>Pickup at Warehouse.</li>
                            </ul>
                        </li>
                        <li>
                            <div>{get(currentStoreConfig, "store_locator_info.street", "")}</div>
                            <div>
                                <span>{get(currentStoreConfig, "store_locator_info.city", "")}</span>
                                <span>{get(currentStoreConfig, "store_locator_info.zip", "")}</span>
                            </div>
                            <div>
                                <Link to={get(currentStoreConfig, "store_locator_info.driving_directions", "#")}>
                                    Driving directions
                                </Link>
                            </div>
                        </li>
                        <li>
                            <StoreHours hours={currentStoreConfig.store_locator_info.hours} />
                        </li>
                    </ul>
                    :
                    <ul>
                        <li>
                            <div>{get(currentStoreConfig, "store_locator_info.street", "")}</div>
                            <div>
                                <span>{get(currentStoreConfig, "store_locator_info.city", "")}</span>
                                <span>{get(currentStoreConfig, "store_locator_info.zip", "")}</span>
                            </div>
                            <div>
                                <Link to={get(currentStoreConfig, "store_locator_info.driving_directions", "#")}>
                                    Driving directions
                                </Link>
                            </div>
                        </li>
                        <li>
                            <StoreHours hours={currentStoreConfig.store_locator_info.hours} />
                        </li>
                        <li>
                            <div>Phone : {get(currentStoreConfig, "store_locator_info.phone", "")}</div>
                            <div>Fax : {get(currentStoreConfig, "store_locator_info.fax", "")}</div>
                        </li>
                    </ul>
                    }
                </div>
                <div>
                    {currentStoreName !== "Acemart.com" ?
                        <Button onClick={handleSwitchStoreClick("default")}>
                            Ship Direct on Acemart.com
                        </Button>
                        :
                        null
                    }
                    <Link to={"#"}>
                        <Button>View All Store Locations</Button>
                    </Link>
                </div>
            </div>

            <div className={classes.heading}>
                Shop Your Local Store:
            </div>

            <div className={classes.contentContainer}>
                <div className={classes.tabsContainer}>
                    <div className={`${classes.tabsItem} ${classes.tabArea} ${popupState === 1 ? classes.active : ''}`}>
                        <a className={classes.itemSwitch} onClick={() => handleNavigationClick(1)}>
                            <div className={classes.switchContent}>
                                <span className={classes.tabLabel}>Area</span>
                                <span className={classes.tabValue}>{selectedGroup}</span>
                            </div>
                        </a>
                    </div>

                    <div className={`${classes.tabsItem} ${classes.tabStore} ${popupState === 2 ? classes.active : ''}`}>
                        <a className={classes.itemSwitch} onClick={() => handleNavigationClick(2)}>
                            <div className={classes.switchContent}>
                                <span className={classes.tabLabel}>Store</span>
                                <span className={classes.tabValue}>{get(selectedStore, "store_name", "")}</span>
                            </div>
                        </a>
                    </div>

                </div>

                <div className={classes.tabsContent}>
                    {popupState === 1 &&
                        <div className={[classes.tabsItemContent, classes.tabContentArea].join(" ")}>
                            <div className={[classes.instructions, classes.storeInfo].join(" ")}>
                                <p>First, select an area below for Store Pickup:</p>
                            </div>
                            <div className={classes.areas}>
                                {groupList.map((group) => {
                                    // add active class here
                                    const isActive = group === currentGroupName
                                    return (
                                        <div key={group} className={classes.areaSwitcher}
                                            onClick={() => handleGroupSelect(group)}>
                                            <span>{group}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }

                    {(popupState === 2 && !!selectedGroup) &&
                        <div className={[classes.tabsItemContent, classes.tabContentStore].join(" ")}>
                            <div className={[classes.instructions, classes.storeInfo].join(" ")}>
                                <p>Now select a store.</p>
                            </div>
                            <div className={classes.selectStoreWrapper}>
                                <div className={classes.mapContainer}>
                                    <div className={classes.mapContent} style={getMapStype(selectedMapImage)}></div>
                                </div>

                                <div className={classes.storeListContainer}>
                                    <div className={classes.storeListItemWrapper}>
                                        {groupStoreList.map((store, sInd) => {
                                            const { id, store_name, code } = store;
                                            // add active class here
                                            const isActive = store_name === currentStoreName
                                            return (
                                                <div key={id} className={classes.listItem}>
                                                    <div className={classes.listLabel}>
                                                        <span>
                                                            {String.fromCharCode(65 + sInd)}
                                                        </span></div>
                                                    <div className={classes.storeAddressWrapper}>
                                                        <h4 className={classes.storeName}>{store_name}</h4>
                                                        <p>{store.store_locator_info.street}</p>
                                                        <p>{store.store_locator_info.city}, {store.store_locator_info.state} {store.store_locator_info.zip}</p>
                                                        <p>{store.store_locator_info.phone}</p>
                                                        <div>
                                                            <StoreHours hours={store.store_locator_info.hours} />
                                                        </div>
                                                        {isActive ?
                                                            <div>MY STORE</div>
                                                            :
                                                            <Button onClick={handleSwitchStoreClick(code)}>Shop this store</Button>
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
