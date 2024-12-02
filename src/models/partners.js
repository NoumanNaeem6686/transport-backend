const { mongoose } = require("../../config/database");

const partnerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    vehicleNumber: { type: String, required: false },
    licenseNumber: { type: String, required: false },
}, { timestamps: true });

const Partner = mongoose.model("Partner", partnerSchema);
module.exports = { Partner };

