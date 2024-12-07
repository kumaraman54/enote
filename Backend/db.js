const mongoose = require("mongoose");
const mongoURI = process.env.REACT_APP_MONGOURI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error)
  }
};

module.exports = connectToMongo;
