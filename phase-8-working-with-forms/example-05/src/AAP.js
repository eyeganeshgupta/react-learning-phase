import { Component } from "react";
import aap from "./aam-aadmi-party.png";
import "./AAP.css";

class AAP extends Component {
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
      <div className="AAP">
        <h1>Aam Aadmi Party</h1>
        {this.state.isClicked && <img src={aap} alt="aap" />}
        <button onClick={this.handleClick.bind(this)}>Single Click</button>
      </div>
    );
  }
}

export default AAP;
