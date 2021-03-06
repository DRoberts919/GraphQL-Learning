const { MongoClient, ObjectId } = require("mongodb");

//mongo Connections
const URL =
  "mongodb+srv://droberts919:PxxfDwgLCsEF2W9h@cluster0.yvqqo.mongodb.net/test?authSource=admin&replicaSet=atlas-tmnlbv-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
const client = new MongoClient(URL);

const dbName = "GraphQL";
const db = client.db(dbName);
const collection = db.collection("users");

const resolvers = {
  Query: {
    getFriend: ({ id }) => {
      return new Friend(id, friendDB(id));
    },
  },
  Mutation: {
    createFriend: async (root, { input }) => {
      console.log(input);
      const newFriend = {
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        language: input.language,
        email: input.email,
        age: input.age,
        contacts: input.contacts,
      };
      try {
        console.log("trying to connect");
        await client.connect();
        console.log("connected");

        const saveFriend = await collection.insertOne(newFriend);
        console.log(saveFriend);
        const returnedData = await collection.findOne({
          _id: saveFriend.insertedId,
        });
        console.log(returnedData);
        return returnedData;
      } catch (err) {
        console.log(err);
      }
    },

    updateFriend: async (root, { input }) => {
      await client.connect();

      try {
        const getFriend = await collection.findOneAndUpdate(
          { _id: new ObjectId(input.id) },
          {
            $set: {
              age: input.age,
            },
          }
        );
        // client.close();
        console.log(getFriend);

        const getUpdatedData = await collection.findOne({
          _id: getFriend.value._id,
        });

        return getUpdatedData;
      } catch (err) {
        console.log(err);
      }
    },

    deleteFriend: async (root, { id }) => {
      await client.connect();

      try {
        const getFriend = await collection.findOneAndDelete({
          _id: new ObjectId(id),
        });
        return "succesfully deleted friend";
      } catch (err) {
        console.log(err);
      }
    },
  },
};

module.exports = resolvers;
