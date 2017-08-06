//Make sure every field is filled in upon request
module.exports = {
	id: root => root._id || root.id,
}