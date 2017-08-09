//Make sure every field is filled in upon request
module.exports = {
	id: root => root._id || root.id,
	by: async ({_by}, data, {mongo: {Accounts}}) => {
		return await Accounts.findOne({_id: _by});
	},
	story: async ({_id}, data, {mongo: {Stories}}) => {
		return await Stories.findOne({_id: _id});
	},
	image: async(root, data) => {
		return root.image.path;
	}
}