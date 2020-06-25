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
  type: types.LOGIN,
  payload: username,
});
export default actions;
