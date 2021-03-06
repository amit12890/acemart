import React, { Fragment, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import {
    Lock as LockIcon,
    AlertCircle as AlertCircleIcon
} from 'react-feather';
import { bool, shape, string } from 'prop-types';

import { useScrollLock, Price, useToasts } from '@magento/peregrine';
import { useMiniCart } from '../../../magento/peregrine/talons/MiniCart/useMiniCart';
import { useStyle } from '@magento/venia-ui/lib/classify';

import Button from '../Button';
import Icon from '@magento/venia-ui/lib/components/Icon';
import StockStatusMessage from '../../../venia/components/StockStatusMessage';
import ProductList from './ProductList';
import defaultClasses from './miniCart.css';
import operations from './miniCart.gql';
import { checkOutOfStockItem } from '../../../app.utils'

const errorIcon = <Icon src={AlertCircleIcon} size={20} />;

/**
 * The MiniCart component shows a limited view of the user's cart.
 *
 * @param {Boolean} props.isOpen - Whether or not the MiniCart should be displayed.
 * @param {Function} props.setIsOpen - Function to toggle mini cart
 */
const MiniCart = React.forwardRef((props, ref) => {
    const { isOpen, setIsOpen } = props;

    // Prevent the page from scrolling in the background
    // when the MiniCart is open.
    useScrollLock(isOpen);

    const talonProps = useMiniCart({
        setIsOpen,
        operations
    });

    const {
        closeMiniCart,
        errorMessage,
        handleEditCart,
        handleProceedToCheckout,
        handleRemoveItem,
        loading,
        productList,
        subTotal,
        totalQuantity,
        configurableThumbnailSource
    } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);
    const rootClass = isOpen ? classes.root_open : classes.root;
    const contentsClass = isOpen ? classes.contents_open : classes.contents;
    const quantityClassName = loading
        ? classes.quantity_loading
        : classes.quantity;
    const priceClassName = loading ? classes.price_loading : classes.price;

    const isCartEmpty = !(productList && productList.length);

    const hasOutOfStockItem = checkOutOfStockItem(productList || [])
    const disableCheckoutButton = loading || isCartEmpty || hasOutOfStockItem
    const [, { addToast }] = useToasts();

    useEffect(() => {
        if (errorMessage) {
            addToast({
                type: 'error',
                icon: errorIcon,
                message: errorMessage,
                dismissable: true,
                timeout: 7000
            });
        }
    }, [addToast, errorMessage]);

    const header = subTotal ? (
        <Fragment>
            <div className={classes.headerPanelContent}>
                <div className={classes.stockStatusMessageContainer}>
                    <StockStatusMessage cartItems={productList} />
                </div>
                <span className={quantityClassName}>
                    <FormattedMessage
                        id={'miniCart.totalQuantity'}
                        defaultMessage={'Items'}
                        values={{ totalQuantity }}
                    />
                </span>
                <span className={priceClassName}>
                    <span>
                        <FormattedMessage
                            id={'miniCart.subtotal'}
                            defaultMessage={'Subtotal: '}
                        />
                    </span>
                    <Price
                        currencyCode={subTotal.currency}
                        value={subTotal.value}
                    />
                </span>
            </div>
        </Fragment>
    ) : null;

    const contents = isCartEmpty ? (
        <div className={classes.body}>
            <div className={classes.panelRow}>
                <div className={classes.emptyCart}>
                    <div className={classes.emptyMessage}>
                        <FormattedMessage
                            id={'am.cartPage.emptyCart'}
                            defaultMessage={'You have no items in your Shopping cart.'}
                        />
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Fragment>
            <div className={classes.header}>
                <div className={classes.panelRow}>
                    {header}
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.panelRow}>
                    <ProductList
                        items={productList}
                        loading={loading}
                        handleRemoveItem={handleRemoveItem}
                        closeMiniCart={closeMiniCart}
                        configurableThumbnailSource={configurableThumbnailSource}
                    />
                </div>
            </div>
            <div className={classes.footer}>
                <div className={classes.panelRow}>
                    <Button
                        onClick={handleEditCart}
                        priority="high"
                        className={classes.editCartButton}
                        disabled={loading || isCartEmpty}
                    >
                        <FormattedMessage
                            id={'miniCart.editCart.Button'}
                            defaultMessage={'View Cart'}
                        />
                    </Button>
                    <Button
                        onClick={handleProceedToCheckout}
                        priority="high"
                        className={[classes.checkoutButton, disableCheckoutButton && classes.disabledButton].join(" ")}
                        disabled={disableCheckoutButton}
                    >
                        <Icon
                            size={16}
                            src={LockIcon}
                            classes={{
                                icon: classes.checkoutIcon
                            }}
                        />
                        <FormattedMessage
                            id={'miniCart.checkout'}
                            defaultMessage={'CHECKOUT'}
                        />
                    </Button>
                </div>
            </div>
        </Fragment>
    );

    return (
        <aside className={rootClass}>
            <div ref={ref} className={contentsClass}>
                <div onClick={() => setIsOpen(false)} className={classes.modalClose}>
                    <i className={classes.iconWrapper}>
                        <svg
                            className={classes.svgIcon}
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                        >
                            <title>remove</title>
                            <path d="M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z" />
                        </svg>
                    </i>


                </div>
                {contents}
            </div>
        </aside>
    );
});

export default MiniCart;

MiniCart.propTypes = {
    classes: shape({
        root: string,
        root_open: string,
        contents: string,
        contents_open: string,
        header: string,
        body: string,
        footer: string,
        checkoutButton: string,
        editCartButton: string,
        emptyCart: string,
        emptyMessage: string,
        stockStatusMessageContainer: string
    }),
    isOpen: bool
};
