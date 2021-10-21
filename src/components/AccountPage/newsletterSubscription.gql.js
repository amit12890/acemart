import { gql } from '@apollo/client';

export const GET_CUSTOMER_SUBSCRIPTION = gql`
    query GetCustomerInformation {
        customer {
            id, is_subscribed, email
        }
    }
`;

export const SET_CUSTOMER_SUBSCRIPTION = gql`
    mutation SetCustomerSubscription($email: String!) {
        subscribeEmailToNewsletter(email: $email){
            status
        }
    }
`;