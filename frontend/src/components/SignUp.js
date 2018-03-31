import React from 'react';
import AuthForm from './AuthForm';
import { SIGN_UP } from '../Apollo/mutations';
import { CHECK_USER } from '../Apollo/queries';

const SignUp = props => {
    const onSignUp = ({ mutation, email, password }) => {
        mutation({
            variables: { email, password },
            refetchQueries: [{ query: CHECK_USER }]
        });
    };
    return <AuthForm mutation={SIGN_UP} submitHandler={onSignUp} />;
};

export default SignUp;
