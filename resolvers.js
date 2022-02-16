const friendDB = {};

class Friend {
  constructor(id, { firstName, lastName, gender, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
  }
}

const resolvers = {
  getFriend: ({ id }) => {
    return new Friend(id, friendDB(id));
  },

  createFriend: ({ input }) => {
    let id = require("crypto").randomBytes(10).toString("hex");
    friendDB[id] = input;
    return new Friend(id, input);
  },
};

module.exports = resolvers;
