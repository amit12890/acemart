import gql from 'graphql-tag';

const GET_POSTS_QUERY = gql`
    query GetPosts ($currentPage: Int $pageSize: Int $sortField: String $sort: [String]) {
        blogPosts (currentPage: $currentPage pageSize: $pageSize sortFiled: $sortField sort: $sort) {
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
    }
`;

export default {
    queries: {
        getPostsQuery: GET_POSTS_QUERY
    }
};
