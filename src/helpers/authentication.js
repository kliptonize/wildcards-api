const HEADER_REGEX = /bearer token-(.*)$/;

module.exports = {
	authenticate: async ({headers: {authorization}}, Accounts) => {
		const email = authorization && HEADER_REGEX.exec(authorization)[1];
		return email && await Accounts.findOne({email});
	}
}