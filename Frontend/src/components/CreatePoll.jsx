import { useState } from "react";
import axios from "axios";

export default function CreatePoll({ onNew }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const addOption = () => setOptions([...options, ""]);
  const handleOptionChange = (idx, val) => {
    const copy = [...options];
    copy[idx] = val;
    setOptions(copy);
  };

  const submit = async () => {
    if (!question.trim() || options.some((opt) => !opt.trim())) return;
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/polls`, {
      question,
      options,
    });

    onNew(res.data);
    setQuestion("");
    setOptions(["", ""]);
  };

  return (
    <div className="create-poll">
      <input
        type="text"
        placeholder="Poll question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {options.map((opt, i) => (
        <input
          key={i}
          type="text"
          placeholder={`Option ${i + 1}`}
          value={opt}
          onChange={(e) => handleOptionChange(i, e.target.value)}
        />
      ))}
      <div className="button-group">
        <button className="button button-secondary" onClick={addOption}>
          Add Option
        </button>
        <button className="button button-primary" onClick={submit}>
          Create Poll
        </button>
      </div>
    </div>
  );
}
