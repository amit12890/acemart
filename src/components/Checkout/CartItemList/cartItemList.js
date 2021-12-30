import React from 'react'
import { connect } from 'react-redux'

import { get, size } from 'lodash'


export default connect(store => {
    return {
        cart_items: store.checkout.items
    }
})(React.memo(({
    data = false,
    cart_items
}) => {

    const cartItems = data || cart_items

    return (
        <div>
            <strong className="summary title">{size(cartItems)} Items in Cart</strong>
            <div className="minicart-items-wrapper">
                <ol className="minicart-items">
                    {size(cartItems) > 0 && cartItems.map((item, index) => {
                        let configOpts = get(item, "configurable_options", [])
                        let isConfigProduct = size(configOpts) > 0

                        return (
                            <li className="item product product-item" key={item.id}>
                                <div className="product">
                                    <div className="product-item-photo" style={{
                                        width: 50,
                                        height: 100
                                    }}>
                                        <img src={get(item, "product.small_image.url", "")} alt="" style={{ width: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="product-item-details">
                                        <div className="product-name">
                                            {get(item, "product.name", '')}
                                        </div>
                                        <div className="price-box">
                                            <span className="price">{get(item, "product.price.regularPrice.amount.currency", '') === "USD" && '$'}{get(item, "product.price.regularPrice.amount.value", '')}</span>
                                        </div>
                                        <div className="item-qty">
                                            <span className="label">Qty</span><span className="value">{get(item, "quantity", '')}</span>
                                        </div>
                                        {isConfigProduct &&
                                            configOpts.map((opt, index) => {
                                                return (
                                                    <div className="item-qty" key={opt.id + " " + index}>
                                                        <span className="label">{get(opt, "option_label", '')}</span>
                                                        <span className="value">{get(opt, "value_label", '')}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}))