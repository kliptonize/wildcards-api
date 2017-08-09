//Returns all tags

module.exports = async (root, data, {mongo: {Sets}, device}) => {
	//Perform a distinct query for all tags
	var distinctTags = await Sets.distinct('tags');

	//Loop over array, creates objects
	var returnArray = [];
	distinctTags.forEach(function(tag){
		returnArray.push({
			"name": "#" + tag
		});
	})

	return returnArray;

	//TODO: sort them on most popular in the last x -days
	//Sets.count({tags: {$in: [tag]}});
};