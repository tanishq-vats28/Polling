import VoteForm from "./VoteForm";
import ResultsChart from "./ResultsChart";

export default function PollList({ polls, socket }) {
  return (
    <div>
      {polls.map((poll) => (
        <div key={poll._id} className="poll-item">
          <h3>{poll.question}</h3>
          <VoteForm poll={poll} socket={socket} />
          <ResultsChart poll={poll} />
        </div>
      ))}
    </div>
  );
}
