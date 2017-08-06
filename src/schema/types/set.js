const Account = require('./account');
const Topic = require('./topic');
const Source = require('./source');
const Card = require('./card');

const Set = `
	type Set {
		id: ID!
		title: String!
		image: String
		tags: [String]
		source: [Source]
		sourceUrl: String
		by: Account
		topic: Topic,
		cards : [Card]
		amountOfCards: Int
	}
`;

module.exports = [Set, Account, Topic, Source];