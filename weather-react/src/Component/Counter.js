import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: "red",
    };
  }

  increament = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreament = () => {
    if (this.state.count < 1) {
      return;
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count, color } = this.state;

    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <p className="color">{color}</p>
        <div>
          <button onClick={() => this.setState({ color: "blue" })}>
            Change color
          </button>
          <button onClick={this.increament}>increase</button>
          <button onClick={this.reset}>reset to 0</button>
          <button disabled={count === 0} onClick={this.decreament}>
            decrease
          </button>
        </div>
      </div>
    );
  }
}
