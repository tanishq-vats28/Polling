const express = require("express");
const router = express.Router();
const { createPoll, getPolls } = require("../controllers/pollController");

router.post("/", createPoll);
router.get("/", getPolls);

module.exports = router;
