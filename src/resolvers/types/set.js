//Make sure every field is filled in upon request
module.exports = {
	id: root => root._id || root.id,
	by: async ({_by}, data, {mongo: {Accounts}}) => {
		return await Accounts.findOne({_id: _by});
	},
	amountOfCards: async(root, data, {mongo: {Cards}}) => {
		//Add a count of all cards on this set
		return await Cards.count({'set._id': root._id});
	},
	topic: async(root, data, {mongo: {Topics}}) => {
		return await Topics.findOne({_id: root.topic._id});
	},
	source: async(root, data, {mongo: {Sources}}) => {
		var sources = await Sources.find().toArray();
		root.source.forEach(function(one_source, key){
			sources.forEach(function(s){
				if(one_source._id.toString() == s._id.toString()){
					root.source[key] = s;
				}
			});
		});
		return root.source;
	}
	/*
	 * Should work, but doesn't
	by: async ({_by}, data, {dataloaders: {accountLoader}}) => {
		return await accountLoader.load(_by);
	},
	*/
};