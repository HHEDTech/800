import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../actions/actions';

const Signup = (props) => {
  const [input, setInput] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('e.target', e.target);
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: input.username,
        password: input.password,
      }),
    }).then((res) => {
      dispatch(actions.setSignupModal(false));
    });
  };

  const loginSignupToggle = (e) => {
    dispatch(actions.setLoginModal(true));
    dispatch(actions.setSignupModal(false));
  };

  return (
    <div className="login-title">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          autoComplete="off"
          type="text"
          name="username"
          placeholder="Username"
          value={input.username}
        />
        <input
          onChange={handleChange}
          autoComplete="off"
          type="password"
          name="password"
          placeholder="Password"
          value={input.password}
        />
        <input type="submit" value="Signup" />
      </form>
      Already have an account?{' '}
      <button className="signup-redirect" onClick={loginSignupToggle}>
        Login!
      </button>
    </div>
  );
};
export default Signup;
