import mongoose from "mongoose";

const connectBD = async (): Promise<void> => {
    try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("Database connected");
    } catch (error) {
    console.log("Error connecting to database", error);
    }
};

export default connectBD;