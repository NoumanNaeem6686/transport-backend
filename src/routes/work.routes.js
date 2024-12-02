const express = require("express")
const { createEntry, getAllEntries, deleteEntry } = require("../controllers/work.controllers")
const router = express.Router();

router.post("/", createEntry);
router.get("/", getAllEntries);
router.delete("/:id", deleteEntry);

module.exports = router;

