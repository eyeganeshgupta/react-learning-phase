import { Component } from "react";

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log("Inside handleClick");
    console.log(this);
    let now = new Date().toLocaleString();
    alert(now);
  };

  render() {
    console.log("Inside render method");
    console.log(this);
    return (
      <div>
        <button onClick={this.handleClick}>Show Date And Time</button>
        <button onClick={this.handleClick}>Logout</button>
      </div>
    );
  }
}

export default MyButton;
