//Returns all tags

module.exports = async (root, data, {mongo: {Stories}, device}) => {
	//Perform a distinct query for all tags
	var distinctTags = await Stories.distinct('tags');

	//Loop over array, creates objects
	var returnArray = [];

	//Loop over array, creates objects
	for(var i = 0, len = distinctTags.length; i < len; i++){
		tag = distinctTags[i];
		var amount = await Stories.count({tags: {$in: [tag]}});
		returnArray.push({
			"name": "#" + tag,
			"amount": amount
		});
	}

	//Sort by count
    return returnArray.sort(function(a, b) {
        var x = a["amount"]; var y = b["amount"];
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    });

	//TODO: sort them on most popular in the last x -days
	//Stories.count({tags: {$in: [tag]}});
};