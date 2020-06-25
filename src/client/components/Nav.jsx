import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../actions/actions';
import LoginModal from './LoginModal.jsx';

export default function Nav() {
  const loginStatus = useSelector((state) => state.modals.loginModal);
  const signupStatus = useSelector((state) => state.modals.signupModal);
  const dispatch = useDispatch();

  return (
    <div className="nav">
      <div className="login-btn-container">
        <button
          type="button"
          className="button-default login-btn"
          onClick={() => dispatch(actions.setLoginModal(!loginStatus))}
        >
          LOGIN
        </button>
        <button
          type="button"
          className="button-default signin-btn"
          onClick={() => dispatch(actions.setSignupModal(!signupStatus))}
        >
          SIGNUP
        </button>
      </div>
      <LoginModal
        isShowing={loginStatus}
        hide={() => dispatch(actions.setLoginModal(!loginStatus))}
        isLogin={true}
      />
      <LoginModal
        isShowing={signupStatus}
        hide={() => dispatch(actions.setSignupModal(!signupStatus))}
        isLogin={false}
      />
      <h1>800 HEX CHALLENGE OF DEATH</h1>
    </div>
  );
}
