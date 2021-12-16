import React from 'react';
import { useIntl } from 'react-intl';
import Price from '../../Price';

import { useStyle } from '../../../classify';
import defaultClasses from './priceSummary.css';

/**
 * Reduces applied tax amounts into a single amount.
 *
 * @param {Array} applied_taxes
 */
const getEstimatedTax = (applied_taxes = []) => {
    return {
        currency: applied_taxes[0].amount.currency,
        value: applied_taxes.reduce((acc, tax) => acc + tax.amount.value, 0)
    };
};

/**
 * A component that renders the tax summary line item.
 *
 * @param {Object} props.classes
 * @param {Object} props.data query response data
 */
const TaxSummary = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const { data, isCheckout } = props;
    const { formatMessage } = useIntl();

    // Don't render estimated taxes until an address has been provided which
    // causes the server to apply a tax value to the cart.
    // if (!data.length) {
    //     return null;
    // }

    const taxLabel = isCheckout
        ? formatMessage({
            id: 'taxSummary.tax',
            defaultMessage: 'Tax'
        })
        : formatMessage({
            id: 'am.taxSummary.estimatedTax',
            defaultMessage: 'Tax'
        });

    let tax;
    if (data.length) {
        tax = getEstimatedTax(props.data);
    } else {
        // show default tax if tax array is empty
        tax = { value: 0, currency: "USD" };
    }

    return (
        <div className={classes.summaryItem}>
            <span className={classes.lineItemLabel}>{taxLabel}</span>
            <span className={classes.price}>
                <Price value={tax.value} currencyCode={tax.currency} />
            </span>
        </div>
    );
};

export default TaxSummary;
