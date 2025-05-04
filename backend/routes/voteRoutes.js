const express = require("express");
const router = express.Router();
const { castVote } = require("../controllers/voteController");

router.post("/:pollId/vote", castVote);

module.exports = router;
