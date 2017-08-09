const Story = require('./../types/story');
const Tag = require('./../types/tag');
const StoryFilter = require('./filters/story-filter');

const queries = `
	type Query {
		stories(filter: StoryFilter, start: Int, limit: Int): [Story]
		myStories: [Story]
		story(id: ID!): Story

		topics: [Topic]

		tags: [Tag]
	}
`;

module.exports = [queries, StoryFilter, ...Story, Tag];