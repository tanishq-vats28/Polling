import { useState } from "react";

export default function VoteForm({ poll, socket }) {
  const [selected, setSelected] = useState(null);
  const [username, setUsername] = useState("");

  const joinAndVote = () => {
    if (!username.trim() || selected === null)
      return alert("Enter name & select option");
    socket.emit("joinPoll", poll._id);
    socket.emit("vote", { pollId: poll._id, optionIndex: selected, username });
    setUsername("");
  };

  return (
    <div>
      <input
        className="username-input"
        type="text"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {poll.options.map((opt, i) => (
        <label key={i} className="option-label">
          <input
            type="radio"
            name="option"
            checked={selected === i}
            onChange={() => setSelected(i)}
          />{" "}
          {opt.text}
        </label>
      ))}
      <button className="button button-primary" onClick={joinAndVote}>
        Vote
      </button>
    </div>
  );
}
