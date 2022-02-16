const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age:Int
        email: String
        
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
        email: String
        age:Int
    }

    type Mutation{
        createFriend(input:FriendInput): Friend
    }
`);

module.exports = schema;
