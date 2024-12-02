const express = require("express")
const { createOffer, getAllOffers, deleteOffer } = require("../controllers/get-offer.controller")
const router = express.Router();


router.post("/", createOffer);
router.get("/", getAllOffers);
router.delete("/:id", deleteOffer);

module.exports = router;

