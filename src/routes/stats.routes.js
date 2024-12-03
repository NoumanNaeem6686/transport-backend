const express = require("express")
const router = express.Router();
const statsControllers = require("../controllers/stats.controllers")


router.get('/services-per-type-per-month', statsControllers.getServicesPerTypePerMonth);
router.get('/task-status-counts', statsControllers.getTaskStatusCounts);
router.get('/partners-per-month', statsControllers.getPartnersPerMonth);
router.get('/offers-per-month', statsControllers.getOffersPerMonth);
router.get('/registrations-per-month', statsControllers.getUserRegistrationsPerMonth);
module.exports = router;
