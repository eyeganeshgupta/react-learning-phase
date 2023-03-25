import React, { Component } from "react";

export default class MyInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  giveFocus() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
