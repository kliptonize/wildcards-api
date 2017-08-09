const mutations = `
	type Mutation{
		# Start following a certain story
		followStory(story_id: ID!): Story
		
		# Stop following a certain story
		unfollowStory(story_id: ID!): Story
	}
`;

module.exports = [mutations];
