import mongoose from "mongoose";

async function connectToDB() {
  return mongoose
    .connect("mongodb://localhost:27017/restaurant-db")
    .then(() => {
      console.log("Database connected.");
    })
    .catch((error) => {
      console.log("Error connecting to database.", error);
      process.exit(1);
    });
}

export default connectToDB;
