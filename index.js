//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

//Set default ENV
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//Import Mongo Connector
const connectMongo = require('./src/helpers/mongo-connector');

//Import authenticator
const {authenticate} = require('./src/helpers/authentication');

//Import dataloader
const buildDataLoaders = require('./src/helpers/dataloaders');

//Import schema
const schema = require('./src');

const start = async () => {
	const mongo = await connectMongo();

	var app = express();
	const buildOptions = async (req, res) => {
		const account = await authenticate(req, mongo.Accounts);
		return {
			dataloaders: buildDataLoaders(mongo),
			context: {mongo, account},
			schema,
		}
	};
	app.use('/graphql', bodyParser.json(), graphqlExpress(buildOptions));
	app.use('/graphiql', graphiqlExpress({
		endpointURL: '/graphql',
		passHeader: `'Authorization': 'bearer token-admin@wildcards.be'`	
	}));

	const PORT = 3000;
	app.listen(PORT, () => {
		console.log(`Wildcards GraphQL api running on port ${PORT} in ${process.env.NODE_ENV}.`);
	});
};

start();