const graphQL = require('graphql');
const axios = require('axios');

const UserType = require('./types/user').UserType;
const AuthService = require('../services/auth');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = graphQL;
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signUp: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, { email, password }, req) {
                console.log(email, password);
                return AuthService.signup({ email, password, req });
            }
        },
        logOut: {
            type: UserType,
            resolve(parentValue, args, { user, logout, session }) {
                session.destroy();
                logout();
                return user;
            }
        },
        logIn: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, { email, password }, req) {
                return AuthService.login({ email, password, req });
            }
        }
    }
});
module.exports = { mutation };
