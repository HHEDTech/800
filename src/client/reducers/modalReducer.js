import * as types from '../actions/actionTypes';

const initialState = {
  loginModal: false,
  signupModal: false,
};

export default (state = initialState, action) => {
  console.log('Entering modalReducer');
  switch (action.type) {
    case types.LOGIN_MODAL:
      console.log('action.payload', action.payload);
      const loginStatus = action.payload;
      return { ...state, loginModal: loginStatus };
    case types.SIGNUP_MODAL:
      console.log('action.payload', action.payload);
      const signupStatus = action.payload;
      return { ...state, signupModal: signupStatus };
  }
  return state;
};
