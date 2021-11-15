import { gql } from '@apollo/client';

export const GET_MEGA_MENU = gql`
    query getMegaMenu {
        categoryList {
            id
            name
            children {
                id
                include_in_menu
                name
                position
                url_path
                url_suffix
                canonical_url
                children {
                    id
                    include_in_menu
                    name
                    position
                    url_path
                    url_suffix
                    canonical_url
                    children {
                        id
                        include_in_menu
                        name
                        position
                        url_path
                        url_suffix
                        canonical_url
                    }
                }
            }
        }
    }
`;

export default {
    getMegaMenuQuery: GET_MEGA_MENU
};
