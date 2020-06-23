import React, { Component } from 'react';
import { render } from 'react-dom';
import { useDispatch } from 'react-redux';
import * as types from '../actions/actionTypes';

const [press, setPressed] = setState(false);

const keys = {
  '37': 'left',
  '38': 'up',
  '39': 'right',
  '40': 'down',
};

const keyDownHandle = (e) => {
  if(e.key === 37 || e.key === 65) 
  if(e.key === 38 || e.key === 87)
  if(e.key === 39 || e.key === 68)
  if(e.key === 40 || e.key === 83)
} 

useEffect(() => {
  const onKeyDown = ({key}) => {
    if ()
  };
}, []);

const App = () => {
  return (
    <div onKeyDown={keyDownHandle}>
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
