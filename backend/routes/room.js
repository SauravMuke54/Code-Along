const express = require("express");
const { addData, getData } = require("../controllers/room");
const router = express.Router();

router.post("/add-data",addData)
router.post("/get-data",getData)

module.exports = router;
