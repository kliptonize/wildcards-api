const Set = require('./../types/set');
const SetFilter = require('./filters/set-filter');

const queries = `
	type Query {
		sets(filter: SetFilter, start: Int, limit: Int): [Set]
		mySets: [Set]
		set(id: ID!): Set
	}
`;

module.exports = [queries, SetFilter, ...Set];