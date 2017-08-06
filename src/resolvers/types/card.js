//Make sure every field is filled in upon request
module.exports = {
	id: root => root._id || root.id,
	by: async ({_by}, data, {mongo: {Accounts}}) => {
		return await Accounts.findOne({_id: _by});
	},
	set: async ({_id}, data, {mongo: {Sets}}) => {
		return await Sets.findOne({_id: _id});
	}
}