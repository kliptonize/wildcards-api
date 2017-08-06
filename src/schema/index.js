//Import schema types
const Set = require('./types/set');
const Card = require('./types/card');

//Import schema queries
const queries = require('./queries');

//Import schema mutations
const mutations = require('./mutations');

module.exports = {
	types: [
		...Set,
		...Card
	],
	queries: [
		...queries
	],
	mutations: [
		...mutations
	]
}