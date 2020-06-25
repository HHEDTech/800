import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from './actions/actions';
import Board from './components/Board.jsx';
import Nav from './components/Nav.jsx';

const App = () => {
  const [press, setPressed] = useState(false);
  const dispatch = useDispatch();

  const keys = {
    '37': 'LEFT',
    '65': 'LEFT',
    '38': 'UP',
    '87': 'UP',
    '39': 'RIGHT',
    '68': 'RIGHT',
    '40': 'DOWN',
    '83': 'DOWN',
  };

  const keyDownHandle = (e) => {
    if (!keys[e.keyCode]) return;
    e.preventDefault();
    console.log(keys[e.keyCode]);
    dispatch(actions.move(keys[e.keyCode]));
  };

  const getHighScores = () => {
    fetch('/scores')
      .then((scores) => {
        console.log('scores: ', scores);
        dispatch(actions.UPDATE_LEADERBOARD);
      })
      .catch((err) => console.log(err));
  };

  const postScore = () => {
    let score = useSelector((state) => state.boxes.board[16]);

    fetch('/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    });
  };

  useEffect(() => {
    const board = document.querySelector('.game-container');
    board.setAttribute('tabindex', 0);
    board.addEventListener('keydown', keyDownHandle, true);
  }, []);

  return (
    <div className="app">
      <Nav />
      <Board />
    </div>
  );
};

export default App;
