const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        email: [Email]!
    }

    type Email{
        email: String
    }

    type Query{
        friend: Friend
    }
`);

module.exports = schema;
