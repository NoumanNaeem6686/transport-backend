const { Offer } = require("../models/get-offer");



exports.createOffer = async (req, res) => {
    try {
        const {
            userType,
            name,
            email,
            phone,
            dateRange,
            timeRange,
            services,
            from,
            to,
            helpers,
            workers,
            spaceSize,
            specialRequirements,
            frequency,
        } = req.body;

        if (!userType || !name || !phone || !dateRange || !timeRange || !services.length) {
            return res.status(400).json({ message: "All required fields must be filled." });
        }

        const newOffer = new Offer({
            userType,
            name,
            email,
            phone,
            dateRange,
            timeRange,
            services,
            from,
            to,
            helpers,
            workers,
            spaceSize,
            specialRequirements,
            frequency,
        });

        await newOffer.save();
        res.status(201).json({ message: "Offer created successfully.", offer: newOffer });
    } catch (error) {
        console.error("Error creating offer:", error.message);
        res.status(500).json({ message: "Error creating offer.", error: error.message });
    }
};


exports.getAllOffers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const totalOffers = await Offer.countDocuments();
        const offers = await Offer.find()
            .sort({ _id: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        if (!offers.length) {
            return res.status(404).json({ message: "No offers found." });
        }

        const meta = {
            currentPage: page,
            totalItems: totalOffers,
            totalPages: Math.ceil(totalOffers / limit),
            pageItems: offers.length,
        };

        res.status(200).json({ message: "Offers fetched successfully.", offers, meta });
    } catch (error) {
        console.error("Error fetching offers:", error.message);
        res.status(500).json({ message: "Error fetching offers.", error: error.message });
    }
};


exports.deleteOffer = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedOffer = await Offer.findByIdAndDelete(id);
        if (!deletedOffer) {
            return res.status(404).json({ message: "Offer not found." });
        }

        res.status(200).json({ message: "Offer deleted successfully.", offer: deletedOffer });
    } catch (error) {
        console.error("Error deleting offer:", error.message);
        res.status(500).json({ message: "Error deleting offer.", error: error.message });
    }
};
