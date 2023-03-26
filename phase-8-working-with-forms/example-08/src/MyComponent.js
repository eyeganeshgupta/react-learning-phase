import { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: "Your views about this movie",
    };
    this.handleChange = this.handleChange.bind(this);
  }
}

export default MyComponent;
