import { Component } from "react";
import ComponentB from "./ComponentB";

export default class ComponentA extends Component {
  componentDidMount() {
    console.log("Component A: componentDidMount()");
  }

  constructor(props) {
    super(props);
    console.log("Component A: constructor()");
    this.state = {
      firstName: "Ganesh",
    };
  }

  handleClick(syntheticBaseEvent) {
    console.log("Component A: handleClick");
    this.setState({ firstName: "Ganesh" });
  }

  static getDerivedStateFromProps() {
    console.log("Component A: getDerivedStateFromProps()");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.firstName !== nextState.firstName) {
      return true;
    }
    console.log("Component A: shouldComponentUpdate");
    return false;
  }

  render() {
    console.log("Component A: render()");

    return (
      <div>
        <h1>{this.state.firstName}</h1>
        <div>
          <ComponentB />
        </div>
        <button onClick={this.handleClick.bind(this)}>Click me</button>
      </div>
    );
  }
}
