import gql from 'graphql-tag';

const GET_RELATED_POSTS = gql`
    query getRelatedPosts($pageSize: Int $relateProductId: String) {
        blogPosts(pageSize: $pageSize filter: {relatedproduct_id: {eq: $relateProductId}}) {
            items {
                post_id
                title
            }
        }
    }
`;

export default {
    queries: {
        getRelatedPostsQuery: GET_RELATED_POSTS
    }
};
