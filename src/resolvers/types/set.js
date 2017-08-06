//Make sure every field is filled in upon request
module.exports = {
	id: root => root._id || root.id,
	by: async ({_by}, data, {mongo: {Accounts}}) => {
		return await Accounts.findOne({_id: _by});
	},
	amountOfCards: async(root, data, {mongo: {Cards}}) => {
		//Add a count of all cards on this set
		return await Cards.count({'set._id': root._id});
	}
	/*
	 * Should work, but doens't
	by: async ({_by}, data, {dataloaders: {accountLoader}}) => {
		return await accountLoader.load(_by);
	},
	*/
};