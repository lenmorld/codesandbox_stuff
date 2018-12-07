/*
  react basics 1
  - component hierarachy, props passing, JSX, interpolation
*/

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    const groceries = ["eggs", "milk", "spam"];

    return (
      <div>
        <h1>Hello world!</h1>
        <List title={"My List:"} list={groceries} />
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    const list = this.props.list;

    return (
      <div>
        <h2>{this.props.title}</h2>

        <Item name={list[0]} />
        <Item name={list[1]} />
        <Item name={list[2]} />
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
