const Account = require('./account');
const Set = require('./set');

const Card = `
	type Card {
		id: ID!
		title: String!
		image: String
		by: Account
		set: Set
	}
`;

module.exports = [Card, Account];