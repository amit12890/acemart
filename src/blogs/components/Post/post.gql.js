import gql from 'graphql-tag';

const GET_POST_QUERY = gql`
    query GetPost ($postId: String) {
        blogPost (id: $postId) {
            post_id
            meta_title
            meta_description
            canonical_url
            title
            filtered_content
            featured_image
            author {
                author_id
                name
                author_url
            }
            post_url
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
                breadcrumbs {
                    category_id
                }
            }
            related_posts {
                post_id
                title
                post_url
                featured_image
            }
            related_products
        }
    }
`;

export default {
    queries: {
        getPostQuery: GET_POST_QUERY
    }
};
