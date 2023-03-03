import { Component } from "react";
import "./MyClicker.css";

class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numb: 1,
    };
    this.generateRandomNumber = this.generateRandomNumber.bind(this);
  }

  generateRandomNumber(syntheticObj) {
    this.setState({ numb: Math.floor(Math.random() * 10) + 1 });
  }

  render() {
    return (
      <div className="MyClicker">
        <h2>Generated number is: {this.state.numb}</h2>
        {this.state.numb === 5 ? (
          <p>You win!</p>
        ) : (
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.generateRandomNumber}
          >
            Generate Random Number
          </button>
        )}
      </div>
    );
  }
}

export default MyClicker;
