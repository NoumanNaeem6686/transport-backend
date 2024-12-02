const { WorkWithUs } = require("../models/WorkWithUs");

exports.createEntry = async (req, res) => {
    try {
        const { name, address, email, phone, isDivingLicense, workBasis, services } = req.body;
        console.log("🚀 ~ exports.createEntry= ~ isDivingLicense:", isDivingLicense)

        if (!address || !email || !phone || !workBasis || !services.length) {
            return res.status(400).json({ message: "All required fields must be filled." });
        }

        const newEntry = new WorkWithUs({
            name,
            address,
            email,
            phone,
            isDivingLicense,
            workBasis,
            services,
        });
        console.log("🚀 ~ exports.createEntry= ~ newEntry:", newEntry)

        await newEntry.save();
        res.status(201).json({ message: "Entry created successfully.", entry: newEntry });
    } catch (error) {
        res.status(500).json({ message: "Error creating entry.", error: error.message });
    }
};
exports.getAllEntries = async (req, res) => {
    try {
        const query = {};
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const totalEntries = await WorkWithUs.countDocuments(query);

        const entries = await WorkWithUs.find(query)
            .sort({ _id: -1 })
            .skip((page - 1) * limit)
            .limit(limit);
        if (!entries.length) {
            return res.status(404).json({ message: "No entries found." });
        }
        const meta = {
            currentPage: page,
            pageItems: entries.length,
            totalItems: totalEntries,
            totalPages: Math.ceil(totalEntries / limit),
        };

        return res.status(200).json({
            message: "Entries fetched successfully.",
            entries,
            meta,
        });
    } catch (error) {
        console.error("Error fetching entries:", error);
        return res.status(500).json({ message: "Error fetching entries.", error: error.message });
    }
};


exports.deleteEntry = async (req, res) => {
    console.log("Working")
    try {
        const { id } = req.params;

        const deletedEntry = await WorkWithUs.findByIdAndDelete(id);
        if (!deletedEntry) {
            return res.status(404).json({ message: "Entry not found." });
        }

        res.status(200).json({ message: "Entry deleted successfully.", entry: deletedEntry });
    } catch (error) {
        res.status(500).json({ message: "Error deleting entry.", error: error.message });
    }
};
