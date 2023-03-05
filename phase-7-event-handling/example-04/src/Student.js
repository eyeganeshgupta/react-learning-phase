import { Component } from "react";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.handleArgClick = this.handleArgClick.bind(this);
  }

  handleClick(studentName, rollNo, synBaseEventObj) {
    console.log("Student name: " + studentName);
    console.log("Student rollNo: " + rollNo);
  }

  handleArgClick(synBaseEventObj) {
    this.handleClick(this.props.name, this.props.roll, synBaseEventObj);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleArgClick}>View Details</button>
      </div>
    );
  }
}
