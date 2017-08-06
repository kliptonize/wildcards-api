const ImageTitle = require('./image-title');

const Image = `
	type Image {
		path: String
		meta: ImageTitle
	}
`;

module.exports = [Image, ImageTitle];