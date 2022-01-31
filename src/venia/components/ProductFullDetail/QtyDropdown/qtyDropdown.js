import React, { useCallback, useMemo } from 'react';

import { ChevronDown as ArrowDown } from 'react-feather';
import { useFieldApi, useFieldState } from 'informed';
import { get } from 'lodash';

import Button from '../../Button';
import Icon from '../../Icon';

import { useStyle } from '../../../classify';
import { useDropdown } from '@magento/peregrine/lib/hooks/useDropdown';
import { useQuantity } from '../../../../magento/peregrine/talons/CartPage/useQuantity';

import defaultClasses from './qtyDropdown.css';
import { Form, Select, useFormApi } from 'informed';

const QtyDropdown = props => {
    const {
        initialValue,
        itemId,
        label,
        min,
        onChange,
        message,
        incrementQty,
        maxAvailableQty
    } = props;
    const classes = useStyle(defaultClasses);

    const { elementRef, expanded, setExpanded } = useDropdown();
    const fieldApi = useFieldApi('quantity');

    const talonProps = useQuantity({
        initialValue: incrementQty,
        min,
        onChange
    });

    const { setQty, handleBlur, quantity } = talonProps;

    const qtyItems = [];
    for (let i = incrementQty; i <= maxAvailableQty; i = i + incrementQty) {
        qtyItems.push(i);
    }
    // console.log("🚀 ~ file: qtyDropdown.js ~ line 9 ~ qtyItems", qtyItems)

    const handleClick = useCallback(() => {
        setExpanded(!expanded);
    }, [expanded]);

    const handleItemClick = useCallback(
        newQty => {
            setQty(newQty);
            setExpanded(false);
            fieldApi.setValue(newQty);
        },
        [fieldApi]
    );

    const sortElements = useCallback(() => {
        // should be not render item in collapsed mode.
        if (!expanded) {
            return null;
        }

        const itemElements = qtyItems.map(qty => {
            return (
                <li key={qty} className={classes.menuItem}>
                    <button
                        className={classes.root}
                        onClick={e => {
                            e.preventDefault();
                            handleItemClick(qty);
                        }}
                    >
                        <span className={classes.content}>
                            <span className={classes.text}>{qty}</span>
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
    }, [expanded, qtyItems]);

    return (
        <div ref={elementRef} className={classes.root}>
            <Button
                priority={'low'}
                classes={{
                    root_lowPriority: classes.sortButton
                }}
                onClick={handleClick}
            >
                <span className={classes.desktopText}>
                    <span className={classes.pageText}>{quantity}</span>
                    <Select
                        field="quantity"
                        name="quantity"
                        label=""
                        initialValue={props.min}
                        style={{ display: 'none' }}
                    />
                    <Icon
                        src={ArrowDown}
                        classes={{
                            root: classes.desktopIconWrapper,
                            icon: classes.desktopIcon
                        }}
                    />
                </span>
            </Button>
            {sortElements()}
        </div>
    );
};

const Quantity = props => {
    return (
        <Form
            initialValues={{
                quantity: props.initialValue
            }}
        >
            <QtyDropdown {...props} />
        </Form>
    );
};

Quantity.defaultProps = {
    initialValue: 1,
    label: 'Quantity',
    onChange: () => {}
};

QtyDropdown.defaultProps = {
    min: 0,
    initialValue: 1,
    onChange: () => {}
};

export default QtyDropdown;
