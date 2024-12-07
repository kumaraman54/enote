require('dotenv').config();

const mongoose = require("mongoose");
const mongoURI = process.env.MONGOURI;
console.log(mongoURI)

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error)
  }
};

module.exports = connectToMongo;
