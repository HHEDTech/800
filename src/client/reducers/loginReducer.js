import * as types from '../actions/actionTypes';

const initialState = {
  username: '',
  highscore: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      const username = action.payload;
      return { ...state, username };
    case types.UPDATE_HIGHSCORE:
      const highscore = action.payload;
      return { ...state, highscore };
    default:
      return state;
  }
};
