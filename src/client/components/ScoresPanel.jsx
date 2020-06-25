import React from 'react';
import { useSelector } from 'react-redux';

const ScoresPanel = (props) => {
  // const score = useSelector();
  return (
    <div className="scores">
      <div>your score: </div>
      <div>high scores: </div>
    </div>
  );
};

export default ScoresPanel;
