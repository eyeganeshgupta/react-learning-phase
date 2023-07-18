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
}
