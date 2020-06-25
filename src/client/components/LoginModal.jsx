import React from 'react';
import ReactDOM from 'react-dom';

import Login from './Login.jsx';
import Signup from './Signup.jsx';

const LoginModal = ({ isShowing, hide, isLogin }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                Login
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {isLogin ? <Login /> : <Signup />}
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default LoginModal;
