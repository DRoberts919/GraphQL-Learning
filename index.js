const express = require("express");
const schema = require("./schema.js");
const { graphqlHTTP } = require("express-graphql");

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL project");
});

const root = {
  friend: () => {
    return {
      id: 123134325,
      firstName: "Dylan",
      lastName: "Roberts",
      gender: "male",
      email: "email@email.com",
    };
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () => {
  console.log("SERVER ON PORT 8080/graphql");
});
