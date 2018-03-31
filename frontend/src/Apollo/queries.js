import gql from 'graphql-tag';

export const CHECK_USER = gql`
    {
        currentUser {
            id
            email
        }
    }
`;
