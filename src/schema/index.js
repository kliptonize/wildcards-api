//Import schema types
const Story = require('./types/story');
const Card = require('./types/card');

//Import schema queries
const queries = require('./queries');

//Import schema mutations
const mutations = require('./mutations');

module.exports = {
	types: [
		...Story,
		...Card
	],
	queries: [
		...queries
	],
	mutations: [
		...mutations
	]
}