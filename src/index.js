//Dependencies
const {makeExecutableSchema} = require('graphql-tools');

//Import resolvers
const resolvers = require('./resolvers/resolvers');

//Import schema's
const Schema = require('./schema');

//Generate schema objects
module.exports = makeExecutableSchema({
	typeDefs: [
		...Schema.types,
		...Schema.queries,
		...Schema.mutations,
	],
	resolvers
});