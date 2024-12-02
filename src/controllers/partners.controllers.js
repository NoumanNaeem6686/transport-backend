const { Partner } = require("../models/partners");

exports.createPartner = async (req, res) => {
    try {
        const { name, email, phone, vehicleNumber, licenseNumber } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newPartner = new Partner({
            name,
            email,
            phone,
            vehicleNumber,
            licenseNumber,
        });

        await newPartner.save();
        res.status(201).json({ message: "Partner created successfully.", partner: newPartner });
    } catch (error) {
        console.error("Error creating partner:", error.message);
        res.status(500).json({ message: "Error creating partner.", error: error.message });
    }
};


exports.deletePartner = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedPartner = await Partner.findByIdAndDelete(id);
        if (!deletedPartner) {
            return res.status(404).json({ message: "Partner not found." });
        }

        res.status(200).json({ message: "Partner deleted successfully.", partner: deletedPartner });
    } catch (error) {
        console.error("Error deleting partner:", error.message);
        res.status(500).json({ message: "Error deleting partner.", error: error.message });
    }
};


exports.getAllPartners = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; 
        const limit = parseInt(req.query.limit) || 10; 
        const query = {}; 

        const totalPartners = await Partner.countDocuments(query); 
        const partners = await Partner.find(query)
            .sort({ _id: -1 }) 
            .skip((page - 1) * limit) 
            .limit(limit); 

        if (!partners.length) {
            return res.status(404).json({ message: "No partners found." });
        }

        const meta = {
            currentPage: page,
            totalItems: totalPartners,
            totalPages: Math.ceil(totalPartners / limit),
            pageItems: partners.length,
        };

        res.status(200).json({ message: "Partners fetched successfully.", partners, meta });
    } catch (error) {
        console.error("Error fetching partners:", error.message);
        res.status(500).json({ message: "Error fetching partners.", error: error.message });
    }
};
