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
