const Set = require('./../types/set');
const Tag = require('./../types/tag');
const SetFilter = require('./filters/set-filter');

const queries = `
	type Query {
		sets(filter: SetFilter, start: Int, limit: Int): [Set]
		mySets: [Set]
		set(id: ID!): Set

		topics: [Topic]

		tags: [Tag]
	}
`;

module.exports = [queries, SetFilter, ...Set, Tag];