import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../actions/actions';

const Login = (props) => {
  const [input, setInput] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('e.target', e.target);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: input.username,
        password: input.password,
      }),
    }).then((res) => {
      localStorage.setItem(
        'user',
        JSON.stringify({ username: input.username })
      );
      fetch('/scores', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log('/scores response', res);
          dispatch(actions.setHighScore(res.highscore));
        });
      dispatch(actions.setLogin(input.username));
      dispatch(actions.setLoginModal(false));
    });
  };

  const loginSignupToggle = (e) => {
    dispatch(actions.setLoginModal(false));
    dispatch(actions.setSignupModal(true));
  };

  return (
    <div className="login-title">
      <h2>Login</h2>
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
        <input type="submit" value="Login" />
      </form>
      No account?{' '}
      <button className="signup-redirect" onClick={(e) => loginSignupToggle(e)}>
        Signup!
      </button>
    </div>
  );
};
export default Login;
