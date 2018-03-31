import gql from 'graphql-tag';

export const LOG_OUT = gql`
    mutation {
        logOut {
            id
            email
        }
    }
`;

export const LOG_IN = gql`
    mutation LogIn($email: String, $password: String) {
        logIn(email: $email, password: $password) {
            id
            email
        }
    }
`;

export const SIGN_UP = gql`
    mutation SignUp($email: String, $password: String) {
        signUp(email: $email, password: $password) {
            id
            email
        }
    }
`;
