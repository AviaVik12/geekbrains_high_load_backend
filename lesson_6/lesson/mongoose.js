import mongoose from "mongoose";

//* Connect to MongoDB with Mongoose
mongoose.connect("mongodb://127.0.0.1:27017");

//* Mongoose schema
const testSchema = mongoose.Schema({
  name: { firstName: String, lastName: String },
  mark: Number,
});

//* Mongoose model
const TestModel = mongoose.model("TestModel", testSchema);

//* Item example
const testItem = new TestModel({
  _id: new mongoose.Types.ObjectId(),
  name: { firstName: "FirstName", lastName: "LastName" },
  mark: 5,
});

//* Saving item
testItem.save(() => {
  if (err) {
    throw err;
  }

  console.log("Item saved");
});
