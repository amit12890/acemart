import { gql } from '@apollo/client';

export const CategoryFragment = gql`
    fragment CategoryFragment on CategoryTree {
        id
        meta_title
        meta_keywords
        meta_description
        children{
            id
            name
            image
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
            small_image {
                url
            }
            url_key
            url_suffix
            on_sale
            prod_temp
            uom
        }
        page_info {
            total_pages
        }
        total_count
    }
`;