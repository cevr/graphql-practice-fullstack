import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';

import client from './Apollo/apolloClient';
const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <App />
            </Router>
        </ApolloProvider>
    );
};
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
