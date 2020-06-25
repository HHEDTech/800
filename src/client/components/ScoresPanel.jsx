import React from 'react';
import { useSelector } from 'react-redux';

const ScoresPanel = (props) => {
  // const score = useSelector(state => state.score)
  return (
    <div className="score">
      <h3>Your score:</h3> <div>score placeholder</div>
    </div>
  );
};

export default ScoresPanel;
