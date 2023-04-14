import { MongoClient } from "mongodb";

//* Connect to MongoDB
MongoClient.connect("mongodb://127.0.0.1:27017", async (error, client) => {
  if (error) {
    throw error;
  }

  console.log("Connected");
  console.log(client);

  //* Connect to database
  const db = await client.db("my_database");

  //* Create collection
  db.createCollection("test_collection");

  //* Get all collections
  const collections = await db.collections();

  //* Get specific collection
  const testCollection = await db.collection("test_collection");

  //* find in collection
  const list = testCollection.find();

  client.close();
});
