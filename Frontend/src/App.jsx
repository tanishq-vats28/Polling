import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import CreatePoll from "./components/CreatePoll";
import PollList from "./components/PollList";

const socket = io(
  import.meta.env.VITE_SERVER_URL || "https://polling-1klx.onrender.com"
);

export default function App() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    axios.get("/api/polls").then((res) => setPolls(res.data));
    socket.on("pollUpdated", (updatedPoll) => {
      setPolls((prev) =>
        prev.map((p) => (p._id === updatedPoll._id ? updatedPoll : p))
      );
    });
    return () => socket.off("pollUpdated");
  }, []);

  return (
    <div className="container">
      <h1>Real-Time Polling</h1>
      <CreatePoll onNew={(poll) => setPolls([poll, ...polls])} />
      <PollList polls={polls} socket={socket} />
    </div>
  );
}
