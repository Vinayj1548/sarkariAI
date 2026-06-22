import mongoose from "mongoose";
import process from "node:process";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};