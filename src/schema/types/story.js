const Account = require('./account');
const Topic = require('./topic');
const Source = require('./source');
const Card = require('./card');

const Story = `
	type Story {
		id: ID!
		title: String!
		image: String
		tags: [String]
		source: [Source]
		sourceUrl: String
		by: Account
		topic: Topic
		cards : [Card]
		amountOfCards: Int
	}
`;

module.exports = [Story, Account, Topic, Source];