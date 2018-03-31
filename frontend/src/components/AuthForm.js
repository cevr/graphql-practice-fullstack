import React, { PureComponent, Fragment } from 'react';
import { Mutation } from 'react-apollo';

class AuthForm extends PureComponent {
    state = {
        email: '',
        password: ''
    };
    render() {
        const { mutation, submitHandler } = this.props;
        const { email, password } = this.state;
        return (
            <Mutation mutation={mutation}>
                {mutation => (
                    <Fragment>
                        <label>Email</label>
                        <input
                            onChange={event =>
                                this.setState({ email: event.target.value })
                            }
                            type="email"
                        />
                        <label>Password</label>
                        <input
                            onChange={event =>
                                this.setState({ password: event.target.value })
                            }
                            type="password"
                        />
                        <button
                            onClick={() =>
                                submitHandler({ mutation, email, password })
                            }
                        >
                            Submit
                        </button>
                    </Fragment>
                )}
            </Mutation>
        );
    }
}

export default AuthForm;
