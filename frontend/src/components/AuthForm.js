import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

class AuthForm extends Component {
    state = {
        email: '',
        password: ''
    };

    render() {
        const { mutation, submitHandler, error } = this.props;
        const { email, password } = this.state;
        return (
            <Mutation mutation={mutation}>
                {mutation => (
                    <div
                        className="flex flex-column ml3"
                        style={{ width: '15rem' }}
                    >
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
                            className="mt2"
                            style={{ width: '100px' }}
                            onClick={() =>
                                submitHandler({ mutation, email, password })
                            }
                        >
                            Submit
                        </button>
                        {error &&
                            error.map((error, index) => (
                                <span key={index} className="red mt3 dim br1">
                                    {error}
                                </span>
                            ))}
                    </div>
                )}
            </Mutation>
        );
    }
}

export default AuthForm;
