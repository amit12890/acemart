
import React, { useMemo, useCallback } from 'react';
import { useDropdown } from '@magento/peregrine/lib/hooks/useDropdown';
import { ChevronDown as ArrowDown } from 'react-feather';

import { useStyle } from '../../venia/classify';
import Button from '../../venia/components/Button';
import Icon from '../../venia/components/Icon';

import defaultClasses from './questionAnswerPerPage.css';

const PAGE_ITEMS = [10, 20, 50];

const qaPerPage = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const { pageSize, pageSizeSelect } = props;
    const { elementRef, expanded, setExpanded } = useDropdown();

    // click event for menu items
    const handleItemClick = useCallback(
        pageNumber => () => {
            pageSizeSelect(pageNumber)
        },
        [setExpanded]
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
            {sortElements}
        </div>
    );
};

export default qaPerPage;
