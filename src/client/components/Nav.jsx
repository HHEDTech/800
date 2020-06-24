import React from 'react';

import useModal from '../common/useModal';
import Modal from './Modal.jsx';

export default function Nav() {
  const { isShowing, toggle } = useModal();
  // Need to add login stuff

  return (
    <div className="nav">
      <button type="button" className="button-default login-btn" onClick={toggle}>
        LOGIN!!@!!
      </button>
      <Modal isShowing={isShowing} hide={toggle} />
      <h1>800 HEX CHALLENGE OF DEATH</h1>
    </div>
  );
}
