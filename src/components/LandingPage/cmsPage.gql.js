import { gql } from '@apollo/client';

export const GET_CMS_PAGE = gql`
  query cmsPage($identifier: String) {
    cmsPage(identifier: $identifier) {
      identifier
      url_key
      title
      content
      content_heading
      page_layout
      meta_title
      meta_description
      meta_keywords
    }
  }  
`;
