//Have this device follow a certain story
const {ObjectId} = require('mongodb');

module.exports = async (root,  {story_id}, {mongo: {Stories, Follows}, device}) => {
	//Check if Story exists
	var story = await Stories.findOne({_id: new ObjectId(story_id)});
	
	if(story){
		//Check if story is already followed
		var followedStory = await Follows.findOne({device_id: device._id, story_id: story._id});
		if(followedStory && followedStory.active){
			throw new Error("Story already followed");
		}else if(followedStory && !followedStory.active){
			//Update document
			Follows.update({
				_id: followedStory._id
			}, {
				$set: {
					active: true,
					_updated:  Math.floor(Date.now() / 1000)
				}
			}, function(err, object){
				if(err){
					throw new Error(err);
				}
			});
		}else{
			//Insert document
			Follows.insert({
				device_id: device._id,
				story_id: story._id,
				last_read: Math.floor(Date.now() / 1000),
				active: true,
				_created: Math.floor(Date.now() / 1000),
				_updated:  Math.floor(Date.now() / 1000)
			}, function(err, object){
				if(err){
					throw new Error(err);
				}
			});
		}
	}else{
		throw new Error("Story does not exist");
	}

	//Return the story nevertheless
	return story;
}