// The resolver maps the queries to the datasource object.
const query = {
    Query: {
        categories: (_, __,{ dataSources }) => dataSources.chuckNorrisAPI.getCategories(),
        joke: (_, { category }, { dataSources }) => dataSources.chuckNorrisAPI.getJokeByCategory(category)
    }
};

module.exports = query;