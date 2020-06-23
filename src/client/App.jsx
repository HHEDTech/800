import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
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
    e.preventDefault();
    if (!keys[e.keyCode]) return;
    console.log(keys[e.keyCode]);
    dispatch(actions.move(keys[e.keyCode]));
  };
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandle);
  }, []);

  return (
    <div className="container">
      <Nav />
      <Board />
    </div>
  );
};

export default App;
