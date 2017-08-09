//Returns only ONE story based on ID
const {ObjectId} = require('mongodb');

module.exports = async (root,  {id}, {mongo: {Stories, Cards}, device}) => {
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