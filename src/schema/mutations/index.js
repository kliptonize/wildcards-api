const mutations = `
	type Mutation{
		followStory(story: ID!): Story
		unfollowStory(story: ID!): Story
	}
`;

module.exports = [mutations];
