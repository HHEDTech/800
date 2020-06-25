import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../actions/actions';

function Leaderboard() {
  const dispatch = useDispatch();
  let leaderboard = useSelector((state) => state.leaderboard);

  useEffect(() => {
    fetch('/leaderboard', { METHOD: 'GET' })
      .then((res) => res.json())
      .then((res) => {
        // console.log('Leaderboard data from server: ', res);
        dispatch(actions.updateLeaderboard(res));
      });
  }, []);
  // console.log('Leaderboard outside of useEffect', leaderboard);
  const leaders = leaderboard.map((leader, idx) => (
    <div className="leader" key={`leader-${idx}`}>
      <h1 className="leader-name">{leader.username}</h1> {'  '}
      <h1 className="leader-score">{leader.score}</h1>
    </div>
  ));
  return (
    <div className="leaderboard-container">
      <h1>Global High Scores</h1>
      {leaders}
    </div>
  );
}

export default Leaderboard;
