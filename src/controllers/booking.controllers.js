const { Service } = require("../models/booking");

exports.createBooking = async (req, res) => {
    try {
        const { userInfo, selectedServices, totalCost, isWorking } = req.body;

        if (!userInfo || !selectedServices || totalCost === undefined || isWorking === undefined) {
            return res.status(400).json({ message: "All required fields must be provided." });
        }

        const newBooking = new Service({
            userInfo,
            selectedServices,
            totalCost,
            isWorking,
        });

        await newBooking.save();
        res.status(201).json({ message: "Booking created successfully.", booking: newBooking });
    } catch (error) {
        console.error("Error creating booking:", error.message);
        res.status(500).json({ message: "Error creating booking.", error: error.message });
    }
};


exports.getAllBookings = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const totalBookings = await Service.countDocuments();
        const bookings = await Service.find()
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        if (!bookings.length) {
            return res.status(404).json({ message: "No bookings found." });
        }

        const meta = {
            currentPage: page,
            totalItems: totalBookings,
            totalPages: Math.ceil(totalBookings / limit),
            pageItems: bookings.length,
        };

        res.status(200).json({ message: "Bookings fetched successfully.", bookings, meta });
    } catch (error) {
        console.error("Error fetching bookings:", error.message);
        res.status(500).json({ message: "Error fetching bookings.", error: error.message });
    }
};


exports.deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedBooking = await Service.findByIdAndDelete(id);
        if (!deletedBooking) {
            return res.status(404).json({ message: "Booking not found." });
        }

        res.status(200).json({ message: "Booking deleted successfully.", booking: deletedBooking });
    } catch (error) {
        console.error("Error deleting booking:", error.message);
        res.status(500).json({ message: "Error deleting booking.", error: error.message });
    }
};
