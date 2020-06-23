import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { render } from 'react-dom';
import * as types from '../actions/actionTypes';

class Board extends Component {
  constructor() {
    super();
    let a = Math.floor(Math.random() * 16);
    let b = a;
    while (b == a) {
      b = Math.floor(Math.random() * 16);
    }
    let aValue = 2;
    let bValue = 2 * Math.floor(Math.random() * 2) + 2;
    let arr = ' '.repeat(16).split('');
    arr[a] = aValue;
    arr[b] = bValue;
    this.state = { ...arr };
    this.over = false;
  }
  render() {
    const rows = [];
    for (let i = 0; i < 4; i++) {
      rows.push(<Row key={'Row' + i} row={i} state={this.state} />);
    }
    return <div>{rows}</div>;
  }
}

const Board = (props) => {
  const [over, updateOver] = useState(false);
  this.state = {
    boxes: [...arr],
  };

  const [boxes, updateBox] = useState(Array(16).fill(''));

  useEffect(() => {
    const dispatch = useDispatch();
    dispatch({ type: types.INITIALIZE });

    let a = Math.floor(Math.random() * 16);
    let b = a;
    while (b == a) {
      b = Math.floor(Math.random() * 16);
    }
    let aValue = 2;
    let bValue = 2 * Math.floor(Math.random() * 2) + 2;
    let arr = ' '.repeat(16).split('');
    arr[a] = aValue;
    arr[b] = bValue;
  }, []);
};
