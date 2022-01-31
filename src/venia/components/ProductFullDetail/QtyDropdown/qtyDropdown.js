import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useFieldApi, useFieldState } from 'informed';
import { get } from 'lodash';

import { useStyle } from '../../../classify';

import defaultClasses from './qtyDropdown.css';
import { Select } from 'informed';


export const SimpleQtyDropdown = ({ incrementQty, maxAvailableQty, initialValue, onChange }) => {
    const classes = useStyle(defaultClasses);
    const [selectedQty, setSelctedQty] = useState(initialValue)

    useEffect(() => {
        setSelctedQty(initialValue)
    }, [initialValue])


    const qtyItems = [];
    for (let i = incrementQty; i <= maxAvailableQty; i = i + incrementQty) {
        qtyItems.push(i);
    }

    const sortElements = useMemo(() => {
        return qtyItems.map(qty => {
            return (
                <option value={qty} key={qty}>{qty}</option>
            );
        });
    }, [qtyItems]);

    return (
        <div className={classes.root}>
            <select
                name="quantity"
                value={selectedQty}
                initialValue={initialValue}
                onChange={(e) => {
                    e.preventDefault()
                    setSelctedQty(e.target.value)
                    onChange(e.target.value)
                }}
                className={classes.qtySelect}>
                {sortElements}
            </select>
        </div>
    );
}

const QtyDropdown = props => {
    const {
        incrementQty,
        maxAvailableQty
    } = props;

    const classes = useStyle(defaultClasses);
    // const { elementRef, expanded, setExpanded } = useDropdown();
    const fieldApi = useFieldApi('quantity');
    const { value: quantity } = useFieldState('quantity');

    const qtyItems = [];
    for (let i = incrementQty; i <= maxAvailableQty; i = i + incrementQty) {
        qtyItems.push(i);
    }

    const handleItemClick = useCallback(
        newQty => {
            fieldApi.setValue(newQty);
        },
        [fieldApi]
    );

    const sortElements = useMemo(() => {
        return qtyItems.map(qty => {
            return (
                <option value={qty} key={qty}>{qty}</option>
            );
        });
    }, [qtyItems]);

    return (
        <div className={classes.root}>
            <Select
                field="quantity"
                name="quantity"
                value={quantity}
                initialValue={incrementQty}
                onChange={(e) => {
                    e.preventDefault()
                    handleItemClick(e.target.value)
                }}
                className={classes.qtySelect}>
                {sortElements}
            </Select>
        </div>
    );
};

QtyDropdown.defaultProps = {
    min: 0,
    initialValue: 1,
    onChange: () => { }
};

export default QtyDropdown;
