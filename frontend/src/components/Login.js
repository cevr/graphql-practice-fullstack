import React, { Component, Fragment } from 'react';
import { LOG_IN } from '../Apollo/mutations';
import { withRouter } from 'react-router-dom';
import AuthForm from './AuthForm';
import { CHECK_USER } from '../Apollo/queries';

class Login extends Component {
    state = { error: [] };

    onLogin = ({ mutation, email, password }) => {
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
                    submitHandler={this.onLogin}
                    mutation={LOG_IN}
                    error={error}
                />
            </Fragment>
        );
    }
}

export default withRouter(Login);
