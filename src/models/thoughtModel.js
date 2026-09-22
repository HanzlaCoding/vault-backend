import mongoose from "mongoose";

const thoughtSchema = new mongoose.Schema({

    content: {
        type: String,
        required: [true, "Please provide the thought."]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const thoughtModel = new mongoose.model("thought", thoughtSchema);

export default thoughtModel;