import { Component } from "react";
import bjp from "./bhartiya-janta-party.png";
import "./BJP.css";

class BJP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  handleClick(synEventObj) {
    if (!this.state.isClicked) {
      this.setState({ isClicked: true });
    }
  }

  render() {
    return (
      <div className="BJP">
        <h1>Bhartiya Janta Party</h1>
        {this.state.isClicked && <img src={bjp} alt="bjp" />}
        <button onDoubleClick={this.handleClick.bind(this)}>
          Double Click
        </button>
      </div>
    );
  }
}

export default BJP;
