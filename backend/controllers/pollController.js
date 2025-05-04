const Poll = require("../models/Poll");

exports.createPoll = async (req, res) => {
  const { question, options } = req.body;
  const poll = new Poll({
    question,
    options: options.map((text) => ({ text })),
  });
  await poll.save();
  res.status(201).json(poll);
};

exports.getPolls = async (req, res) => {
  const polls = await Poll.find().sort({ createdAt: -1 });
  res.json(polls);
};
