import React from 'react';
import { useSelector } from 'react-redux';

const ScoresPanel = (props) => {
  const score = useSelector((state) => state.boxes.score);
  const highscore = useSelector((state) => state.user.highscore);

  return (
    <div className="scores">
      <div className="user-score">
        <h3>Your score:</h3>
        <h1>{score}</h1>
      </div>
      <div className="user-highscore">
        <h3>Your record:</h3>
        <h1 className="score">{highscore}</h1>
      </div>
    </div>
  );
};

export default ScoresPanel;
