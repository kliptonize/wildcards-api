//Make sure every field is filled in upon request
module.exports = {
	id: root => root._id || root.id,
	amountOfSets: async (root, data, {mongo: {Sets}}) => {
		return await Sets.count({"topic._id": root._id});
	}
}