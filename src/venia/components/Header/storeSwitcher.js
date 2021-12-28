import React, { useState, useCallback } from 'react';
import { shape, string } from 'prop-types';

import { useStoreSwitcher } from '../../../magento/peregrine/talons/Header/useStoreSwitcher';
import { useStyle } from '../../classify';
import defaultClasses from './storeSwitcher.css';
import { Portal } from '@magento/venia-ui/lib/components/Portal';
import Mask from '@magento/venia-ui/lib/components/Mask';
import storeLocatorClasses from '../../../components/StoreLocator/productStoreLocator.css';
import Button from '../Button';
import StoreSwitcherPopupContent from './StoreSwitcherPopupContent';

const StoreSwitcher = props => {
    const {
        availableStores,
        currentGroupName,
        currentStoreName,
        storeGroups,
        availableStoresData,
        handleSwitchStore
    } = useStoreSwitcher();

    const classes = useStyle(defaultClasses, props.classes);
    const [showStoreLocatorPopup, setStoreLocatorPopup] = useState(false);

    if (!availableStores || availableStores.size <= 1) return null;

    const hasOnlyOneGroup = storeGroups.size === 1;

    let triggerLabel;
    if (hasOnlyOneGroup) {
        triggerLabel = `${currentStoreName}`;
    } else {
        triggerLabel = `${currentGroupName} - ${currentStoreName}`;
    }

    // handlers for storelocator popup
    const openStoreLocatorPopup = useCallback(() => {
        setStoreLocatorPopup(true);
    }, [setStoreLocatorPopup]);

    const closeStoreLocatorPopup = useCallback(() => {
        setStoreLocatorPopup(false);
    }, [setStoreLocatorPopup]);

    const handleStoreSwitch = useCallback(code => {
        handleSwitchStore(code);
        closeStoreLocatorPopup();
    }, []);

    return (
        <div className={classes.root}>
            <button
                className={classes.trigger}
                aria-label={currentStoreName}
                onClick={openStoreLocatorPopup}
            >
                <i className={classes.iconWrapper}>
                    <svg
                        className={classes.svgIcon}
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1024px"
                        height="1024px"
                        viewBox="0 0 1024 1024"
                    >
                        <title>location</title>
                        <path
                            d="M806.2,195c-16.7-38.7-39.5-72.5-68.5-101.5S674.9,41.7,636.2,25C597.4,8.5,556.2,0.2,512.7,0v0c-0.2,0-0.5,0-0.7,0
	c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4,0c-0.2,0-0.5,0-0.7,0v0C467.1,0.2,425.9,8.5,387,25c-38.7,16.7-72.5,39.5-101.5,68.5
	S233.7,156.3,217,195c-16.7,39.3-25,81-25,125c0,80,16.7,161.7,50,245c33.3,83.3,70,159,110,227s76.7,123.7,110,167l48.5,63.1v1
	l0.7,0.9l0.4-0.5l0.4,0.5l0.7-0.9v-1l48.5-63.1c33.3-43.3,70-99,110-167s76.7-143.7,110-227c33.3-83.3,50-165,50-245
	C831.2,276,822.9,234.3,806.2,195z M647.2,456c-37.2,37.2-82.5,55.9-135.6,56c-53.2-0.1-98.4-18.8-135.6-56
	c-37.3-37.3-56-82.7-56-136c0-53.3,18.7-98.7,56-136c37.2-37.2,82.5-55.9,135.6-56c53.2,0.1,98.4,18.8,135.6,56
	c37.3,37.3,56,82.7,56,136C703.2,373.3,684.6,418.7,647.2,456z"
                        />
                    </svg>
                </i>
                <div className={classes.storeLabelWrapper}>
                    <span className={classes.storeLabel}>Stores</span>
                    <span className={classes.storeValue}>{triggerLabel}</span>
                </div>
            </button>
            {showStoreLocatorPopup ? (
                <StoreSwitcherPopup
                    closeStoreLocatorPopup={closeStoreLocatorPopup}
                    availableStores={availableStoresData.availableStores}
                    selectStore={handleStoreSwitch}
                    currentStoreName={currentStoreName}
                    currentGroupName={currentGroupName}
                />
            ) : null}
        </div>
    );
};

const StoreSwitcherPopup = ({
    closeStoreLocatorPopup,
    availableStores,
    selectStore,
    currentStoreName,
    currentGroupName
}) => {
    const classes = useStyle(storeLocatorClasses);

    return (
        <Portal>
            <div className={classes.portalWrapper}>
                <Mask isActive={true} dismiss={closeStoreLocatorPopup} />
                <div className={classes.root}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.scrollable}>
                            <div className={classes.modalHeader}>
                                <div className={classes.modalClose}>
                                    <Button onClick={closeStoreLocatorPopup}>
                                        <i className={classes.iconWrapper}>
                                            <svg
                                                className={classes.svgIcon}
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                            >
                                                <title>remove</title>
                                                <path d="M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z" />
                                            </svg>
                                        </i>
                                    </Button>
                                </div>
                            </div>
                            <StoreSwitcherPopupContent
                                availableStores={availableStores}
                                selectStore={selectStore}
                                currentStoreName={currentStoreName}
                                currentGroupName={currentGroupName}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default StoreSwitcher;

StoreSwitcher.propTypes = {
    classes: shape({
        groupList: string,
        groups: string,
        menu: string,
        menu_open: string,
        menuItem: string,
        root: string,
        trigger: string
    })
};
