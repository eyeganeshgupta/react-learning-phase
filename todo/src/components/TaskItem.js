import { Component } from "react";
import "./TaskItem.css";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {
      taskName: this.props.taskObj.taskName,
      isEditing: false,
    };
    this.setIsEditing = this.setIsEditing.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }

  handleChange(synEventObj) {
    this.setState({
      taskName: synEventObj.target.value,
    });
  }

  handleSubmit(synEventObj) {
    synEventObj.preventDefault();
    this.props.editTask(this.props.position, this.state.taskName);
    this.setIsEditing(false);
  }

  deleteTask() {
    this.props.deleteTask(this.props.position);
  }

  setIsEditing(editing) {
    this.setState({
      isEditing: editing,
    });
  }

  toggleTask() {
    this.props.toggleTask(this.props.position);
  }

  render() {
    let tableRow;
    if (this.state.isEditing) {
      tableRow = (
        <tr>
          <td colSpan="2">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.taskName}
                onChange={this.handleChange}
              />
              <span style={{ float: "right" }}>
                <button className="save task">Save</button>
                <button
                  className="back task"
                  onClick={() => this.setIsEditing(false)}
                >
                  Back
                </button>
              </span>
            </form>
          </td>
        </tr>
      );
    } else {
      tableRow = (
        <tr>
          <td onClick={this.toggleTask} className="task">
            <input
              type="checkbox"
              readOnly
              checked={this.props.taskObj.isCompleted}
            />
            <span
              className={
                this.props.taskObj.isCompleted ? "completed" : "not-completed"
              }
            >
              {this.props.taskObj.taskName}
            </span>
          </td>
          <td className="actions">
            <button
              className="edit task"
              onClick={() => this.setIsEditing(true)}
            >
              Edit
            </button>
            <button className="delete task" onClick={this.deleteTask}>
              Delete
            </button>
          </td>
        </tr>
      );
    }

    return tableRow;
  }
}
