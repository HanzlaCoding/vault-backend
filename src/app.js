// Package imports
import express from "express";
import morgan from 'morgan'

// Local imports
import thoughtRoutes from "./routes/thought.route.js";

const app = express();

// Middleware
app.use(express.json());
app.use("/api/v0", thoughtRoutes);
app.use(morgan('dev'));


export default app;