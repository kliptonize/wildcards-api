//Make sure every field is filled in upon request
module.exports = {
	id: root => root._id || root.id,
	amountOfStories: async (root, data, {mongo: {Stories}}) => {
		return await Stories.count({"topic._id": root._id});
	}
}