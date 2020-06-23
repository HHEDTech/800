import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { useDispatch } from 'react-redux';
import * as types from './actions/actionTypes';
import actions from './actions/actions';
import Board from './components/Board.jsx';

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

  return (
    <div onKeyDown={keyDownHandle} tabIndex={0}>
      <h1>800 HEX CHALLENGE OF DEATH</h1>
      <Board />
    </div>
  );
};

class Row extends Component {
  constructor() {
    super();
  }

  render() {
    const boxes = [];
    for (let i = 0; i < 4; i++) {
      boxes.push(
        <Box key={'Box' + i} text={this.props.state[i + 4 * this.props.row]} />
      );
    }
    return <div className="row">{boxes}</div>;
  }
}

export default App;
