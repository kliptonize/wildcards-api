//Filters for a set
function buildSetFilters({OR = [], topic, tags_contain}){
	const filter = (topic || tags_contain) ? {}: null;
	if(topic){
		filter.topic = {$regex: `.*${topic}*.`};
	}
	if(tags_contain){
		filter.tags = {$regex: tags_contain};
	}

	let filters = filter ? [filter] : [];
	for (let i = 0; i< OR.length; i++){
		filters = filters.concat(buildSetFilters(OR[i]));
	}
	return filters;
}

module.exports = buildSetFilters;