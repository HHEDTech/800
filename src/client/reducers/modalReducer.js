import * as types from '../actions/actionTypes';

const initialState = {
  loginModal: false,
  signupModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_MODAL:
      const loginStatus = action.payload;
      return { ...state, loginModal: loginStatus };
    case types.SIGNUP_MODAL:
      const signupStatus = action.payload;
      return { ...state, signupModal: signupStatus };
  }
  return state;
};
