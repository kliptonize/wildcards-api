//Returns all sets, with possible filter

//Load helpers
const buildSetFilters = require('./../helpers/build-set-filters');

module.exports = async (root, {filter, start, limit}, {mongo: {Sets}, account}) => {
	let query = filter ? {$or: buildSetFilters(filter)} : {};
	const cursor = Sets.find(query);
	if(start){
		cursor.skip(start);
	}
	if(limit){
		cursor.limit(limit);
	}
	return cursor.toArray();
};