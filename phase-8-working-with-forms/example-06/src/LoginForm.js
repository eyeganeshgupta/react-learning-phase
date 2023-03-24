import React, { Component } from "react";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(synEventObj) {
    synEventObj.preventDefault();
    alert(
      `${this.usernameRef.current.value}, ${this.emailRef.current.value}, ${this.passwordRef.current.value}`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" ref={this.usernameRef} />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" ref={this.emailRef} />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" ref={this.passwordRef} />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    );
  }
}
