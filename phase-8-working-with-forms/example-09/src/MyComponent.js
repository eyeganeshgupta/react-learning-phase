import { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "cc",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(synObj) {
    this.setState({ selectValue: synObj.target.value });
  }

  handleSubmit(synObj) {
    synObj.preventDefault();
    console.log(this.state.selectValue);
  }

  render() {
    return (
      <form className="MyComponent" onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="">Favourite Dish</label>
        <select
          name="favFood"
          onChange={this.handleChange}
          value={this.state.selectValue}
        >
          <option value="i">Idli</option>
          <option value="d" selected>
            Dosa
          </option>
          <option value="cc">Chole Chawal</option>
          <option value="pb">Paav Bhaji</option>
        </select>
        <button>Send</button>
      </form>
    );
  }
}

export default MyComponent;
