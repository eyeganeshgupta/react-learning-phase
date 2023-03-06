import { Component } from "react";

export default class Student extends Component {
  handleClick(studentName, rollNo, synBaseEventObj) {
    console.log("Student name: " + studentName);
    console.log("Student rollNo: " + rollNo);
  }

  render() {
    return (
      <div>
        <button
          onClick={(synBaseEventObj) => {
            this.handleClick(this.props.name, this.props.roll, synBaseEventObj);
          }}
        >
          View Details
        </button>
      </div>
    );
  }
}
