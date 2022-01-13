import gql from 'graphql-tag';

const GET_AUTHOR_FILTER = gql`
    query GetAuthorFilter ($currentPage: Int $pageSize: Int $authorId: String) {
        blogPosts (currentPage: $currentPage pageSize: $pageSize sort: ["DESC"] filter: {author_id: {eq: $authorId}}) {
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
        blogAuthor(id: $authorId) {
            name
            meta_title
            meta_description
            author_url
        }
    }
`;

export default {
    queries: {
        getAuthorFilterQuery: GET_AUTHOR_FILTER
    }
};
