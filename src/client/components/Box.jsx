import React, { Component } from 'react';

const Box = (props) => {
  return (
    <div className={`box ${props.color} ${props.fade ? 'fade' : ''}`}>
      {props.number}
    </div>
  );
};
export default Box;
