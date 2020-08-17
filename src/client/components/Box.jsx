import React, { Component } from "react";

const Box = (props) => {
  return (
    <div
      className={`box ${props.color} ${props.fade ? "fade" : ""}`}
      style={{ fontFamily: "Arial" }}
    >
      {props.number}
    </div>
  );
};
export default Box;
