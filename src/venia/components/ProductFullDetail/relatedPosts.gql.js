import { gql } from '@apollo/client';

export const GET_PRODUCT_RELATED_POSTS = gql`
    query getRelatedPosts($product_id: String!) {
        blogPosts(
            filter: { relatedproduct_id: { eq: $product_id } },
            sort:"DESC",
            sortFiled:"post_id"
        ) {
            items {
              post_id
              title
              post_url
              featured_image
              short_filtered_content
            }
          }
    }
`;

export default {
    getRelatedPostsQuery: GET_PRODUCT_RELATED_POSTS
};
