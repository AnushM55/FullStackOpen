import { useState } from "react";

const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getMaxVotes = (votes) => {
  return votes.indexOf(Math.max.apply(Math, votes));
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(random(0, anecdotes.length - 1));

  return (
    <div>
      <div>
        <h1>Anecdote of the Day</h1>
        {anecdotes[selected]}
        <br />
        has {votes[selected]} votes
        <br />
        <button
          onClick={() => {
            setSelected(random(0, anecdotes.length - 1));
          }}
        >
          next anecdote{" "}
        </button>
        <button
          onClick={() => {
            const newvote = [...votes];
            newvote[selected] += 1;
            setVotes(newvote);
          }}
        >
          vote for this{" "}
        </button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[getMaxVotes(votes)]}
        <br />
        <p> has {votes[getMaxVotes(votes)]} votes </p>
      </div>
    </div>
  );
};

export default App;
