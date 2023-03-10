import { Component } from "react";
import "./KeyDetector.css";

class KeyDetector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      code: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(synBaseObj) {
    console.log(synBaseObj);
    this.setState({
      key: synBaseObj.key,
      code: synBaseObj.code,
    });
  }

  render() {
    return (
      <div className="KeyDetector">
        <h1>Key Detector</h1>
        <h3>
          key: {this.state.key}, code: {this.state.code}
        </h3>
        <input
          type="text"
          placeholder="Enter any"
          onKeyDown={this.handleClick}
        />
      </div>
    );
  }
}

export default KeyDetector;
