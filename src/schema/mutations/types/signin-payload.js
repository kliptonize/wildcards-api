const Account = require('./../../types/account');

const signinPayload = `
	type SigninPayload {
		token: String
		account: Account
	}
`;

module.exports = [signinPayload, Account];