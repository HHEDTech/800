import React, { Component } from 'react';
import { render } from 'react-dom';

const Box = (props) => {
  return <div className="box">{props.number}</div>;
};
export default Box;
