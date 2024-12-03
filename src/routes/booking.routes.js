const express = require("express")
const { createBooking, getAllBookings, deleteBooking } = require("../controllers/booking.controllers")
const router = express.Router();


router.post("/", createBooking); 
router.get("/", getAllBookings); 
router.delete("/:id", deleteBooking); 

module.exports = router;

