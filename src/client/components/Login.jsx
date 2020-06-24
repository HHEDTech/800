import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [input, setInput] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    console.log('e.target', e.target);
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('e.target', e.target);
    fetch('/api/login', {
      METHOD: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username: input.username,
        password: input.password,
      },
    });
  };

  return (
    <div>
      <span>Login</span>
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
          type="text"
          name="password"
          placeholder="Password"
          value={input.password}
        />
        <input type="submit" value="Submit" />
      </form>
      <Link to="/register">Sign Up!!!</Link>
    </div>
  );
};
export default Login;
