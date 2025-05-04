const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
  text: String,
  votes: { type: Number, default: 0 },
});

const PollSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    options: [OptionSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Poll", PollSchema);
