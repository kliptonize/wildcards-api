//Returns only ONE set based on ID
const {ObjectId} = require('mongodb');

module.exports = async (root,  {id}, {mongo: {Sets, Cards}, account}) => {
	var set = await Sets.findOne({_id: new ObjectId(id)});
	if(set == null){
		throw new Error(`Set (${id}) not found`);
	}else{
		//Add cards to this set
		var cards = await Cards.find({'set._id': set._id}).toArray();
		set.cards = cards;
		return set;
	}
}