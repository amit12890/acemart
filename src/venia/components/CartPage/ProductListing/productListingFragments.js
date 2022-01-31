import { gql } from '@apollo/client';

export const ProductListingFragment = gql`
    fragment ProductListingFragment on Cart {
        id
        items {
            id
            product {
                id
                name
                sku
                url_key
                url_suffix
                uom
                ship_time
                url_rewrites {
                    url
                    parameters {
                      name
                      value
                    }
                }
                crosssell_products {
                    uid sku
                }
                thumbnail {
                    url
                }
                small_image {
                    url
                }
                only_x_left_in_stock
                qty_increments
                stock_status
                ... on ConfigurableProduct {
                    variants {
                        attributes {
                            uid
                        }
                        product {
                            id
                            small_image {
                                url
                            }
                        }
                    }
                }
            }
            prices {
                price {
                    currency
                    value
                }
            }
            quantity
            ... on ConfigurableCartItem {
                configurable_options {
                    id
                    configurable_product_option_value_uid
                    option_label
                    value_id
                    value_label
                }
            }
        }
    }
`;
