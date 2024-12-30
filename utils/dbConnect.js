import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let isConnected = false;

export async function dbConnect() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.DB_NAME, // Specify the database name
    });
    isConnected = true;
    console.log(`MongoDB connected to ${process.env.DB_NAME}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
