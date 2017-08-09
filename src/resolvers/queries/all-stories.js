//Returns all sets, with possible filter

//Load helpers
const buildStoryFilters = require('./../helpers/build-story-filters');

module.exports = async (root, {filter, start, limit}, {mongo: {Stories}, account}) => {
	let query = filter ? {$or: buildStoryFilters(filter)} : {};
	const cursor = Stories.find(query);
	if(start){
		cursor.skip(start);
	}
	if(limit){
		cursor.limit(limit);
	}
	return cursor.toArray();
};