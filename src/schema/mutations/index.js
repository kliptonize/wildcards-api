const SigninPayload = require('./types/signin-payload');

const mutations = `
	type Mutation {
		signinUser(email: String, password: String): SigninPayload!
	}
`;

module.exports = [mutations, ...SigninPayload];