import { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "cc",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(synObj) {
    this.setState({ selectValue: synObj.target.value });
  }

  handleSubmit(synObj) {
    synObj.preventDefault();
    console.log(this.state.selectValue);
  }
}

export default MyComponent;
