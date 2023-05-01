import { Component } from "react";

export default class ComponentB extends Component {
  componentDidMount() {
    console.log("Component B: componentDidMount()");
  }

  constructor(props) {
    super(props);
    console.log("Component B: constructor()");
    this.state = {
      lastName: "Gupta",
    };
  }

  static getDerivedStateFromProps() {
    console.log("Component B: getDerivedStateFromProps()");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Component B: shouldComponentUpdate");
    if (this.state.lastName !== nextState.lastName) {
      return true;
    }
    return false;
  }

  render() {
    console.log("Component B: render()");

    return (
      <div>
        <h1>{this.state.lastName}</h1>
      </div>
    );
  }
}
