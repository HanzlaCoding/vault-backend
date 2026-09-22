import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is missing from .env");
        }

        console.log("⏳ Connecting to MongoDB...");

        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "vault-backend"
        });

        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error(`❌ MongoDB connection failed: ${error.message}`);
        process.exit(1);
    }
};