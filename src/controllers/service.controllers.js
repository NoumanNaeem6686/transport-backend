



export const createBooking = async (req, res) => {
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