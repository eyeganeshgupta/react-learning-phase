import { Component } from "react";

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numb: 1,
    };
  }

  incrementBy1(syntheticEvent) {
    this.setState({ numb: this.state.numb + 1 });
  }

  inc(currentState) {
    return { numb: currentState.numb + 1 };
  }

  incrementBy3(syntheticEvent) {
    this.setState(this.inc);
    this.setState(this.inc);
    this.setState(this.inc);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Current value is: {this.state.numb}</h2>
        <button onClick={this.incrementBy1.bind(this)} className="btn btn-dark">
          Increment by + 1
        </button>
        <button onClick={this.incrementBy3.bind(this)} className="btn btn-dark">
          Increment by + 3
        </button>
      </div>
    );
  }
}

export default Increment;
