// Import the Apollo datasource class.
const { RESTDataSource } = require('apollo-datasource-rest');

class ChuckNorris extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.chucknorris.io/jokes';
    };

    async getCategories () {
        const response = await this.get('/categories');
        return response.map(i => ({
            name: i
        }));
    };

    async getJokeByCategory (category) {
        const response = await this.get(`/random?category=${category}`);
        return this.jokeReducer(response);
    };

    jokeReducer(joke) {
        return {
            value: joke.value,
            id: joke.id
        };
    };
};

module.exports = ChuckNorris;