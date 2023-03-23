import { Component } from "react";
import congress from "./indian-national-congress.png";
import "./Congress.css";

class Congress extends Component {
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
      <div className="Congress">
        <h1>Indian National Congress</h1>
        {this.state.isClicked && <img src={congress} alt="congress" />}
        <button onMouseOver={this.handleClick.bind(this)}>On Mouse Over</button>
      </div>
    );
  }
}

export default Congress;
