import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";

dotenv.config(); //
const dbUrl = process.env.MONGODB_URL;
//------------------------------
const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (error) {
    console.error("connection error", error);
    process.exit(1);
  }
};
//-------------------------------
let db = mongoose.connection;
db.on("connected", () => {
  console.log("db connected to mongodb");
});
db.on("error", (error) => {
  console.error("Something is wrong ", error);
});
db.on("disconnected", () => {
  console.log("db disconnected from db");
});
process.on("SIGINT", async () => {
  await db.close();
  console.log("Mongoose connection closed due to app termination");
  process.exit(1);
});
//---------------->export
export default connectDB;
