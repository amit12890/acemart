import React from 'react';
import { shape, string } from 'prop-types';

import { useStoreSwitcher } from '@magento/peregrine/lib/talons/Header/useStoreSwitcher';

import { useStyle } from '../../classify';
import defaultClasses from './storeSwitcher.css';
import SwitcherItem from './switcherItem';

const StoreSwitcher = props => {
    const {
        availableStores,
        currentGroupName,
        currentStoreName,
        handleSwitchStore,
        storeGroups,
        storeMenuRef,
        storeMenuTriggerRef,
        storeMenuIsOpen,
        handleTriggerClick
    } = useStoreSwitcher();

    const classes = useStyle(defaultClasses, props.classes);
    const menuClassName = storeMenuIsOpen ? classes.menu_open : classes.menu;

    if (!availableStores || availableStores.size <= 1) return null;

    const groups = [];
    const hasOnlyOneGroup = storeGroups.size === 1;

    storeGroups.forEach((group, key) => {
        const stores = [];
        group.forEach(({ storeGroupName, storeName, isCurrent, code }) => {
            let label;
            if (hasOnlyOneGroup) {
                label = `${storeName}`;
            } else {
                label = `${storeGroupName} - ${storeName}`;
            }
            stores.push(
                <li key={code} className={classes.menuItem}>
                    <SwitcherItem
                        active={isCurrent}
                        onClick={handleSwitchStore}
                        option={code}
                    >
                        {label}
                    </SwitcherItem>
                </li>
            );
        });

        groups.push(
            <ul className={classes.groupList} key={key}>
                {stores}
            </ul>
        );
    });

    let triggerLabel;
    if (hasOnlyOneGroup) {
        triggerLabel = `${currentStoreName}`;
    } else {
        triggerLabel = `${currentGroupName} - ${currentStoreName}`;
    }

    return (
        <div className={classes.root}>
            <button
                className={classes.trigger}
                aria-label={currentStoreName}
                onClick={handleTriggerClick}
                ref={storeMenuTriggerRef}
            >
                <i className={classes.iconWrapper}>
                    <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <title>location</title>
                        <path d="M16 0q-2.063 0-3.906 0.781-1.813 0.781-3.172 2.141t-2.141 3.172q-0.781 1.844-0.781 3.906 0 3.75 1.563 7.656t3.438 7.094 3.438 5.219l1.563 2.031 1.563-2.031t3.438-5.219 3.438-7.094 1.563-7.656q0-2.063-0.781-3.906-0.781-1.813-2.141-3.172t-3.172-2.141q-1.844-0.781-3.906-0.781zM16 16q-2.5 0-4.25-1.75t-1.75-4.25 1.75-4.25 4.25-1.75 4.25 1.75 1.75 4.25-1.75 4.25-4.25 1.75z"></path>
                    </svg>
                </i>
                {triggerLabel}
            </button>
            <div ref={storeMenuRef} className={menuClassName}>
                <div className={classes.groups}>{groups}</div>
            </div>
        </div>
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
