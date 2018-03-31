import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';

import Navigator from './components/Navigator';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { CHECK_USER } from './Apollo/queries';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

class App extends Component {
    state = { isLoggedIn: false };

    logInHandler = () => {
        this.setState({ isLoggedIn: true });
        this.props.history.push('/dashboard');
    };
    render() {
        const { location } = this.props;
        return (
            <div>
                <Query query={CHECK_USER}>
                    {userData => (
                        <Fragment>
                            <Navigator
                                location={location.pathname}
                                queryData={userData}
                            />
                            <Switch>
                                <Route
                                    path="/signup"
                                    render={() => (
                                        <SignUp
                                            loginHandler={this.logInHandler}
                                        />
                                    )}
                                />
                                <Route
                                    path="/login"
                                    render={() => (
                                        <Login
                                            loginHandler={this.logInHandler}
                                        />
                                    )}
                                />
                            </Switch>
                            <PrivateRoute
                                path="/dashboard"
                                isLoggedIn={this.state.isLoggedIn}
                                component={Dashboard}
                            />
                        </Fragment>
                    )}
                </Query>
            </div>
        );
    }
}

export default withRouter(App);
