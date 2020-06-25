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
      dispatch(actions.setLogin(input.username));
      dispatch(actions.setLoginModal(false));
    });
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
        <input type="submit" value="Submit" />
      </form>
      No account? <button className="signup-redirect"></button>
    </div>
  );
};
export default Login;
