const Image = require('./meta/image');
const Account = require('./account');
const Set = require('./set');

const Card = `
	type Card {
		id: ID!
		title: String!
		image: Image
		by: Account
		set: Set
	}
`;

module.exports = [Card, ...Image, Account];