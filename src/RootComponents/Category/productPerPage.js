import React, { useMemo, useCallback } from 'react';
import { useDropdown } from '@magento/peregrine/lib/hooks/useDropdown';
import { ChevronDown as ArrowDown } from 'react-feather';
import { useLocation, useHistory } from 'react-router-dom';

import { useStyle } from '../../venia/classify';
import Button from '../../venia/components/Button';
import Icon from '../../venia/components/Icon';

import defaultClasses from './productPerPage.css';

const PAGE_ITEMS = [12, 24, 36, 48];

const productPerPage = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const { pageSize } = props;
    const { elementRef, expanded, setExpanded } = useDropdown();

    const { search, pathname } = useLocation();
    const history = useHistory();

    // click event for menu items
    const handleItemClick = useCallback(
        page => () => {
            const params = new URLSearchParams(search);
            params.set("product_list_limit", page)
            history.push({ pathname, search: params.toString() });
        },
        [setExpanded, search, pathname, history]
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
                            <span className={classes.text}>{page}</span>
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
                    <span className={classes.pageText}>{pageSize}</span>
                    <Icon
                        src={ArrowDown}
                        classes={{
                            root: classes.desktopIconWrapper,
                            icon: classes.desktopIcon
                        }}
                    />
                </span>
            </Button>
            <span className={classes.label}>per page</span>
            {sortElements}
        </div>
    );
};

export default productPerPage;
