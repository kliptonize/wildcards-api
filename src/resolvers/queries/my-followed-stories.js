//Returns only the followed stories of the current logged in user

module.exports = async (root, data, {mongo: {Stories, Follows, Cards}, device}) => {
	var follows = await Follows.find({device_id: device._id}, {story_id: 1, _id: 0, last_read: 1}).toArray();
	var followedStoryIds = [];
	for(var i = 0, length = follows.length; i < length; i++){
		followedStoryIds.push(follows[i].story_id);
	}

	return await await Stories.find({_id: {$in: followedStoryIds}}).toArray();
}