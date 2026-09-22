import dotenv from "dotenv";
dotenv.config();

if (!process.env.PORT) {
    console.error("Please provide PORT in .env.");
    process.exit(1);
}

if (!process.env.MONGO_URI) {
    console.error("Please provide MONGO_URI in .env.");
    process.exit(1);
}

const _config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI
};

export default _config;
