const express = require("express")
const {  createPartner,deletePartner,getAllPartners} = require("../controllers/partners.controllers")
const router = express.Router();

router.post("/", createPartner); 
router.get("/", getAllPartners);
router.delete("/:id", deletePartner); 

module.exports = router;

