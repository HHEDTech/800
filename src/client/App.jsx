import React, { Component } from "react";
import { render } from "react-dom";

class Box extends Component {
  constructor() {
    super();
  }

  render() {
    return <div id="box">{this.props.text}</div>;
  }
}

class Row extends Component {
  constructor() {
    super();
  }

  render() {
    const boxes = [];
    for (let i = 0; i < 4; i++) {
      boxes.push(<Box key={"Box" + i} text={this.props.state[i + 4 * this.props.row]} />);
    }
    return <div className="row">{boxes}</div>;
  }
}

class Board extends Component {
  constructor() {
    super();
    let a = Math.floor(Math.random() * 16);
    let b = a;
    while (b == a) {
      b = Math.floor(Math.random() * 16);
    }
    let aValue = 2;
    let bValue = 2 * Math.floor(Math.random() * 2) + 2;
    let arr = " ".repeat(16).split("");
    arr[a] = aValue;
    arr[b] = bValue;
    this.state = { ...arr };
    this.over = false;
  }

  render() {
    const rows = [];
    for (let i = 0; i < 4; i++) {
      rows.push(<Row key={"Row" + i} row={i} state={this.state} />);
    }
    return <div>{rows}</div>;
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <h1>800 HEX CHALLENGE OF DEATH</h1>
        <Board />
      </div>
    );
  }
}

export default App;
