import { gql } from '@apollo/client';

export const CUSTOMER_TOKEN_MUTATION = gql`
mutation generateCustomerTokenOnSecret($secret:String!) {
    generateCustomerTokenOnSecret(
        input: {
        secret: $secret      
        }
    ) {
        customer_token
    }
}
`
  