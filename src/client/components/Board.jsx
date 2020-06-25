import React from 'react';
import { useSelector } from 'react-redux';
import ScoresPanel from './ScoresPanel.jsx';
import Box from './Box.jsx';
import Leaderboard from './Leaderboard.jsx';

const Board = () => {
  const boardArr = useSelector((state) => {
    console.log('State', state);
    return state.boxes.board;
  });
  console.log('boardArr -> ', boardArr);
  const boxes = boardArr.map((number, idx) => {
    let color;
    switch (number) {
      case null:
        break;
      case 2:
        color = 'color2';
        break;
      case 4:
        color = 'color4';
        break;
      case 8:
        color = 'color8';
        break;
      case 10:
        color = 'color10';
        break;
      case 20:
        color = 'color20';
        break;
      case 40:
        color = 'color40';
        break;
      case 80:
        color = 'color80';
        break;
      case 100:
        color = 'color100';
        break;
      case 200:
        color = 'color200';
        break;
      case 400:
        color = 'color400';
        break;
      case 800:
        color = 'color800';
        break;
      default:
        color = 'black';
    }
    return <Box key={`box-${idx}`} number={number} color={color} />;
  });

  return (
    <div className="main-container">
      <div className="game-container">
        <ScoresPanel />
        <div className="board">{boxes}</div>
      </div>
      <Leaderboard />
    </div>
  );
};

export default Board;
