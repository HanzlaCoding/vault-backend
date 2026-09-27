import { Router } from "express";
import { getAllThoughts, createThought, updateThought, deleteThought, healthCheck } from "../controllers/thought.controller.js";
import authenticate from "../middlewares/auth.middleware.js";

const router = Router();

// Health check endpoint
router.get("/health", healthCheck);

// GET: Retrieve all thoughts
router.get("/thoughts", authenticate, getAllThoughts);

// POST: Create a new thought
router.post("/thoughts", authenticate, createThought);

// PUT: Update an existing thought
router.put("/thoughts/:id", authenticate, updateThought);

// DELETE: Delete a thought
router.delete("/thoughts/:id", authenticate, deleteThought);

export default router;