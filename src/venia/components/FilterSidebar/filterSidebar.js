import React, { useMemo, useCallback, useRef, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { array, arrayOf, shape, string, number } from 'prop-types';
import { camelCase, find } from 'lodash';
import { useFilterSidebar } from '../../../magento/peregrine/talons/FilterSidebar';

import { useStyle } from '../../classify';
import LinkButton from '../LinkButton';
import CurrentFilters from '../FilterModal/CurrentFilters';
import productLabel from '../../../assets/labelSprite.png';
import FilterBlock from '../FilterModal/filterBlock';
import defaultClasses from './filterSidebar.css';
import CompareListBlock from '../../../components/CompareListPage/compareListBlock';


const style = {
    '--productLabel': `url("${productLabel}")`
};

const SCROLL_OFFSET = 150;

// here purpose is apply positive filter on single click
const staticLabelValue = {
    on_sale: 'Yes',
    free_shipping: 'Yes',
    online_price: 'Yes',
    bulk_savings: 'Yes',
    new_item: 'Yes',
    disallow_pickupatstore: '0'
};

const staticLabelGroups = new Set([
    'on_sale',
    'free_shipping',
    'online_price',
    'bulk_savings',
    'new_item',
    'disallow_pickupatstore'
]);

/**
 * A view that displays applicable and applied filters.
 *
 * @param {Object} props.filters - filters to display
 */
const FilterSidebar = props => {
    const { filters, filterCountToOpen } = props;
    const talonProps = useFilterSidebar({ filters, staticLabelGroups });
    const {
        filterApi,
        filterItems,
        filterNames,
        filterState,
        handleApply,
        handleReset
    } = talonProps;

    const filterRef = useRef();
    const classes = useStyle(defaultClasses, props.classes);

    const handleApplyFilter = useCallback(
        (...args) => {
            const filterElement = filterRef.current;
            if (
                filterElement &&
                typeof filterElement.getBoundingClientRect === 'function'
            ) {
                const filterTop = filterElement.getBoundingClientRect().top;
                const windowScrollY =
                    window.scrollY + filterTop - SCROLL_OFFSET;
                window.scrollTo(0, windowScrollY);
            }

            handleApply(...args);
        },
        [handleApply, filterRef]
    );

    const handleStaticApplyFilter = useCallback(
        (group, item) => () => {
            const { toggleItem } = filterApi;
            // toggle in selected state
            toggleItem({ group, item });
            // apply and refetch data
            handleApplyFilter(group, item);
        },
        [filterApi, handleApplyFilter]
    );

    const filtersList = useMemo(
        () =>
            Array.from(filterItems, ([group, items], iteration) => {
                if (!staticLabelGroups.has(group)) {
                    const blockState = filterState.get(group);
                    const groupName = filterNames.get(group);

                    return (
                        <FilterBlock
                            key={group}
                            filterApi={filterApi}
                            filterState={blockState}
                            group={group}
                            items={items}
                            name={groupName}
                            onApply={handleApplyFilter}
                            initialOpen={true}
                        />
                    );
                }
            }),
        [
            filterApi,
            filterItems,
            filterNames,
            filterState,
            filterCountToOpen,
            handleApplyFilter
        ]
    );

    const toggleFiltersList = useMemo(
        () =>
            Array.from(filterItems, ([group, items], iteration) => {
                if (staticLabelGroups.has(group)) {
                    const groupName = filterNames.get(group);
                    const item = find(items, [
                        'title',
                        staticLabelValue[group]
                    ]);

                    if (item) {
                        const blockState = filterState.get(group);
                        // to show selected filter
                        const isSelected = blockState && blockState.has(item);
                        return (
                            <div
                                className={classes.labelItem}
                                onClick={handleStaticApplyFilter(group, item)}
                            >
                                <i
                                    className={classes[camelCase(group)]}
                                    style={style}
                                />
                                <span className={classes.filterLabel}>
                                    {groupName}
                                </span>
                            </div>
                        );
                    }
                }
            }),
        [
            filterApi,
            filterItems,
            filterNames,
            filterState,
            filterCountToOpen,
            handleApplyFilter
        ]
    );

    const clearAll = filterState.size ? (
        <div className={classes.action}>
            <LinkButton type="button" onClick={handleReset}>
                <FormattedMessage
                    id={'filterModal.action'}
                    defaultMessage={'Clear all'}
                />
            </LinkButton>
        </div>
    ) : null;

    return (
        <Fragment>
            <aside className={classes.root} ref={filterRef}>
                <div className={classes.body}>
                    <div className={classes.header}>
                        <h2 className={classes.headerTitle}>
                            <FormattedMessage
                                id={'filterModal.headerTitle'}
                                defaultMessage={'Filters'}
                            />
                        </h2>
                    </div>
                    <CurrentFilters
                        filterApi={filterApi}
                        filterNames={filterNames}
                        filterState={filterState}
                        onRemove={handleApplyFilter}
                    />
                    {clearAll}
                    <ul className={classes.blocks}>{filtersList}</ul>
                    <div className={classes.labelWrapper}>
                        {toggleFiltersList}
                    </div>
                </div>
                <CompareListBlock />
            </aside>
        </Fragment>
    );
};

FilterSidebar.defaultProps = {
    filterCountToOpen: 3
};

FilterSidebar.propTypes = {
    classes: shape({
        action: string,
        blocks: string,
        body: string,
        header: string,
        headerTitle: string,
        root: string,
        root_open: string
    }),
    filters: arrayOf(
        shape({
            attribute_code: string,
            items: array
        })
    ),
    filterCountToOpen: number
};

export default FilterSidebar;
