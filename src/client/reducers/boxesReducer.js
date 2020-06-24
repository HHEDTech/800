// import * as types from '../actions/actionTypes';

const initialState = {
  score: 0,
  leaderboard: [],
  board: new Array(16).fill(null),
};

// get loc of first
const a = Math.floor(Math.random() * 16);
let b = a;
// get valid loc of second
while (b == a) {
  b = Math.floor(Math.random() * 16);
}
// set first to 2
const aValue = 2;
// set second to 50/50 chance of 2 or 4
const bValue = 2 * Math.floor(Math.random() * 2) + 2;
// assign
initialState.board[a] = aValue;
initialState.board[b] = bValue;

/*
board = [1,  2,  3,  4,
         5,  6,  7,  8,
         9, 10, 11, 12,
         13, 14, 15, 16]
*/

const boxesReducer = (state = initialState, action) => {
  switch (action.payload) {
    case 'UP':
    case 'DOWN':
      const newBoard = state.board.map((elem, i) => (i === 12 ? 616 : elem));
      return { ...state, board: newBoard };
    case 'LEFT':
    case 'RIGHT':
  }

  return state;
};

export default boxesReducer;
