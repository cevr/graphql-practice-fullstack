import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Navigator from './components/Navigator';
import SignUp from './components/SignUp';
import Login from './components/Login';

class App extends Component {
    render() {
        const { location } = this.props;
        return (
            <div>
                <Navigator location={location.pathname} />
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
