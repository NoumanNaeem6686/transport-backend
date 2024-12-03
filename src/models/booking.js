const { mongoose } = require("../../config/database");


const serviceSchema = new mongoose.Schema(
    {
        userInfo: {
            name: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true },
            date: { type: String, required: true },
            time: { type: String, required: true },
        },
        selectedServices: [
            {
                id: { type: String, required: true },
                name: { type: String, required: true },
                description: { type: String },
                from: { type: String },
                to: { type: String },
                distance: { type: Number },
                helpers: { type: Number },
                hours: { type: Number },
                area: { type: Number },
                cleaners: { type: Number },
            },
        ],
        totalCost: { type: Number, required: true },
        isWorking: { type: Boolean, required: true },
    },
    { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = { Service };