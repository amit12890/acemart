import React, { useCallback, useState } from 'react';
import { get, groupBy, size, difference, orderBy, sortBy } from 'lodash-es';

import { useStyle } from '../../classify';
import defaultClasses from '../../../components/StoreLocator/productStoreLocator.css';
import Button from '../Button';

// Acemart.com store will be under this group
// don't show it in group list
const DEFAULT_STORE_GROUP_NAME = "Shopping"

export default function StoreSwitcherPopupContent({
    availableStores,
    selectStore
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

    return (
        <div className={classes.content}>
            <div className={classes.heading}>
                Check A Different Store
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
                                <p>First, select an area to pick a store and check stock.</p>
                            </div>
                            <div className={classes.areas}>
                                {groupList.map((group) => {
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
                                    {/* <div className={classes.mapContent} style={getMapStype(selectedMapImage)}></div> */}
                                </div>

                                <div className={classes.storeListContainer}>
                                    <div className={classes.storeListItemWrapper}>
                                        {groupStoreList.map((store, sInd) => {
                                            const { id, store_name, code } = store;
                                            return (
                                                <div key={id} className={classes.listItem}>
                                                    <div className={classes.listLabel}>
                                                        <span>
                                                            {String.fromCharCode(65 + sInd)}
                                                        </span></div>
                                                    <div className={classes.storeAddressWrapper}>
                                                        <h4 className={classes.storeName}>{store_name}</h4>
                                                    </div>
                                                    <Button onClick={handleSwitchStoreClick(code)}>Shop this store</Button>
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
