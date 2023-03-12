import { Component } from "react";
import "./Task.css";

class Task extends Component {
  render() {
    return (
      <div className="Task">
        <input
          type="text"
          placeholder="Enter any"
          onKeyDown={this.handleClick.bind(this)}
        />
      </div>
    );
  }

  handleClick(synEventBase) {
    if (synEventBase.key === "Enter") {
      alert(synEventBase.target.value);
    } else if (synEventBase.key === "Escape") {
      let ress = window.confirm("Do you really want to clear the inputBox?");
      if (ress === true) {
        synEventBase.target.value = "";
      }
    }
  }
}

export default Task;
