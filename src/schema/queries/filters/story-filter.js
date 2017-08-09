const StoryFilter = `
	input StoryFilter {
		OR: [StoryFilter!]
		topic: ID
		tag: String
	}
`;

module.exports = StoryFilter;