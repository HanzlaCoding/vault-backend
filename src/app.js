// Package imports
import express from "express";
import morgan from 'morgan'
import cookieParser from "cookie-parser";
import cors from 'cors'

// Local imports
import thoughtRoutes from "./routes/thought.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    requestedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
app.use("/api/v0/auth", authRoutes);
app.use("/api/v0", thoughtRoutes);

export default app;