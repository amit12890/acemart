import { gql } from '@apollo/client';

export const ProductDetailsFragment = gql`
    fragment ProductDetailsFragment on ProductInterface {
        __typename
        id
        meta_title
        meta_description
        name
        brand
        brand_name
        product_name
        sku uom mpn
        youtube_filename
        url_key
        specsheet
        ship_info
        only_x_left_in_stock
        stock_status
        rating_summary
        review_count
        ship_time
        price_tiers {
            quantity
            final_price {
                value
                currency
            }
        }
        pos_stock_manage {
            availability
            warehouse_qty
            store_qty
            hide_add_to_cart
            locate_in_store
            stock_label
            ship_time_label
            stock_final_label
            same_as_stock_label
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