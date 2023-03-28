import { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "cc",
    };
    this.handleChange = this.handleChange.bind(this);
  }
}

export default MyComponent;
