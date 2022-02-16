const express = require("express");
const schema = require("./schema.js");
const { graphqlHTTP } = require("express-graphql");
const resolvers = require('./resolvers')

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL project");
});

const root = resolvers


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
