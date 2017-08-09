//Have this device unfollow a certain story
const {ObjectId} = require('mongodb');

module.exports = async (root,  {story_id}, {mongo: {Stories, Follows}, device}) => {
	//Check if Story exists
	var story = await Stories.findOne({_id: new ObjectId(story_id)});
	
	if(story){
		//Check if story is followed
		var followedStory = await Follows.findOne({device_id: device._id, story_id: story._id});
		if(followedStory){
			Follows.update({
				_id: followedStory._id
			}, {
				$set: {
					active: false,
					_updated:  Math.floor(Date.now() / 1000)
				}
			}, function(err, object){
				if(err){
					throw new Error(err);
				}
			});
		}else{
			throw new Error("Story not followed");
		}
	}else{
		throw new Error("Story does not exist");
	}

	//Return the story nevertheless
	return story;
}