import { Component } from "react";

export default class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }

  handleClick(step, syntheticBaseEvent) {
    this.setState((currentState) => {
      return { counter: currentState.counter + step };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick.bind(this, 1)}>+1</button>
        <button onClick={this.handleClick.bind(this, 2)}>+2</button>
        <button onClick={this.handleClick.bind(this, 3)}>+3</button>
      </div>
    );
  }
}
