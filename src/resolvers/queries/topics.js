//Returns all tags

module.exports = async (root, data, {mongo: {Topics, Sets}, device}) => {
	//Perform a distinct query for all tags
	var topics = await Topics.find().toArray();

	//Loop over array, creates objects
	for(var i = 0, len = topics.length; i < len; i++){
		var count = await Sets.count({"topic._id": topics[i]._id});
		topics[i].amountOfSets = count;
	}

	return topics;
};