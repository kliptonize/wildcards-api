const Account = require('./account');
const Story = require('./story');

const Card = `
	type Card {
		id: ID!
		title: String!
		image: String
		by: Account
		story: Story
	}
`;

module.exports = [Card, Account];