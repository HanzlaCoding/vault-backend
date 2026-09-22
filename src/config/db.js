import mongoose from "mongoose";
import _config from "./config.js";

export const connectDb = async () => {
    try {
        if (!_config.MONGO_URI) {
            throw new Error("MONGO_URI is missing from configuration");
        }

        console.log("⏳ Connecting to MongoDB...");

        await mongoose.connect(_config.MONGO_URI, {
            dbName: "vault-backend"
        });

        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error(`❌ MongoDB connection failed: ${error.message}`);
        process.exit(1);
    }
};
