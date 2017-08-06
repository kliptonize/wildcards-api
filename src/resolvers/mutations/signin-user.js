//Returns token for use in api

module.exports = async (root, data, {mongo: {Accounts}}) => {
	const account = await Accounts.findOne({email: data.email});
	if(account == null){
		throw new Error(`Account (${data.email}) not found`);
	}else if(data.password == account.password){
		return {token: `token-${account.email}`, account};
	}else{
		throw new Error('Combination does not match');
	}
}