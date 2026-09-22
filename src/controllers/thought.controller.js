import mongoose from "mongoose";
import thoughtModel from "../models/thought.model.js";

// Health check endpoint
const healthCheck = (req, res) => {
    res.status(200).json(
        {
            message: "Vautl Backend is working ✌️!"
        });
};

// Get all thoughts
const getAllThoughts = async (req, res) => {
    try {
        const getThoughts = await thoughtModel.find().sort({ date: -1 });

        return res.status(200).json({
            message: "Vautl Backend is working ✌️!",
            thoughts: getThoughts
        });

    } catch (error) {
        console.error("Error fetching thoughts:", error);

        return res.status(500).json({
            message: "Failed to retrieve thoughts.",
            error: error.message
        });
    }
}

// Create a new thought
const createThought = async (req, res) => {
    try {
        const { content } = req.body;

        if (!content) {
            return res.status(400).json({
                message: "Thought content is required!"
            });
        }

        const newThought = await thoughtModel.create({
            content: content
        });

        return res.status(201).json({
            message: "Thought created!",
            thought: newThought
        });

    } catch (error) {
        console.error("Error creating thought:", error);

        return res.status(500).json({
            message: "Failed to create thought.",
            error: error.message
        });
    }
}

// Update an existing thought
const updateThought = async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;

        if (!content) {
            return res.status(400).json({
                message: "Thought content is required!"
            });
        }

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid thought ID!"
            });
        }

        const updatedThought = await thoughtModel.findByIdAndUpdate(
            id,
            {
                content: content
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedThought) {
            return res.status(404).json({
                message: "Thought not found!"
            });
        }

        return res.status(200).json({
            message: "Thought updated successfully!",
            thought: updatedThought
        });

    } catch (error) {
        console.error("Error updating thought:", error);

        return res.status(500).json({
            message: "Failed to update thought.",
            error: error.message
        });
    }
}

// Delete a thought
const deleteThought = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid thought ID!"
            });
        }

        const deletedThought = await thoughtModel.findByIdAndDelete({ _id: id });

        if (!deletedThought) {
            return res.status(404).json({
                message: "Thought not found!"
            });
        }

        return res.status(200).json({
            message: "Thought deleted successfully!",
            thought: deletedThought
        });

    } catch (error) {
        console.error("Error deleting thought:", error);

        return res.status(500).json({
            message: "Failed to delete thought.",
            error: error.message
        });
    }
}

export {
    getAllThoughts,
    createThought,
    updateThought,
    deleteThought,
    healthCheck
};