import React, { Component } from "react";
import MyInput from "./MyInput";

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  handleSubmit(synObj) {
    this.componentRef.current.giveFocus();
  }

  render() {
    return (
      <div>
        <MyInput ref={this.componentRef} />
        <button onClick={this.handleSubmit.bind(this)}>Get Focus</button>
      </div>
    );
  }
}
