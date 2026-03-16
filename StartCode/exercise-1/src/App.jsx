import React, { useState } from "react";

export default function App() {

  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    // 1- Compute width
    // const scoreWidth = `40%`;
    const scoreWidth = `${score * 10}%`;


    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if (score >= 8) {
      scoreColor = `#8dbf42`;
    } else if (score >= 4) {
      scoreColor = `#b5cc45`;
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  const handleScoreChange = (e) => {
    const value = e.target.value;
    if (value >= 0 && value <= 10) {
      setScore(value);
    }
  }

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={handleScoreChange}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
