const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const { Server } = require("socket.io");

const pollRoutes = require("./routes/pollRoutes");
const voteRoutes = require("./routes/voteRoutes");

const app = express();
const server = http.createServer(app);

const allowedOrigin = "https://cool-bombolone-f23445.netlify.app/";

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/polls", pollRoutes);
app.use("/api/polls", voteRoutes);

const io = new Server(server, {
  cors: {
    origin: allowedOrigin,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

mongoose
  .connect(
    "mongodb+srv://tanishqvats620:bO2gnsacPwj2ALWR@cluster0.g8s1op3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

io.on("connection", (socket) => {
  socket.on("joinPoll", (pollId) => socket.join(pollId));
  socket.on("vote", async ({ pollId, optionIndex, username }) => {
    const { castVote } = require("./controllers/voteController");
    const fakeReq = { params: { pollId }, body: { optionIndex, username } };
    const fakeRes = {
      json: (poll) => io.to(pollId).emit("pollUpdated", poll),
      status: () => fakeRes,
      sendStatus: () => {},
    };
    await castVote(fakeReq, fakeRes);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
