//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

// HTTPS
var fs = require('fs');
var http = require('http');
var https = require('https');

//Set default ENV
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//Import Mongo Connector
const connectMongo = require('./src/helpers/mongo-connector');


//Import authenticator
const {authenticationRouter, authenticate} = require('./src/helpers/authentication');

//Import dataloader
const buildDataLoaders = require('./src/helpers/dataloaders');

//Import schema
const schema = require('./src');

const start = async () => {
	const mongo = await connectMongo();

	var app = express();
	const buildOptions = async (req, res) => {
		const account = await authenticate(req, res, mongo.Devices);
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

	app.use(bodyParser.json());
	app.use('/authenticate', authenticationRouter);


	const PORT = 8443;
	switch(process.env.NODE_ENV){
		case "docker":
			var httpServer = http.createServer(app).listen(PORT, () => {
				console.log(`Wildcards GraphQL api running on port ${PORT} in ${process.env.NODE_ENV}.`);
			});
			break;
		case "dev":
		default:
			var httpsServer = https.createServer({
				key: fs.readFileSync('./src/config/cert/server.key', 'utf8'), 
				cert: fs.readFileSync('./src/config/cert/server.crt', 'utf8')
			}, app).listen(PORT, () => {
				console.log(`Wildcards GraphQL api running on port ${PORT} in ${process.env.NODE_ENV}.`);
			});
			break;
	}
};

start();