import { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Sab Khelo, Sab Jeeto",
    numOfBalls: 6,
    maxRange: 50,
  };

  constructor(props) {
    super(props);
    this.state = {
      randomNumbersArr: Array.from({ length: this.props.numOfBalls }),
    };
  }

  handleClick() {
    // 1. create a new empty array
    let newArr = [];

    // 2. generate random values and fill the array
    for (let itr = 1; itr <= this.props.numOfBalls; itr++) {
      let randomValue = Math.floor(Math.random() * this.props.maxRange + 1);
      newArr.push(randomValue);
    }

    // 3. And finally update the state
    this.setState({ randomNumbersArr: newArr });
  }

  render() {
    let ballsArr = this.state.randomNumbersArr.map((val) => {
      return <Ball value={val} />;
    });

    return (
      <div className="Lottery">
        <h3>{this.props.title}</h3>
        <div>{ballsArr}</div>
        <button onClick={this.handleClick.bind(this)}>Generate Lottery</button>
      </div>
    );
  }
}

export default Lottery;
