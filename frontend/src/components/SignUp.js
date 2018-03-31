import React, { Component, Fragment } from 'react';
import AuthForm from './AuthForm';
import { SIGN_UP } from '../Apollo/mutations';
import { CHECK_USER } from '../Apollo/queries';

class SignUp extends Component {
    state = { error: [] };
    onSignUp = ({ mutation, email, password }) => {
        mutation({
            variables: { email, password },
            refetchQueries: [{ query: CHECK_USER }]
        })
            .then(() => this.props.loginHandler())
            .catch(({ graphQLErrors }) =>
                graphQLErrors.map(error =>
                    this.setState({
                        error: this.state.error.concat(error.message)
                    })
                )
            );
    };
    render() {
        const { error } = this.state;
        return (
            <Fragment>
                <AuthForm
                    mutation={SIGN_UP}
                    submitHandler={this.onSignUp}
                    error={error}
                />
            </Fragment>
        );
    }
}

export default SignUp;
