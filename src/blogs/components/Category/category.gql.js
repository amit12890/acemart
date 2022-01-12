import gql from 'graphql-tag';

const GET_CATEGORY_FILTER = gql`
    query GetCategoryFilter ($currentPage: Int $pageSize: Int $categoryId: String) {
        blogPosts (currentPage: $currentPage pageSize: $pageSize sort: ["DESC"] filter: {category_id: {eq: $categoryId}}) {
            total_count
            items {
                post_id
                title
                short_filtered_content
                featured_image
                author {
                    author_id
                    name
                    author_url
                }
                post_url
                identifier
                publish_time
                tags {
                    tag_id
                    title
                    tag_url
                }
                categories {
                    category_id
                    title
                    category_url
                }
            }
            total_pages
        }
        blogCategory (id: $categoryId) {
            title
            content
            meta_title
            meta_description
            canonical_url
        }
    }
`;

export default {
    queries: {
        getCategoryFilterQuery: GET_CATEGORY_FILTER
    }
};
