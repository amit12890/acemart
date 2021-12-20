import gql from "graphql-tag";

export const GET_FOOTER_GQL = gql`
query cmsBlocks{
    footerColumn1:cmsBlocks(identifiers: "footer-column-1"){
        items {
        content
        identifier
        title
        }
    }
    footerColumn2:cmsBlocks(identifiers: "footer-column-2"){
        items {
        content
        identifier
        title
        }
    }
    footerColumn3:cmsBlocks(identifiers: "footer-column-3"){
        items {
        content
        identifier
        title
        }
    }
    footerColumn4:cmsBlocks(identifiers: "footer-column-4"){
        items {
        content
        identifier
        title
        }
    }
}
`