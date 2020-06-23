import React, { Component } from 'react';
import { render } from 'react-dom';

const Box = (props) => {
  return <div id="box">{props.number}</div>;
};

export default Box;
