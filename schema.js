const { gql } = require('apollo-server');


// The schema definitions defines a joke and category type as well as a query for retrieving the data.
const schema = gql`
    type Query {
        categories: [Category]
        joke(category: String): Joke
    }

    type Category {
        name: String
    }

    type Joke {
        value: String
        id: String
    }
`;

module.exports = schema;