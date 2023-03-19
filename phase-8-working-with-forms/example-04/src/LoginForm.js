import { Component } from "react";
import "./LoginForm.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
    };
    /*
    this.handleChangeForUsername = this.handleChangeForUsername.bind(this);
    this.handleChangeForEmail = this.handleChangeForEmail.bind(this);
    this.handleChangeForPassword = this.handleChangeForPassword.bind(this);
    */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /*
  handleChangeForUsername(syntheticObj) {
    this.setState({ username: syntheticObj.target.value });
  }

  handleChangeForEmail(syntheticObj) {
    this.setState({ email: syntheticObj.target.value });
  }

  handleChangeForPassword(syntheticObj) {
    this.setState({ password: syntheticObj.target.value });
  }
  */

  handleChange(syntheticObj) {
    this.setState({ [syntheticObj.target.name]: syntheticObj.target.value });
  }

  handleSubmit(syntheticObj) {
    syntheticObj.preventDefault();
    window.alert(
      this.state.username + "\n" + this.state.email + "\n" + this.state.password
    );
    this.setState({ username: "", email: "", password: "" });
  }

  render() {
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <h1>Login Form</h1>

        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            placeholder="Type your username"
            onChange={this.handleChange}
          />
          <p>{this.state.username}</p>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            placeholder="Type your email"
            onChange={this.handleChange}
          />
          <p>{this.state.email}</p>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            placeholder="Type your password"
            onChange={this.handleChange}
          />
          <p>{this.state.password}</p>
        </div>

        <button>Submit</button>
      </form>
    );
  }
}
