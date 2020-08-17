import React from "react";
import { useSelector, useDispatch } from "react-redux";

import actions from "../actions/actions";
import LoginModal from "./LoginModal.jsx";

export default function Nav() {
  const loginStatus = useSelector((state) => state.modals.loginModal);
  const signupStatus = useSelector((state) => state.modals.signupModal);
  const activeUser = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  let welcome;
  if (activeUser) welcome = `Welcome, ${activeUser}`;
  else welcome = "Welcome!";

  return (
    <div className="nav">
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
      <h1>{welcome}!</h1>
      <h1>800 Hex</h1>
      <div className="login-btn-container">
        <button
          type="button"
          className="login-btn"
          onClick={() => dispatch(actions.setLoginModal(!loginStatus))}
        >
          LOGIN
        </button>
        <button
          type="button"
          className="signin-btn"
          onClick={() => dispatch(actions.setSignupModal(!signupStatus))}
        >
          SIGNUP
        </button>
      </div>
    </div>
  );
}
