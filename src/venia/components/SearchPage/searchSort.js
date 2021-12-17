import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { ChevronDown as ArrowDown, Check } from 'react-feather';
import { FormattedMessage } from 'react-intl';
import { useDropdown } from '@magento/peregrine/lib/hooks/useDropdown';

import { useStyle } from '../../classify';
import defaultClasses from './searchSort.css';
import Button from '../Button';
import Icon from '../Icon';
import { findIndex, get } from 'lodash';

const SearchSort = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const { sortProps, setSort } = props;
    const { elementRef, expanded, setExpanded } = useDropdown();
    const [currentSortIndex, setSortIndex] = useState(null);

    useEffect(() => {
        let index = findIndex(sortProps, ['active', 1]);
        if (index === -1) {
            index = 0;
        }
        setSortIndex(index);
    }, [sortProps, setSortIndex]);

    // click event for menu items
    const handleItemClick = useCallback(
        (sort, index) => () => {
            setSort(sort);
            setExpanded(false);
            setSortIndex(index);
        },
        [setExpanded, setSortIndex, setSort]
    );

    // expand or collapse on click
    const handleSortClick = () => {
        setExpanded(!expanded);
    };

    const sortElements = useMemo(() => {
        // should be not render item in collapsed mode.
        if (!expanded) {
            return null;
        }

        const itemElements = sortProps.map((sort, index) => {
            // shape : { direction, field, label }
            const key = `${sort.field}--${sort.direction}`;
            const activeIcon =
                currentSortIndex === index ? (
                    <Icon size={20} src={Check} />
                ) : null;
            return (
                <li key={key} className={classes.menuItem}>
                    <button
                        className={classes.root}
                        onClick={handleItemClick(sort, index)}
                    >
                        <span className={classes.content}>
                            <span className={classes.text}>
                                {sort.label}
                            </span>
                            {activeIcon}
                        </span>
                    </button>
                </li>
            );
        });

        return (
            <div className={classes.menu}>
                <ul>{itemElements}</ul>
            </div>
        );
    }, [expanded, sortProps, handleItemClick, currentSortIndex]);

    return (
        <div ref={elementRef} className={classes.root}>
            <span className={classes.label}>
                <FormattedMessage
                    id={'productSort.sortButton'}
                    defaultMessage={'Sort'}
                />
            </span>
            <Button
                priority={'low'}
                classes={{
                    root_lowPriority: classes.sortButton
                }}
                onClick={handleSortClick}
            >
                <span className={classes.desktopText}>
                    <span className={classes.sortText}>
                        {get(sortProps, `${currentSortIndex}.label`, '')}
                    </span>
                    <Icon
                        src={ArrowDown}
                        classes={{
                            root: classes.desktopIconWrapper,
                            icon: classes.desktopIcon
                        }}
                    />
                </span>
            </Button>
            {sortElements}
        </div>
    );
};

export default SearchSort;
