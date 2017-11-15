//Returns all tags

module.exports = async (root, data, {mongo: {Stories}, device}) => {
	//Perform a distinct query for all tags
	var distinctTags = await Stories.distinct('tags');

	//Loop over array, creates objects
	var returnArray = [];
	distinctTags.forEach(async function(tag){
		returnArray.push({
			"name": "#" + tag
		});
	});

	return returnArray;

	//TODO: sort them on most popular in the last x -days
	//Stories.count({tags: {$in: [tag]}});
};