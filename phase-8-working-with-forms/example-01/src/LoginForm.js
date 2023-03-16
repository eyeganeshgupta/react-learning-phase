import { Component } from "react";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  handleChange(syntheticBaseEventObj) {
    this.setState({ username: syntheticBaseEventObj.target.value });
  }

  render() {
    return (
      <form name="loginForm">
        <h1>Login Form</h1>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
        />
        <p>You typed: {this.state.username}</p>
      </form>
    );
  }
}
