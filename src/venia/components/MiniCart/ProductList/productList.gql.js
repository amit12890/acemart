export const ProductListFragment = gql`
    fragment ProductListFragment on Cart {
        id
        items {
            id
            product {
                id
                name
                url_key
                url_suffix
                url_rewrites {
                    url
                    parameters {
                      name
                      value
                    }
                }
                thumbnail {
                    url
                }
                stock_status
                ... on ConfigurableProduct {
                    variants {
                        attributes {
                            uid
                        }
                        product {
                            id
                            thumbnail {
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
                    option_label
                    value_id
                    value_label
                }
            }
        }
    }
`;