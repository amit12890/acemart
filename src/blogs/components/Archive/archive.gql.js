import gql from 'graphql-tag';

const GET_POST_ARCHIVE = gql`
    query GetPostArchive ($currentPage: Int $pageSize: Int $date: String) {
        blogPosts (
            currentPage: $currentPage
            pageSize: $pageSize
            sort: ["DESC"]
            filter: {publish_time: {like: $date}}
        ) {
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
        getPostArchive: GET_POST_ARCHIVE
    }
};
