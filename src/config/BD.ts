import mongoose from "mongoose";
import { MONGODB_URI } from "./entorno";

const connectBD = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI as string);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

export default connectBD;
