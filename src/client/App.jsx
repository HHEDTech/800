import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
      .then((scores) => console.log('scores: ', scores))
      .catch((err) => console.log(err));
  };

  const postScore = () => {
    fetch('/scores', {
      method: 'POST',
    });
  };

  useEffect(() => {
<<<<<<< HEAD
    const board = document.querySelector('.board');
    board.addEventListener('keydown', keyDownHandle);
=======
    document.addEventListener('keydown', keyDownHandle);
    // getHighScores();
>>>>>>> cdaa85a45c404c5b91fa23b4ff42cef466579a1d
  }, []);

  return (
    <div className="container">
      <Nav />
      <Board />
    </div>
  );
};

export default App;
