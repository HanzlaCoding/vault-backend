// Package imports
import express from "express";
import morgan from 'morgan'
import cookieParser from "cookie-parser";

// Local imports
import thoughtRoutes from "./routes/thought.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
app.use("/api/v0", authRoutes);
app.use("/api/v0", thoughtRoutes);

export default app;