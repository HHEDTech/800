import React from 'react';
import { useSelector } from 'react-redux';

const ScoresPanel = (props) => {
  const score = useSelector((state) => state.boxes.score);
  const activeUser = useSelector((state) => state.user.username);
  const highscore = useSelector((state) => state.user.highscore);
  let recordPanel;
  if (activeUser) {
    recordPanel = (
      <div className="user-highscore">
        <h3>Your record:</h3>
        <h1 className="score">{highscore}</h1>
      </div>
    );
  } else
    recordPanel = (
      <div className="user-highscore">
        <h3>Sign in to save your scores</h3>
      </div>
    );
  return (
    <div className="scores">
      <div className="user-score">
        <h3>Your score:</h3>
        <h1>{score}</h1>
      </div>
      {recordPanel}
    </div>
  );
};

export default ScoresPanel;
