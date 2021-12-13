import { gql } from '@apollo/client';

export const GET_LANDING_PAGE = gql`
  query landingPage($identifier: String) {
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
    blogPosts(currentPage:1,pageSize:6,sort:"DESC",sortFiled:"post_id"){
      items{
        post_id
        title
        post_url
        featured_image
        short_filtered_content
        canonical_url
      }
    }
    brand(currentPage:1,pageSize:10,sort:"ASC",featuredBrands:true){
      items {            
        attribute_id
        attribute_code
        option_id                        
        brand_label
        brand_thumbnail                        
        url                        
      }
    }
  }  
`;