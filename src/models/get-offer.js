const { mongoose } = require("../../config/database");


const offerSchema = new mongoose.Schema(
    {
        userType: { type: String, required: false },
        name: { type: String, required: false },
        email: { type: String, required: false },
        phone: { type: String, required: false },
        dateRange: { type: String, required: false },
        timeRange: { type: String, required: false },
        services: { type: [String], required: false },
        from: { type: String },
        to: { type: String },
        helpers: { type: Number },
        workers: { type: Number },
        spaceSize: { type: Number },
        specialRequirements: { type: String },
        frequency: { type: String },
    },
    { timestamps: true }
);

const Offer = mongoose.model("Offer", offerSchema);

module.exports = { Offer };

