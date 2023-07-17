import { Component } from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

export default class TaskList extends Component {
  render() {
    return (
      <table className="TaskList">
        <thead>
          <tr>
            <th>Task</th>
            <th style={{ textAlign: "right" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {this.props.tasks.map((taskObj, index) => {
            return (
              <TaskItem
                key={index}
                taskObj={taskObj}
                position={index}
                deleteTask={this.props.deleteTask}
                editTask={this.props.editTask}
                toggleTask={this.props.toggleTask}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
