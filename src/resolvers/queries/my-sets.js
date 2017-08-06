//Returns only the sets of the current logged in user

module.exports = async (root, data, {mongo: {Sets}, account}) => {
	return await Sets.find({_by: account._id}).toArray();
}