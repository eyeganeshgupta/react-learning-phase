import { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: "Your views about this movie",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(synObj) {
    this.setState({ textAreaValue: synObj.target.value });
  }

  handleSubmit(synObj) {
    synObj.preventDefault();
    console.log(this.state.textAreaValue);
    this.setState({ textAreaValue: "" });
  }

  render() {
    return (
      <form className="MyComponent" onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="">Review us</label>
        <textarea
          value={this.state.textAreaValue}
          onChange={this.handleChange}
        ></textarea>
        <button>Send</button>
      </form>
    );
  }
}

export default MyComponent;
