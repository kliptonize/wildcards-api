//Load queries
const allSets = require('./queries/all-sets');
const mySets = require('./queries/my-sets');
const set = require('./queries/set');

//Load mutations
const signinUser = require('./mutations/signin-user');

//Load additional auto-functions for types
const SetType = require('./types/set');
const AccountType = require('./types/account');
const CardType = require('./types/card');

module.exports = {
	Query: {
		sets: allSets,
		mySets,
		set
	},
	Mutation: {
		signinUser
	},

	Set: SetType,
	Account: AccountType,
	Card: CardType
};