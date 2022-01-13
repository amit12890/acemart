import gql from 'graphql-tag';

const GET_BREADCRUMB_DATA_QUERY = gql`
    query getBreadcrumbData ($categoryId: String) {
        blogCategory (id: $categoryId) {
            category_id
            title
            category_url
            category_url_path
            breadcrumbs {
                category_id
                category_name
                category_level
                category_url_path
            }
        }
    }
`;

export default {
    queries: {
        getBreadcrumbDataQuery: GET_BREADCRUMB_DATA_QUERY
    },
};
