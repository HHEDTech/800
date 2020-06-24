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
// export const MOVE = 'MOVE'
// export const UPDATE_SCORE = 'UPDATE_SCORE';
// export const LOGIN = 'LOGIN';
actions.move = (direction) => ({
  type: types.MOVE,
  payload: direction,
});

export default actions;
