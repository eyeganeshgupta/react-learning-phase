import { Component } from "react";
import "./LoginForm.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      isSubmitted: false,
    };

    this.tempUsername = "";
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(syntheticObj) {
    this.setState({ username: syntheticObj.target.value, isSubmitted: false });
  }

  handleSubmit(syntheticObj) {
    syntheticObj.preventDefault();
    this.tempUsername = this.state.username;
    this.setState({ username: "", isSubmitted: true });
  }

  render() {
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <h1>Login Form</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={this.state.username}
            placeholder="Type your username"
            onChange={this.handleChange}
          />
        </div>
        <button>Submit</button>
        {this.state.isSubmitted && (
          <p>
            You typed: <span>{this.tempUsername}</span>
          </p>
        )}
      </form>
    );
  }
}
