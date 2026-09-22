import mongoose from "mongoose";

const thoughtSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    content: {
        type: String,
        required: [true, "Please provide the thought."]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const thoughtModel = mongoose.model("thought", thoughtSchema);

export default thoughtModel;