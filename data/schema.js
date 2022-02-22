const {makeExecutableSchema} = require("@graphql-tools/schema");
const resolvers = require("./resolvers");

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        language: String
        age:Int
        email: String
        contacts: [Contact]
        
    }

    type Alien {
        id:ID
        firstName: String
        lastName: String
        planet: String
    }

    type Contact{
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    
    type Query{
        getFriend(id:ID):Friend
    }

    input FriendInput{
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        language: String
        age:Int
        email: String
        contacts: [ContactInput]

    }

    input ContactInput{
        firstName: String
        lastName: String
    }

    type Mutation{
        createFriend(input:FriendInput): Friend
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
