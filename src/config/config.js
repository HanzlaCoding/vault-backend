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

if (!process.env.JWT_SECRET) {
    console.error("Please provide JWT_SECRET in .env.");
    process.exit(1);
}

if (!process.env.JWT_EXPIRES_IN) {
    console.error("Please provide JWT_EXPIRES_IN in .env.");
    process.exit(1);
}

const _config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN
};

export default _config;
