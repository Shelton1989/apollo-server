// Apollo import
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js'); // Schema definitions inport
const resolvers = require('./resolvers'); // Resolver import

const chuckNorrisAPI = require('./dataSource'); // Datasource import

const PORT = process.env.PORT || 9000; // Defines a custom port if the port is not set in the environment.

// Create the datasource object
const dataSources = () => ({
    chuckNorrisAPI: new chuckNorrisAPI()
});

// Apollo server settings
const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources
});

// Run the server
server.listen(PORT).then((data) => {
    console.log(`server now running at ${data.url}`);
});