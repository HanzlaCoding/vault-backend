// Package imports
import express from "express";
import morgan from 'morgan'

// Local imports
import thoughtRoutes from "./routes/thought.route.js";

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use("/api/v0", thoughtRoutes);

export default app;