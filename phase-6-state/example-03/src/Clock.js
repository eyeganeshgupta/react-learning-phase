import { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDateAndTime: new Date(),
    };
    setInterval(this.updateDateAndTime, 1000);
  }

  updateDateAndTime = () => {
    this.setState({ currentDateAndTime: new Date() });
  };

  render() {
    return (
      <div>
        <h2>Current Date And Time</h2>
        <h3>{this.state.currentDateAndTime.toLocaleString()}</h3>
      </div>
    );
  }
}

export default Clock;
