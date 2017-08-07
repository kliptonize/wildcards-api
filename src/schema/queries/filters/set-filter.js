const SetFilter = `
	input SetFilter {
		OR: [SetFilter!]
		topic: ID
		tag: String
	}
`;

module.exports = SetFilter;