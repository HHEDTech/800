import * as types from '../actions/actionTypes';

const initialState = '';

export default (state = initialState, action) => {
  console.log('Entering loginReducer');
  if (action.type === types.LOGIN_SUCCESS) {
    console.log('action.payload', action.payload);
    const username = action.payload;
    return username;
  }
  return state;
};
