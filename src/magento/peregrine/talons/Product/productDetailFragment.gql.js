import { gql } from '@apollo/client';

export const ProductDetailsFragment = gql`
    fragment ProductDetailsFragment on ProductInterface {
        __typename
        id
        meta_description
        name
        product_name
        sku uom mpn
        youtube_filename
        url_key
        specsheet
        ship_info
        only_x_left_in_stock
        stock_label
        pos_stock_manage {
            hide_add_to_cart
            locate_in_store
        }
        categories {
            id
            breadcrumbs {
                category_id
            }
        }
        description {
            html
        }
        price {
            regularPrice {
                amount {
                    currency
                    value
                }
            }
        }
        media_gallery_entries {
            id
            label
            position
            disabled
            file
        }
        media_gallery {
            url
            label
        }
        small_image {
            url
        }
        additional_information {
            data {
                code label value
            }
        }
        more_information {
            data {
                code label value
            }
        }
        prod_list_attribute {
            data {
                code label value
            }
        }
        productLabel {
            items {
                labelname
                status
                priority
                label_text
            }
            totalCount
        }
        ... on ConfigurableProduct {
            configurable_options {
                attribute_code
                attribute_id
                id
                label
                values {
                    uid
                    default_label
                    label
                    store_label
                    use_default_value
                    value_index
                    swatch_data {
                        ... on ImageSwatchData {
                            thumbnail
                        }
                        value
                    }
                }
            }
            variants {
                attributes {
                    code
                    value_index
                }
                product {
                    id
                    media_gallery_entries {
                        id
                        disabled
                        file
                        label
                        position
                    }
                    sku
                    price {
                        regularPrice {
                            amount {
                                currency
                                value
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const ProductBasicDetailsFragment = gql`
    fragment ProductBasicDetailsFragment on ProductInterface {
        __typename
        id
        name
        product_name
        sku uom mpn
        url_key
        url_suffix
        url_rewrites {
            url
            parameters {
              name
              value
            }
        }
        small_image {
            url
        }
        price {
            regularPrice {
                amount {
                    currency
                    value
                }
            }
        }
    }
`;