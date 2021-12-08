import gql from "graphql-tag";

export const TOP_HEADERS_GQL = gql`
query cmsBlocks{
    topHeader1:cmsBlocks(identifiers: "top-header-1"){
        items {
        content
        identifier
        title
        }
    }
    topHeader2:cmsBlocks(identifiers: "top-header-2"){
        items {
        content
        identifier
        title
        }
    }
}
`