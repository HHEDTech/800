import React from 'react';

const Signup = (props) => {
  return (
    <div>
      <span>Signup</span>
      <input autoComplete="off" type="text" name="username" placeholder="username" />
      <input autoComplete="off" type="text" name="password" placeholder="password" />
      <button type="button">Submit</button>
    </div>
  );
};

export default Signup;
