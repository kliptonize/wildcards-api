//Returns only ONE story based on ID
const {ObjectId} = require('mongodb');

module.exports = async (root,  {id}, {mongo: {Stories, Cards, Follows}, device}) => {
	//Check if device follows this story, and update the last_seen variable
	var follow = await Follows.findOne({device_id: device._id, story_id: id});
	if(follow){
		Follows.update({
			_id: follow._id
		}, {
			$set: {
				last_seen: Math.floor(Date.now() / 1000),
				_modified: Math.floor(Date.now() / 1000)
			}
		});
	}
	var story = await Stories.findOne({_id: new ObjectId(id)});
	if(story == null){
		throw new Error(`Story (${id}) not found`);
	}else{
		//Add cards to this story
		var cards = await Cards.find({'story._id': story._id}).toArray();
		story.cards = cards;
		return story;
	}
}