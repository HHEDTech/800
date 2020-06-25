import React from 'react';

import useModal from '../common/useModal';
import LoginModal from './LoginModal.jsx';

export default function Nav() {
  const { isShowing: loginShowing, toggle: loginToggle } = useModal();
  const { isShowing: signinShowing, toggle: signinToggle } = useModal();
  // Need to add login stuff

  return (
    <div className="nav">
      <div className="login-btn-container">
        <button
          type="button"
          className="button-default login-btn"
          onClick={loginToggle}
        >
          LOGIN
        </button>
        <button
          type="button"
          className="button-default signin-btn"
          onClick={signinToggle}
        >
          SIGNIN
        </button>
      </div>
      <LoginModal isShowing={loginShowing} hide={loginToggle} isLogin={true} />
      <LoginModal
        isShowing={signinShowing}
        hide={signinToggle}
        isLogin={false}
      />
      <h1>800 HEX CHALLENGE OF DEATH</h1>
    </div>
  );
}
