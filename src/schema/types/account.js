const Account = `
	type Account {
		id: ID!
		user: String!
		name: String!
		email: String!
		active: Boolean
		group: String
		password: String!
		i18n: String
	}
`;

module.exports = Account;