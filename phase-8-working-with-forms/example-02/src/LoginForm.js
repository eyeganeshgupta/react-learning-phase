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

  handleSubmit(syntheticBaseEventObj) {
    syntheticBaseEventObj.preventDefault();
    alert(this.state.username);
    this.setState({ username: "" });
  }

  render() {
    return (
      <form name="loginForm" onSubmit={this.handleSubmit.bind(this)}>
        <h1>Login Form</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
          placeholder="Type your username"
          id="username"
        />
        <button>Submit</button>
      </form>
    );
  }
}
