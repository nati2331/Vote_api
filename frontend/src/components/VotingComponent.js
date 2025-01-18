import React, { useState } from "react";
import "../style/VotingComponent.css";

const VotingComponent = () => {
  // State to hold vote counts
  const [votes, setVotes] = useState({
    optionA: 0,
    optionB: 0,
    optionC: 0,
  });

  // Function to handle voting
  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Vote for Your Favorite Option</h2>
      <div>
        {/* Option A */}
        <button
          style={{ margin: "10px", padding: "10px 20px" }}
          onClick={() => handleVote("optionA")}
        >
          Option A - Votes: {votes.optionA}
        </button>

        {/* Option B */}
        <button
          style={{ margin: "10px", padding: "10px 20px" }}
          onClick={() => handleVote("optionB")}
        >
          Option B - Votes: {votes.optionB}
        </button>

        {/* Option C */}
        <button
          style={{ margin: "10px", padding: "10px 20px" }}
          onClick={() => handleVote("optionC")}
        >
          Option C - Votes: {votes.optionC}
        </button>
      </div>
    </div>
  );
};

export default VotingComponent;
