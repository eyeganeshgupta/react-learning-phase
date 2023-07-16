import { Component } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import "./Main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }

  createTask(taskName) {
    if (taskName.trim() === "") {
      alert("Task is empty");
      return;
    }

    let newTask = {
      taskName: taskName.trim(),
      isCompleted: false,
    };

    let allTask = [...this.state.tasks, newTask];

    this.setState({
      tasks: allTask,
    });
  }

  deleteTask(idx) {
    let newTaskArr = this.state.tasks.filter((taskObj, index) => {
      return index !== idx;
    });

    this.setState({
      tasks: newTaskArr,
    });
  }

  editTask(index, taskName) {
    let arr = [...this.state.tasks];
    arr[index].taskName = taskName;
    this.setState({
      tasks: arr,
    });
  }

  toggleTask(index) {
    let allTask = [...this.state.tasks];
    allTask[index].isCompleted = !allTask[index].isCompleted;
    this.setState({
      tasks: allTask,
    });
  }

  render() {
    return (
      <div className="Main">
        <h1>Todo List</h1>
        <div className="content">
          <div>
            <CreateTask createTask={this.createTask} />
          </div>
          <div>
            <TaskList
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
              toggleTask={this.toggleTask}
            />
          </div>
        </div>
      </div>
    );
  }
}
