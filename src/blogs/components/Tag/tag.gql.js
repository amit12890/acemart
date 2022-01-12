import gql from 'graphql-tag';

const GET_TAG_FILTER = gql`
    query GetTagFilter ($currentPage: Int $pageSize: Int $tagId: String) {
        blogPosts (currentPage: $currentPage pageSize: $pageSize sort: ["DESC"] filter: {tag_id: {eq: $tagId}}) {
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
        blogTag (id: $tagId) {
            title
            content
            meta_title
            meta_description
            tag_url
        }
    }
`;

export default {
    queries: {
        getTagFilterQuery: GET_TAG_FILTER
    }
};
