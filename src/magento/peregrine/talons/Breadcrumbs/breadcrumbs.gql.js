import { gql } from '@apollo/client';

export const GET_BREADCRUMBS = gql`
    query GetBreadcrumbs($category_id: Int!) {
        category(id: $category_id) {
            breadcrumbs {
                category_id
                category_uid
                # We may not need level if \`breadcrumbs\` is sorted.
                category_level
                category_name
                category_url_key
                category_url_path
            }
            id
            name
            url_path
            url_suffix
            url_key
        }
    }
`;

export default {
    getBreadcrumbsQuery: GET_BREADCRUMBS
};
