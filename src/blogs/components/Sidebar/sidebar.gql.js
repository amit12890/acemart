import gql from "graphql-tag";

const GET_BLOG_TAGS = gql`
    query GetBlogTags {
        blogTags {
            items {
                tag_id
                title
                tag_url
            }
        }
    }
`;

const GET_BLOG_CATEGORIES = gql`
    query GetBlogCategories {
        blogCategories {
            items {
                category_id
                parent_category_id
                title
                category_url
                category_level
                posts_count
            }
        }
    }
`;

const GET_RECENT_POSTS = gql`
    query GetRecentPosts ($pageSize: Int $allPosts: Boolean) {
        blogPosts (pageSize: $pageSize sort: ["DESC"] allPosts: $allPosts) {
            items {
                post_id
                title
                post_url
                featured_image
                creation_time
                publish_time
            }
        }
    }
`;

const GET_FEATURED_POSTS = gql`
    query GetFeaturedPosts ($pageSize: Int, $postIds: [String]) {
        blogPosts (pageSize: $pageSize filter: {post_id: {in: $postIds}}) {
            items {
                post_id
                title
                post_url
                featured_image
                creation_time
                publish_time
            }
        }
    }
`;

const GET_POPULAR_POSTS = gql`
    query GetPopularPosts ($pageSize: Int) {
        blogPosts (pageSize: $pageSize sortFiled: "views_count" sort: ["DESC"]) {
            items {
                post_id
                title
                post_url
                featured_image
                creation_time
                publish_time
            }
        }
    }
`

export default {
    queries: {
        getBlogTagsQuery: GET_BLOG_TAGS,
        getBlogCategoriesQuery: GET_BLOG_CATEGORIES,
        getRecentPostsQuery: GET_RECENT_POSTS,
        getFeaturedPostsQuery: GET_FEATURED_POSTS,
        getPopularPostsQuery: GET_POPULAR_POSTS
    }
};
