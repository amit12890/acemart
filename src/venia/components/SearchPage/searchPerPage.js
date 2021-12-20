import React, { useMemo, useCallback } from 'react';
import { useDropdown } from '@magento/peregrine/lib/hooks/useDropdown';
import { ChevronDown as ArrowDown } from 'react-feather';

import { useStyle } from '../../classify';
import Button from '../Button';
import Icon from '../Icon';
import { get } from 'lodash';

import defaultClasses from './searchPerPage.css';

const PAGE_ITEMS = [12, 24, 48];

const SearchPerPage = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const { pagination, setPerPage } = props;
    const { elementRef, expanded, setExpanded } = useDropdown();

    // click event for menu items
    const handleItemClick = useCallback(
        page => () => {
            setPerPage(page);
            setExpanded(false);
        },
        [setExpanded, setPerPage]
    );

    // expand or collapse on click
    const handleClick = () => {
        setExpanded(!expanded);
    };

    const sortElements = useMemo(() => {
        // should be not render item in collapsed mode.
        if (!expanded) {
            return null;
        }

        const itemElements = PAGE_ITEMS.map(page => {
            return (
                <li key={page} className={classes.menuItem}>
                    <button
                        className={classes.root}
                        onClick={handleItemClick(page)}
                    >
                        <span className={classes.content}>
                            <span className={classes.text}>
                                {page}
                            </span>
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
    }, [expanded]);

    return (
        <div ref={elementRef} className={classes.root}>
            <span className={classes.label}>Show</span>
            <Button
                priority={'low'}
                classes={{
                    root_lowPriority: classes.sortButton
                }}
                onClick={handleClick}
            >
                <span className={classes.desktopText}>
                    <span className={classes.pageText}>
                        {get(pagination, `perPage`, '')}
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

export default SearchPerPage;
