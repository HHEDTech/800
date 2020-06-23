import React from 'react';
import { render } from 'react-dom';
import { useSelector } from 'react-redux';
import * as types from '../actions/actionTypes';
import Box from './Box.jsx';
import store from '../store.js';

const Board = () => {
  const boardArr = useSelector((state) => state.boxes.board);
  console.log(boardArr);
  const boxes = boardArr.map((box, idx) => (
    <Box key={`box-${idx}`} number={box} />
  ));

  return <div className="board">{boxes}</div>;
};

export default Board;
