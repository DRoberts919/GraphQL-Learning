const express = require("express");
const schema = require("./schema.js");
const { graphqlHTTP } = require("express-graphql");
// const { schema } = require("./schema.js");
const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL project");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(8080, () => {
  console.log("SERVER ON PORT 8080/graphql");
});
