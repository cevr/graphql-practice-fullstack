import React from 'react';
import { LOG_IN } from '../Apollo/mutations';
import { withRouter } from 'react-router-dom';
import AuthForm from './AuthForm';
import { CHECK_USER } from '../Apollo/queries';
const Login = props => {
    const onLogin = ({ mutation, email, password }) => {
        mutation({
            variables: { email, password },
            refetchQueries: [{ query: CHECK_USER }]
        }).then(() => {
            props.history.push('/home');
        });
    };

    return <AuthForm submitHandler={onLogin} mutation={LOG_IN} />;
};

export default withRouter(Login);
