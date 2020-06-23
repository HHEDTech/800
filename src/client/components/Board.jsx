import React from 'react';
import { render } from 'react-dom';
import { useSelector } from 'react-redux';
import * as types from '../actions/actionTypes';
import Box from './Box.jsx';

const Board = () => {
  const boardArr = useSelector((state) => {
    console.log('State', state);
    return state.boxes.board;
  });
  console.log('boardArr -> ', boardArr);
  const boxes = boardArr.map((box, idx) => (
    <Box key={`box-${idx}`} number={box} />
  ));

  return <div className="board">{boxes}</div>;
};

export default Board;
