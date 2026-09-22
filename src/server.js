import app from "./app.js";
import { connectDb } from "./config/db.js";
import _config from "./config/config.js";

// ==============================
// Start Server
// ==============================

const startServer = async () => {
    try {
        console.log("\n🚀 Starting server...\n");

        await connectDb();

        app.listen(_config.PORT, () => {
            console.log("\n================================");
            console.log("🚀 Server started successfully");
            console.log("================================");
            console.log(`📡 Port: ${_config.PORT}`);
            console.log(`🌐 API: http://localhost:${_config.PORT}/api/v0`);
            console.log(`❤️ Health: http://localhost:${_config.PORT}/api/v0/health`);
            console.log("================================\n");
        });

    } catch (error) {
        console.error(`❌ Server failed: ${error.message}`);
        process.exit(1);
    }
};

// Run
startServer();
