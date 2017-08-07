const {ObjectId} = require('mongodb');

//Filters for a set
function buildSetFilters({OR = [], topic, tag}){
	const filter = (topic || tag) ? {}: null;
	if(topic){
		filter["topic._id"] = new ObjectId(topic);
	}
	if(tag){
		filter.tags = {$in: [tag]};
	}

	let filters = filter ? [filter] : [];
	for (let i = 0; i< OR.length; i++){
		filters = filters.concat(buildSetFilters(OR[i]));
	}
	return filters;
}

module.exports = buildSetFilters;