import { gql } from '@apollo/client';

export const ProductDetailsFragment = gql`
    fragment ProductDetailsFragment on ProductInterface {
        __typename
        categories {
            id
            breadcrumbs {
                category_id
            }
        }
        description {
            html
        }
        id
        media_gallery_entries {
            id
            label
            position
            disabled
            file
        }
        meta_description
        name
        product_name
        price {
            regularPrice {
                amount {
                    currency
                    value
                }
            }
        }
        sku uom mpn
        youtube_filename
        small_image {
            url
        }
        additional_information {
            data {
                code label value
            }
        }
        url_key
        specsheet
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