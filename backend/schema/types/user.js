const graphQL = require('graphql');
const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = graphQL;

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        email: { type: new GraphQLNonNull(GraphQLString) }
    }
});

module.exports = { UserType };
