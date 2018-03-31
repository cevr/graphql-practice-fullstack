import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache({
    dataIdFromObject: object => object.id
});

const link = createHttpLink({
    uri: '/graphql',
    credentials: 'include'
});

const client = new ApolloClient({
    cache,
    link
});
export default client;
