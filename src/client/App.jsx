import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import actions from './actions/actions';
import './Modal.css';
import Board from './components/Board.jsx';
import Nav from './components/Nav.jsx';
import Modal from './components/Modal.jsx';
import ScoresPanel from './components/ScoresPanel.jsx';
import useModal from './common/useModal';

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
    const board = document.querySelector('.board');
    board.addEventListener('keydown', keyDownHandle);
  }, []);

  return (
    <div className="container">
      <Nav />
      <div className="game-container">
        <ScoresPanel />
        <Board />
      </div>
    </div>
  );
};

export default App;
