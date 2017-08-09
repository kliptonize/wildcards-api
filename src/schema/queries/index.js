const Story = require('./../types/story');
const Tag = require('./../types/tag');
const StoryFilter = require('./filters/story-filter');

const queries = `
	type Query {
		# Query a set of stories
		stories(filter: StoryFilter, start: Int, limit: Int): [Story]

		# Query only your followed stories
		myFollowedStories: [Story]

		# Get one specific story
		story(id: ID!): Story

		# Get the list of topics
		topics: [Topic]

		# Get the list of tags
		tags: [Tag]
	}
`;

module.exports = [queries, StoryFilter, ...Story, Tag];