const { mongoose } = require("../../config/database");


const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    userIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    dueDate: {
        type: Date,
        require: true,
    },
    startDate: {
        type: Date,
        require: true,
    },
    startTime: {
        type: String,
        require: true,
    },
    fileUrl: [
    ],

    priority: {
        type: String,
        required: true,
        enum: ["medium", "high", "low", "critical"],
        default: "low"
    },
    status: {
        type: String,
        require: true,
        enum: ["started", "in_progress", "completed", "on_hold"],
        default: "started"
    }

}, {
    timestamps: true
})
taskSchema.index({ createdAt: 1 });
const Task = mongoose.model("Task", taskSchema);
module.exports = { Task }

