import gql from 'graphql-tag';

const GET_COMMENTS_QUERY = gql`
    query GetComments ($currentPage: Int $pageSize: Int $postId: String) {
        blogComments (currentPage: $currentPage pageSize: $pageSize filter: {post_id: {eq: $postId}}) {
            total_count
            total_pages
            items {
                comment_id
                creation_time
                author_nickname
                text
                replies {
                    comment_id
                    parent_id
                    creation_time
                    author_nickname
                    text
                }
            }
        }
    }
`;

const ADD_COMMENT_TO_POST = gql`
    mutation AddCommentToPost($currentPage: Int $pageSize: Int $postId: Int! $text: String! $authorNickname: String! $authorEmail: String! $parentId: Int!) {
        addCommentToPost (currentPage: $currentPage pageSize: $pageSize input: {
            post_id: $postId,
            text: $text,
            author_nickname: $authorNickname,
            author_email: $authorEmail,
            parent_id: $parentId
        }) {
            total_pages
            comments {
                comment_id
                creation_time
                author_nickname
                text
                replies {
                    comment_id
                    parent_id
                    creation_time
                    author_nickname
                    text
                }
            }
        }
    }
`;

export default {
    queries: {
        GetCommentsQuery: GET_COMMENTS_QUERY
    },
    mutations: {
        AddCommentToPost: ADD_COMMENT_TO_POST
    }
};
