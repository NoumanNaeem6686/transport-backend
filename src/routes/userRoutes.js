const express = require("express");
const routes = express.Router();
const {
  bookTransport,
  bookCleaner,
  bookHelper,
  getAllBookings,
} = require("../controller/userController");

routes.post("/book-transport", bookTransport);
routes.post("/book-cleaner", bookCleaner);
routes.post("/book-helper", bookHelper);
routes.get("/all-bookings", getAllBookings);

module.exports = routes;
