const Poll = require("../models/Poll");
const Vote = require("../models/Vote");

exports.castVote = async (req, res) => {
  const { pollId } = req.params;
  const { optionIndex, username } = req.body;

  const vote = new Vote({ poll: pollId, optionIndex, username });
  await vote.save();

  const poll = await Poll.findById(pollId);
  if (!poll) return res.sendStatus(404);
  poll.options[optionIndex].votes++;
  await poll.save();

  res.json(poll);
};
