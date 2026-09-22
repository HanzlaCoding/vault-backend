import { Router } from "express";
import { getAllThoughts, createThought, updateThought, deleteThought, healthCheck } from "../controllers/thought.controller.js";
import authenticate from "../middlewares/auth.middleware.js";

const router = Router();

// Health check endpoint
router.get("/health", healthCheck);

// GET: Retrieve all thoughts
router.get("/getThoughts", authenticate, getAllThoughts);

// POST: Create a new thought
router.post("/createThought", authenticate, createThought);

// PUT: Update an existing thought
router.put("/updateThought/:id", authenticate, updateThought);

// DELETE: Delete a thought
router.delete("/deleteThought/:id", authenticate, deleteThought);

export default router;