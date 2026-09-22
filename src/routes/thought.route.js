import { Router } from "express";
import { getAllThoughts, createThought, updateThought, deleteThought, healthCheck } from "../controllers/thought.controller.js";

const router = Router();

// Health check endpoint
router.get("/health", healthCheck);

// GET: Retrieve all thoughts
router.get("/getThoughts", getAllThoughts);

// POST: Create a new thought
router.post("/createThought", createThought);

// PUT: Update an existing thought
router.put("/updateThought/:id", updateThought);

// DELETE: Delete a thought
router.delete("/deleteThought/:id", deleteThought);

export default router;