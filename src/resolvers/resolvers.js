//Load queries
const allStories = require('./queries/all-stories');
const myStories = require('./queries/my-stories');
const story = require('./queries/story');
const topics = require('./queries/topics');
const tags = require('./queries/tags');

//Load Mutations
const followStory = require('./mutations/follow-story');
const unfollowStory = require('./mutations/unfollow-story');

//Load additional auto-functions for types
const StoryType = require('./types/story');
const AccountType = require('./types/account');
const CardType = require('./types/card');
const TagType = require('./types/tag');
const TopicType = require('./types/topic');

module.exports = {
	Query: {
		stories: allStories,
		myStories,
		story,
		topics,
		tags
	},
	Mutation {
		followStory,
		unfollowStory
	},

	Story: StoryType,
	Account: AccountType,
	Card: CardType,
	Tag: TagType,
	Topic: TopicType
};