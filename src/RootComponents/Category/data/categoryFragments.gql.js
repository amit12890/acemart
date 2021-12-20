import { gql } from '@apollo/client';

export const CategoryFragment = gql`
    fragment CategoryFragment on CategoryTree {
        id
        meta_title
        meta_keywords
        meta_description
        canonical_url
        children{
            id
            name
            image
            url_key
            url_path
            url_suffix
        }
    }
`;

export const ProductsFragment = gql`
    fragment ProductsFragment on Products {
        items {
            id
            name
            price {
                regularPrice {
                    amount {
                        currency
                        value
                    }
                }
            }
            prod_dimensions
            manufacturer
            brand
            brand_name
            mpn
            product_name
            capacity
            certifications
            prod_note
            output
            sku
            rating_summary
            review_count
            small_image {
                url
            }
            url_key
            url_suffix
            url_rewrites {
                url
                parameters {
                  name
                  value
                }
            }
            on_sale
            prod_temp
            uom
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
        }
        page_info {
            total_pages
        }
        total_count
    }
`;
