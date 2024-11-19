const { PrismaClient } = require("../../prisma/generated/client");

const prisma = new PrismaClient();
require("dotenv").config();

const bookTransport = async (req, res) => {
  try {
    const {
      role,
      name,
      phone,
      email,
      serviceType,
      time,
      date,
      locationFrom,
      locationTo,
      frequencyService,
      specialRequirements,
    } = req.body;
    const data = await prisma.transport.create({
      data: {
        role,
        name,
        phone,
        email,
        serviceType,
        time,
        date,
        locationFrom,
        locationTo,
        frequencyService,
        specialRequirements,
      },
    });
    res.status(200).json({ message: "Transport booked successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const bookCleaner = async (req, res) => {
  try {
    const {
      role,
      name,
      phone,
      email,
      serviceType,
      time,
      date,
      numberOFCleaners,
      frequencyService,
      specialRequirements,
      locationSpace,
    } = req.body;
    const data = await prisma.cleaner.create({
      data: {
        role,
        name,
        phone,
        email,
        serviceType,
        time,
        date,
        numberOFCleaners,
        locationSpace,
        frequencyService,
        specialRequirements,
      },
    });
    res.status(200).json({ message: "Cleaner booked successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const bookHelper = async (req, res) => {
  try {
    const {
      role,
      name,
      phone,
      email,
      serviceType,
      time,
      date,
      location,
      frequencyService,
      specialRequirements,
    } = req.body;
    const data = await prisma.helper.create({
      data: {
        role,
        name,
        phone,
        email,
        serviceType,
        time,
        date,
        location,
        frequencyService,
        specialRequirements,
      },
    });
    res.status(200).json({ message: "Helper booked successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const transportBookings = await prisma.transport.findMany();
    const cleanerBookings = await prisma.cleaner.findMany();
    const helperBookings = await prisma.helper.findMany();

    res.status(200).json({
      message: "All bookings retrieved successfully",
      data: {
        transport: transportBookings,
        cleaner: cleanerBookings,
        helper: helperBookings,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  bookTransport,
  bookCleaner,
  bookHelper,
  getAllBookings,
};
