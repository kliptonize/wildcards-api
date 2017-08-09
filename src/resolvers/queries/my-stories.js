//Returns only the stories of the current logged in user

module.exports = async (root, data, {mongo: {Stories}, account}) => {
	return await Stories.find({_by: account._id}).toArray();
}