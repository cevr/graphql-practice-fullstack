import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';

import { LOG_OUT } from '../Apollo/mutations';

class Navigator extends PureComponent {
    logOutHandler = (mutation, client) => {
        const { history } = this.props;
        mutation().then(({ data }) => {
            history.push('/');
            client.resetStore();
        });
    };
    renderNavigator = props => {
        const { currentUser, client } = props;
        return currentUser ? (
            <Mutation mutation={LOG_OUT}>
                {logOut => (
                    <nav className="flex justify-between w-70 center">
                        <div>
                            <Link to="/" className="link pointer dim">
                                Home
                            </Link>

                            <Link
                                to="/dashboard"
                                className="link pointer dim ml3"
                            >
                                Dashboard
                            </Link>
                        </div>
                        <a
                            className="link pointer dim ml3 "
                            onClick={() => this.logOutHandler(logOut, client)}
                        >
                            Logout
                        </a>
                    </nav>
                )}
            </Mutation>
        ) : (
            <nav>
                <ul>
                    <li>
                        <Link className="link pointer dim" to="/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className="link pointer dim" to="/signup">
                            Signup
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    };
    render() {
        const { location } = this.props;
        const { data: { currentUser }, loading, client } = this.props.queryData;
        return !loading ? (
            this.renderNavigator({
                pathname: location.pathname,
                currentUser,
                client
            })
        ) : (
            <div>Loading...</div>
        );
    }
}

export default withRouter(Navigator);
