const mongoose = require("mongoose")

const workWithUsSchema = new mongoose.Schema({
    name: { type: String, required: false },
    address: { type: String, required: false },
    email: { type: String, required: false, unique: true },
    phone: { type: String, required: true },
    isDivingLicense: { type: String, required: false, default: "no" },
    workBasis: { type: String, enum: ["full_time", "part_time", "hourly"], required: false },
    services: { type: [String], required: true },
}, { timestamps: true });

const WorkWithUs = mongoose.model("WorkWithUs", workWithUsSchema);
module.exports = { WorkWithUs }
