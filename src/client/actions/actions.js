/**
 * ************************************
 *
 * @module  actions.js
 * @author  HHEDTech
 * @date    6/23/2020
 * @description Action creators
 *
 * ************************************
 */
import * as types from './actionTypes';

const actions = {};

actions.move = (direction) => ({
  type: types.MOVE,
  payload: direction,
});
actions.updateLeaderboard = (scoresArray) => ({
  type: types.UPDATE_LEADERBOARD,
  payload: scoresArray,
});
actions.setLogin = (username) => ({
  type: types.LOGIN_SUCCESS,
  payload: username,
});
actions.setLoginModal = (status) => ({
  type: types.LOGIN_MODAL,
  payload: status,
});
actions.setSignupModal = (status) => ({
  type: types.SIGNUP_MODAL,
  payload: status,
});
actions.setHighScore = (highscore) => ({
  type: types.UPDATE_HIGHSCORE,
  payload: highscore,
});
actions.resetBoard = () => ({
  type: types.RESET_BOARD,
});
export default actions;
