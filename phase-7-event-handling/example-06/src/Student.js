import { Component } from "react";

export default class Student extends Component {
  handleClick(name, rollNo, syntheticEventObj) {
    console.log("Student name: " + name);
    console.log("Student rollNo: " + rollNo);
    console.log(syntheticEventObj);
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick.bind(
            this,
            this.props.name,
            this.props.roll
          )}
        >
          View Details
        </button>
      </div>
    );
  }
}
