import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as types from './actions/actionTypes';
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
    document.addEventListener('keydown', keyDownHandle);
    // getHighScores();
  }, []);

  return (
    <div className="container">
      <Nav />
      <Board />
    </div>
  );
};

export default App;
