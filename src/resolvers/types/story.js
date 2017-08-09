//Make sure every field is filled in upon request
module.exports = {
	id: root => root._id || root.id,
	by: async ({_by}, data, {mongo: {Accounts}}) => {
		return await Accounts.findOne({_id: _by});
	},
	amountOfCards: async(root, data, {mongo: {Cards}}) => {
		//Add a count of all cards on this story
		return await Cards.count({'story._id': root._id});
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
	},
	image: async(root, data) => {
		return root.image.path;
	},
	hasUpdates: async(root, data, {mongo: {Follows, Cards}, device}) => {
		var follow = await Follows.findOne({device_id: device._id, story_id: root._id}, {story_id: 1, _id: 0, last_read: 1});

		if(follow == null){
			//Device does not follow this story
			return false;
		}

		//Get cards of story
		var cards = await Cards.find({'story._id': root._id}, {_modified: 1}).toArray();
		//Loop over cards, check them with the last_read timestamp of the follow
		for(var j = 0, cardsLength = cards.length; j < cardsLength; j++){
			if(cards[j]._modified > follow.last_read){
				//It's new(er)!
				return true;
			}
		}

		//Return false, cause we didn't find a newer card
		return false;
	},
	created: root => root._created || root.created,
	modified: root => root._modified || root.modified,
	/*
	 * Should work, but doesn't
	by: async ({_by}, data, {dataloaders: {accountLoader}}) => {
		return await accountLoader.load(_by);
	},
	*/
};