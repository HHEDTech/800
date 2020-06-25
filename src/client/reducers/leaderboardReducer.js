import * as types from '../actions/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  if (action.type === types.UPDATE_LEADERBOARD) {
    // console.log('Entering leaderboardReducer');
    // console.log('action.payload', action.payload);
    const newLeaderboard = action.payload.slice();
    return [...newLeaderboard];
  }
  return state;
};
