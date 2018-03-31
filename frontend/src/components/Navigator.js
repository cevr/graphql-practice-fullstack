import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';

import { CHECK_USER } from '../Apollo/queries';
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
        console.log(props);
        return currentUser ? (
            <Mutation mutation={LOG_OUT}>
                {logOut => (
                    <nav className="flex justify-start pl4">
                        <a
                            className="link pointer dim"
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
        return (
            <Query query={CHECK_USER}>
                {({ data: { currentUser }, loading, client }) => {
                    return !loading ? (
                        this.renderNavigator({
                            pathname: location.pathname,
                            currentUser,
                            client
                        })
                    ) : (
                        <div>Loading...</div>
                    );
                }}
            </Query>
        );
    }
}

export default withRouter(Navigator);
