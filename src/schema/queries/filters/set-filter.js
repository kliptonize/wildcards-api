const SetFilter = `
	input SetFilter {
		OR: [SetFilter!]
		topic: String
		tags_contain: String
	}
`;

module.exports = SetFilter;