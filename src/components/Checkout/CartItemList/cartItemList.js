import React from 'react'
import { connect } from 'react-redux'

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './cartItemList.css'

import { get, size } from 'lodash'


export default connect(store => {
    return {
        cart_items: store.checkout.items
    }
})(React.memo(({
    data = false,
    cart_items
}) => {
    const classes = useStyle(defaultClasses)
    const cartItems = data || cart_items

    return (
        <div className={[classes.block, classes.cartSummary].join(" ")}>
            <div className={classes.blockTitle}>
                <strong className={classes.title}>
                    <span>{size(cartItems)}</span> Items in Cart
                </strong>
            </div>

            <div className={classes.blockcontent}>
                <div className={classes.miniCartItemsWrapper}>
                    <div className={classes.miniCartItems}>
                        {size(cartItems) > 0 && cartItems.map((item, index) => {
                            let configOpts = get(item, "configurable_options", [])
                            let isConfigProduct = size(configOpts) > 0

                            return (
                                <div className={classes.item} key={item.id}>
                                    <div className={classes.product}>
                                        <div className={classes.thumbnailContainer}>
                                            <img src={get(item, "product.small_image.url", "")} alt="" />
                                        </div>
                                        <div className={classes.productItemDetails}>
                                            <div className={classes.productName}>
                                                {replaceSpecialChars(get(item, "product.name", ''))}
                                            </div>
                                            <div className={classes.priceBox}>
                                                <span className={classes.price}>
                                                    {get(item, "product.price.regularPrice.amount.currency", '') === "USD" && '$'}{get(item, "product.price.regularPrice.amount.value", '')}
                                                </span>
                                            </div>
                                            <div className={classes.qty}>
                                                <span className={classes.label}>Qty</span>
                                                <span className={classes.value}>
                                                    {get(item, "quantity", '')}
                                                </span>
                                            </div>
                                            {isConfigProduct &&
                                                configOpts.map((opt, index) => {
                                                    return (
                                                        <div className={classes.qty} key={opt.id + " " + index}>
                                                            <span className={classes.label}>
                                                                {get(opt, "option_label", '')}
                                                            </span>
                                                            <span className={classes.value}>
                                                                {get(opt, "value_label", '')}
                                                            </span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}))