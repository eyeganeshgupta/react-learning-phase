import { Component } from "react";
import Lottery from "./Lottery";

class App extends Component {
  render() {
    return (
      <div>
        <Lottery />
      </div>
    );
  }
}

export default App;

// <Lottery name="Risk hai toh Ishq hai" maxRange={10} />
// <Lottery name="Low Risk Lottery" maxRange={10} numOfBalls={4} />
