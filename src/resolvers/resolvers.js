//Load queries
const allSets = require('./queries/all-sets');
const mySets = require('./queries/my-sets');
const set = require('./queries/set');
const topics = require('./queries/topics');
const tags = require('./queries/tags');

//Load mutations
const signinUser = require('./mutations/signin-user');

//Load additional auto-functions for types
const SetType = require('./types/set');
const AccountType = require('./types/account');
const CardType = require('./types/card');
const TagType = require('./types/tag');
const TopicType = require('./types/topic');

module.exports = {
	Query: {
		sets: allSets,
		mySets,
		set,
		topics,
		tags
	},
	Mutation: {
		signinUser
	},

	Set: SetType,
	Account: AccountType,
	Card: CardType,
	Tag: TagType,
	Topic: TopicType
};