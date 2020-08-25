import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "./actions/actions";
import Board from "./components/Board.jsx";
import Nav from "./components/Nav.jsx";

const App = () => {
  const keys = {
    "37": "LEFT",
    "65": "LEFT",
    "38": "UP",
    "87": "UP",
    "39": "RIGHT",
    "68": "RIGHT",
    "40": "DOWN",
    "83": "DOWN",
  };
  // const [press, setPressed] = useState(false);
  const gameOver = useSelector((state) => state.boxes.gameOver);
  const username = useSelector((state) => state.user.username);
  const score = useSelector((state) => state.boxes.score);
  const dispatch = useDispatch();

  if (gameOver) {
    const board = document.querySelector(".game-container");
    board.removeEventListener("keydown", keyDownHandle);
    if (username) {
      fetch("/scores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ score }),
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch(actions.setHighScore(res.highscore));
          dispatch(actions.updateLeaderboard(res.leaderboard));
        });
      !gameOver;
    }
  }
  const activeUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (activeUser) {
      fetch("/scores", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (!res.error) {
            dispatch(actions.setHighScore(res.highscore));
            dispatch(actions.setLogin(res.username));
          }
        });
    }
  }, []);

  const keyDownHandle = (e) => {
    if (!keys[e.keyCode]) return;
    e.preventDefault();
    dispatch(actions.move(keys[e.keyCode]));
  };
  // const getHighScores = () => {
  //   fetch('/scores')
  //     .then((scores) => {
  //       console.log('scores: ', scores);
  //       dispatch(actions.UPDATE_LEADERBOARD);
  //     })
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    const board = document.querySelector(".game-container");
    board.setAttribute("tabindex", 0);
    board.addEventListener("keydown", keyDownHandle, true);
  }, []);

  return (
    <div className="app">
      <Nav />
      <Board />
    </div>
  );
};

export default App;
