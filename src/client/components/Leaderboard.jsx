import React, { useEffect } from 'react';

function Leaderboard() {
  let leaderboard;
  useEffect(() => {
    fetch('/leaderboard', { METHOD: 'GET' })
      .then((res) => res.json())
      .then((res) => {
        console.log('Leaderboard data from server: ', res);
        leaderboard = res;
      });
  }, []);
  console.log('leaderboard', leaderboard);
  return <div className="leaderboard-container"></div>;
}

export default Leaderboard;
